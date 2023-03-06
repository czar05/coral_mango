const Restaurent = require("../models/restaurent");
const Review = require("../models/review");
module.exports.getAll = async (req, res) => {
  try {
    const restaurent = await Restaurent.find().populate({ path: "reviews" });

    res.status(200).json({
      restaurent,
      message: "restaurent is fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.getRestaurent = async (req, res) => {
  const id = req.params.id;
  try {
    const restaurent = await Restaurent.find(id);
    if (!restaurent) {
      return res.status(400).json({
        message: "restaurant does not exist",
      });
    }

    res.status(200).json({
      restaurent,
      message: "restaurent is fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const newRestaurent = await Restaurent.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
    });
    newRestaurent.categories.push(req.body.category);
    newRestaurent.save();
    res.status(200).json({
      restaurent: newRestaurent,
      message: "restaurent is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.createReview = async (req, res) => {
  const { reviewName, restaurentId } = req.body;
  try {
    const restaurent = await Restaurent.findById(req.body.restaurentId);
    if (!restaurent) {
      return res.status(404).json({ message: "restaurent does not exist" });
    }

    const review = await Review.create({
      review: reviewName,
      restaurent: restaurentId,
    });
    restaurent.reviews.push(review._id);
    restaurent.noOfReviews = restaurent.reviews.length;
    restaurent.save();
    res.status(201).json({
      restaurent,
      message: "review is submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.getRestaurentReview = async (req, res) => {
  try {
    const restaurent = await Restaurent.find();

    res.status(200).json({
      restaurent,
      message: "restaurent with reviews  are fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
