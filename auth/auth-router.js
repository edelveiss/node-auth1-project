const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");

//----------------------------------------------------------------------------//
// POST /api/auth/register
//
// in this method, we extract the user object info from the req.body. we then
// hash the password using bcrypt and store the hash on the user object before
// passing it in to Users.add, so it's the *hash* that is stored in the DB, not
// the plain text password.
//
// note that the hash is a hash of the user's password, plus a "salt" string.
// Salt is a random string that is appended to the password before the hashing
// algorithm is executed.

//----------------------------------------------------------------------------//
router.post("/register", async (req, res) => {
  const user = req.body;

  //   const ROUNDS = process.env.HASH_ROUNDS || 8;
  //   const hash = bcrypt.hashSync(user.password, ROUNDS);
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash; //overriding the original pw by hash

  try {
    const saved = await Users.add(user);

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

//----------------------------------------------------------------------------//
// Here we pull the username/password from the body, and use them to validate
// the password "guess"
//----------------------------------------------------------------------------//
router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await Users.findBy({ username }).first();
    // .compareSync() uses the algorithm version, cost factor, and salt,
    // all from the hash we pass in (the one we read from the database),
    // and combined with the user's password guess, computes a new hash.
    // It then compares the newly computed hash with the one we read
    // from the database, and returns "true" if they are a match.
    if (user && bcrypt.compareSync(password, user.password)) {
      // once we are here, we are authenticated.

      req.session.user = user;
      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      // req.session.user will not exist if we end up here
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    // req.session.loggedin will not exist if we end up here
    res.status(500).json(error);
  }
});

//----------------------------------------------------------------------------//
// logging out
//----------------------------------------------------------------------------//
router.delete("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ message: "error logging out:", error: err });
      } else {
        res.json({ message: "logged out" });
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
