const mongoose = require("mongoose");

const restaurentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [
      {
        type: String,
      },
    ],
    noOfReviews: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurent = mongoose.model("Restaurent", restaurentSchema);
module.exports = Restaurent;
