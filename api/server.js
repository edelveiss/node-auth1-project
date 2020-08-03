const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const restricted = require("../auth/restricted-middleware.js");

// get our express routers
const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");

// create the server object
const server = express();

//----------------------------------------------------------------------------//
// create the config object for express-session. This will be passed to
// "session" when it is set up as global middleware, below.
//----------------------------------------------------------------------------//
const sessionConfig = {
  name: "tzsession",
  secret: "myspeshulsecret",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, // should be true in production
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,

  store: new knexSessionStore({
    knex: require("../database/dbConfig.js"),
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};

// global middleware
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));
server.use("/api/users", restricted, usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
