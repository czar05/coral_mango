const Restaurent = require("../models/restaurent");
module.exports.getAll = async (req, res) => {
  try {
    const restaurent = await Restaurent.find();
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
    res.status(200).json({
      restaurent: newRestaurent,
      message: "restaurent is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.createReview = async (req, res) => {
  const { reviews, restuarentId } = req.body;
  try {
    const restaurent = await Restaurent.findById(restuarentId);
    restaurent.reviews.push(reviews);
    restaurent.noOfReviews = restaurent.reviews.length;
    await restaurent.save();
    res.status(200).json({
      restaurent,
      message: "review is submitted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
