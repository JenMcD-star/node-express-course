const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("username and password are required");
  } else {
    const token = jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });

    res.status(200).json({ msg: `Username: ${username}`, token });
  }
};

const hello = async (req, res) => {
  res.status(200).json({
    msg: `Hello, ${req.user.username}! `,
  });
};
module.exports = { login, hello };
