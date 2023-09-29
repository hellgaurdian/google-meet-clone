const jwt = require("jsonwebtoken");

const validate = (req, res, next) => {
  try {
    const token = req.header("token");
    if (!token) return res.status(403).send("Access denied.");

    const decoded = jwt.verify(token, "xZzxczczxczxc");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
module.exports = {
  validate,
};
