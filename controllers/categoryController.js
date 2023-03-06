const Restaurent = require("../models/restaurent");
const Category = require("../models/category");
module.exports.getAll = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const restaurent = await Restaurent.find({ categories: { $in: [id] } });

    res.status(200).json({
      restaurent,
      message: "category is fetched successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};

module.exports.createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
    });
    res.status(200).json({
      newCategory,
      message: "category is created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
