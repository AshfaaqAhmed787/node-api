const express = require("express");
const loginService = require("../service/login.service");
const router = express.Router();

router.post("/login", validate);

function validate(req, res, next) {
  loginService
    .validate(req,res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

module.exports = router;
