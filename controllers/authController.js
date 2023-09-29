const User = require("../Modals/UserModal");
const { createSecretToken } = require("../utils/screatToken");
const bcrypt = require("bcryptjs");

const Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req?.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    let createdAt = new Date();
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

const Signin = async (req, res, next) => {
  try {
    const { email, password } = req?.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      let isOkay = false;
      bcrypt.compare(password, existingUser.password, function (err, result) {
        isOkay = result;
      });
      if (isOkay) {
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({
          message: "User signed in successfully",
          success: true,
        });
      } else {
        res.status(400).json({
          message: "email id or password incorrect",
          success: false,
        });
      }

      next();
    } else {
      return res.status(400).json({
        message: "email id or password incorrect",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
export default {
  Signup,
  Signin,
};
