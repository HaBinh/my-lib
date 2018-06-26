var mongoose = require("mongoose");
var passport = require("passport");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var Book = require("../models/book");
var UserController = require("../controllers/user.controller");
var BookController = require("../controllers/book.controller");

router.post("/signup", UserController.signup);

router.post("/signin", UserController.signin);

router.post("/book", passport.authenticate("jwt", { session: false }), BookController.create);

router.get("/book", passport.authenticate("jwt", { session: false }), BookController.getAll);

module.exports = router;