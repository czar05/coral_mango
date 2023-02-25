const User = require("../models/user");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  const body = req.body;
  try {
    if (!body.name || !body.email || !body.password || !body.password2) {
      return res.status(404).json({ message: "Please enter all fields" });
    }
    if (body.password !== body.password2) {
      return res.status(404).json({ message: "Passwords do not match" });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(404).json({ message: "email is already registered" });
    } else {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(body.password, salt);

      const newUser = await User.create({
        name: body.name,
        password: password,
        email: body.email,
      });

      sendToken(newUser, 201, res);
    }
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.login = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User is not registered" });
    }
    const validPassword = bcrypt.compareSync(body.password, user.password);
    if (!validPassword) {
      return res.status(404).json({ message: "Password is incorrect" });
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
module.exports.logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    res.status(500).json({ message: Error.message });
  }
};
