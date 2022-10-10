const express = require("express");
const router = express.Router();
const cityService = require("../service/city.service");

router.get("/:id", read);
router.get("/", readAll);
router.get("/state/:stateId", readByState);
router.post("/", add);
router.put("/:id", update);
router.delete("/:id", remove);



function add(req, res, next) {
  console.log(req.body)
  cityService
    .add(req,res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function update(req, res, next) {
  cityService
    .update(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function remove(req, res, next) {
  cityService
    .remove(req,res,next)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

function read(req, res, next) {
  cityService
    .read(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function readAll(req, res, next) {
  cityService
    .readAll(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function readByState(req, res, next) {
  cityService
    .readByState(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

module.exports = router;
