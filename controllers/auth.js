const register = async (req, res) => {
  try {
    res.send("Register");
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  try {
    res.send("Login");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { register, login };
