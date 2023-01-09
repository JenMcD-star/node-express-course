const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(403).json({ message: "token missing" });
  }
  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { username } = decoded;
    req.user = { username };
    next();
  } catch (error) {
    res.send("there's been an error");
  }
};

module.exports = authenticate;
