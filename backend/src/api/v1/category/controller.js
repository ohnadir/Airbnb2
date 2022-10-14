const { Category } = require('../models');
const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.addCategory = catchAsyncErrors(async (req, res, next)=> {
  const { name, categoryImage, createdBy } = req.body;

    const isNameExist = await Category.findOne({ name });
    if (isNameExist) {
      return next(new ErrorHandler('Name already taken', 404));
    }
    const newCategory = new Category({
      name,
      slug: slugify(name),
      categoryImage,
      createdBy
    });
    await newCategory.save();

    res.status(200).json({
      success: true,
      category:newCategory
  })
});

exports.updateCategory = catchAsyncErrors(async (req, res, next)=> {
  const { id, name, slug, categoryImage } = req.body;

  const category = await Category.findOne({
    _id: id,
    isDelete: false,
  }).exec();
  if (!category) {
    return next(new ErrorHandler('Category not found', 404));
  }
  const isNameExist = await Category.findOne({ name });
  if (
    isNameExist &&
    name === isNameExist.name &&
    String(category._id) !== String(isNameExist._id)){
    return next(new ErrorHandler('Name already taken', 404));
  }
  category.name = name ? name : category.name;
  category.slug = slug ? slug : category.slug;
  category.categoryImage = categoryImage ? categoryImage : category.categoryImage;
  await category.save();

  res.status(200).json({
    success: true,
    message: "Category Update Successfully"
  })
});

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const id = req.body;
  const category = await Category.findOne({
      _id: id,
      isDelete: false,
  });
  if (!category) {
    return next(new ErrorHandler('No category data found', 404));
  }

  category.isDelete = true;
  category.deletedAt = Date.now();
  await category.save();
  res.status(200).json({
    success: true,
    message: "Category Delete Successfully" 
  })

});

exports.getCategories = catchAsyncErrors(async (req, res, next)=> {
    const categories = await Category.find({})

    if (categories.length === 0) {
      return next(new ErrorHandler('No Category data found', 404));
    }
    res.status(200).json({
      success: true,
      data: categories
    })
});
