const Toy = require("../model/toyModel");
const asyncWrapper = require("../middleware/asyncWrapper");
const jwt = require("jsonwebtoken");
const CustomError = require("../errors/customError");

const searchToysByName = asyncWrapper(async (req, res, next) => {
  const { name } = req.params;

  const toy = await Toy.find({
    name: {
      $regex: new RegExp(name),
      $options: "i",
    },
  });

  if (toy.length === 0) {
    return next(
      new CustomError("Toys not found, use a different search query", 404)
    );
  }
  res.status(200).json({
    success: true,
    message: toy,
  });
});

const getToyById = asyncWrapper(async (req, res, next) => {
  const { toyId } = req.params;
  const toy = await Toy.findById(toyId);
  if (!toy) {
    return next(
      new CustomError("Toy with the specified ID does not exist", 404)
    );
  }
  res.status(200).json({
    success: true,
    message: toy,
  });
});

const addToy = asyncWrapper(async (req, res, next) => {
  try {
    jwt.verify(global.JWT_TOKEN, process.env.JWT_SECRET);
  } catch (error) {
    return next(new CustomError("User must be logged in to add toys", 403));
  }
  const toy = await Toy.create(req.body);
  res.status(200).json({
    success: true,
    data: toy,
  });
});

const editToy = asyncWrapper(async (req, res, next) => {
  try {
    jwt.verify(global.JWT_TOKEN, process.env.JWT_SECRET);
  } catch (error) {
    return next(
      new CustomError("User must be logged in to edit toy details", 403)
    );
  }
  const { toyId } = req.params;
  const toy = await Toy.findOneAndUpdate(
    {
      _id: toyId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!toy) {
    return next(new CustomError("Toy does not exist", 404));
  }
  res.status(200).json({
    success: true,
    message: toy,
  });
});

const deleteToy = asyncWrapper(async (req, res, next) => {
  try {
    jwt.verify(global.JWT_TOKEN, process.env.JWT_SECRET);
  } catch (error) {
    return next(new CustomError("User must be logged in delete toys", 403));
  }
  const { toyId } = req.params;
  const toy = await Toy.deleteOne({
    _id: toyId,
  });
  if (toy.deletedCount === 0) {
    return next(
      new CustomError("No Toys were deleted, specify the correct toy id", 404)
    );
  }
  res.status(200).json({
    success: true,
    message: "Toy deleted successfully",
  });
});

module.exports = {
  searchToysByName,
  getToyById,
  addToy,
  editToy,
  deleteToy,
};
