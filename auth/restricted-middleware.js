module.exports = (req, res, next) => {
  console.log("session", req.session);
  if (req.session && req.session.user) {
    //if (req.session && req.session.cookie) {
    console.log("auth");
    next();
  } else {
    res.status(401).json({ message: "not logged in" });
  }
};
