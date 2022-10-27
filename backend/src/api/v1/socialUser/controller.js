const  ErrorHandler = require('../utils/ErrorHandler');
const  catchAsyncErrors = require('../middleware/catchAsyncErrors');
const sendToken = require('../utils/jwtToken')


exports.googleAuth = (req, res) => {
    if (req.user) {
        res.status(200).json({
          success: true,
          message: "Google login Successful",
          user: req.user
        });
        sendToken(req.user, res);
    }
}
exports.logout =(req, res) => {
    req.logout();
    
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message : "Logout"
    })
    res.redirect('/home');
};