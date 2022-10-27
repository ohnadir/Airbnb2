const { User } = require('../models');
const crypto = require('crypto');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')
const sendEmail = require('../utils/sendEmail');

exports.userRegister = catchAsyncErrors(async (req, res, next)=> {
  const { firstName, lastName, password, email, phone, role } = body;

    const isPhoneExist = await User.findOne({ phone });
    if (isPhoneExist) {
      return next(new ErrorHandler('Phone number already taken', 400))
    }

    if (email) {
      const isEmailExist = await User.findOne({ email });
      if (isEmailExist) {
        return next(new ErrorHandler('Email already taken', 400))
      }
    }

    const newUser = new User({
      firstName, lastName, email,
      password, phone, role });

    await newUser.save();

    const token = newUser.getJwtToken();
    sendToken(newUser, res);

    res.status(200).json({
      success: true,
      token:token,
      message: "Register Successfully"
    })
});

exports.userLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler('Incorrect credential', 404));
  }
    
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler('Incorrect credential', 404));
  }
  sendToken(user, res);
  res.status(200).json({
    success: true,
    message: "Login Successfully"
  })
});

exports.updateUser =  catchAsyncErrors(async (req, res, next) => {
  const { id, firstName, lastName, phone, email } = req.body;

  const user = await User.findOne({
     _id: id,
    isDelete: false,
  }).exec();
    if (!user) {
      return next(new ErrorHandler('No user Found', 400))
    }

    const isPhoneExist = await User.findOne({ phone });
    if (
      isPhoneExist &&
      phone === isPhoneExist.phone &&
      String(user._id) !== String(isPhoneExist._id)) {
      response.message = 'Phone number already taken';
      return next(new ErrorHandler('Phone number already taken', 400))
    }

    const isEmailExist = await User.findOne({ email });
    if (
      isEmailExist &&
      email === isEmailExist.email &&
      String(user._id) !== String(isEmailExist._id)) {
      return next(new ErrorHandler('Email already taken', 400))
    }

    user.firstName = firstName ? firstName : user.firstName;
    user.lastName = lastName ? lastName : user.lastName;
    user.phone = phone ? phone : user.phone;
    user.email = email ? email : user.email;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Update Successfully",
      data: user
    })
});

exports.deleteUser = async () => {
  const { id } = req.params.id;

    const user = await User.findOne({
      _id: id,
      isDelete: false,
    });
    if (!user) {
      return next(new ErrorHandler('No User data found', 400))
    }

    user.isDelete = true;
    user.deletedAt = Date.now();
    await user.save();

    res.status(200).json({
      success: true,
      message: "User Delete Successfully"
    })
};

exports.getUsers = async () => {
  const pageNumber = parseInt(page) || 1;
  const limit = parseInt(size) || 10;

  const totalDocuments = await User.countDocuments({
    isDelete: false,
  });
  const totalPage = Math.ceil(totalDocuments / limit);

  const buyers = await User.find({ isDelete: false })
    .select('-__v -isDelete')
    .sort({ _id: -1 })
    .skip((pageNumber - 1) * limit)
    .limit(limit)
    .lean();
    
  const users = await User.find({ isDelete: false })
  if (users.length === 0) {
    return next(new ErrorHandler('No User data found', 400))
  }

  const data = {
    buyers,
    currentPage: pageNumber,
    totalDocuments,
    totalPage,
  };

  res.status(200).json({
    success: true,
    data : data
  })
};

exports.searchUser = async ({ q }) => {
  const response = {
    code: 200,
    status: 'success',
    message: 'User data found successfully',
    data: {},
  };

  try {
    let query = { isDelete: false };
    if (q !== 'undefined' || q !== undefined || q) {
      let regex = new RegExp(q, 'i');
      query = {
        ...query,
        $or: [{ firstName: regex }, { lastName: regex }, { phone: regex }, { email: regex }],
      };
    }

    response.data.users = await User.find(query)
      .select('-__v -isDelete')
      .sort({ _id: -1 });

    if (response.data.users.length === 0) {
      response.code = 404;
      response.status = 'Failed';
      response.message = 'No User data found';
    }

    return response;
  } catch (error) {
    response.code = 500;
    response.status = 'Failed';
    response.message = 'Error. Try again';
    return response;
  }
};

exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {

  const id  = req.params.id ;
  const user = await User.findOne({
    _id: id,
    isDelete: false,}).select('-__v -isDelete').exec();
  
  res.status(200).json({
    success: true,
    user:user
  })

});

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {

  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true
  })
  res.status(200).json({
    success: true,
    message : "log out"
  })
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const email = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorHandler('User not found with this email', 404));
  }

  // Get reset token
  const resetToken = user.getResetPasswordToken();
  await user.save();

  // Create reset password URL 
  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/password/reset/${resetToken}`
  const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nif you have not request this email, then ignore it.`
  if (user) {
    await sendEmail({
      email: user.email,
      subject: 'airbnb Password Recovery',
      message
    })
  }
  res.status(200).json({
    success: true,
    message : "Password recovery request"
  })

});

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

  // Hash URL token
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

  const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
  })

  if (!user) {
      return next(new ErrorHandler('Password reset token is invalid or has been expired', 400))
  }

  if (req.body.password !== req.body.confirmPassword) {
      return next(new ErrorHandler('Password does not match', 400))
  }

  // Setup new password
  user.password = req.body.password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res)

})

// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select('+password');

  // Check previous user password
  const isMatched = await user.comparePassword(req.body.oldPassword)
  if (!isMatched) {
      return next(new ErrorHandler('Old password is incorrect'));
  }

  user.password = req.body.password;
  await user.save();

  sendToken(user, 200, res)

})

exports.updateProfile = async ({ id, body }) => {
  const response = {
    code: 201,
    status: 'Success',
    message: 'Password update  successfully',
  };

  const user = await User.findById({_id: id});

  if (!user) {
    response.code = 400;
    response.status = 'Failed';
    response.message = 'User is not Fount';
    return response;
  }

  const isMatched = await user.comparePassword(body.oldPassword)
  if (!isMatched) {
    response.code = 400;
    response.status = 'Failed';
    response.message = 'Old password is incorrect';
    return response;
  }
  user.password = body.password;
  await user.save();
  sendToken(user, 200, res)
}