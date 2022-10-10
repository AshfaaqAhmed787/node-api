const express = require("express");
const router = express.Router();
const stateService = require("../service/state.service");

router.get("/:id", read);
router.get("/", readAll);
router.post("/", add);
router.put("/:id", update);
router.delete("/:id", remove);






function add(req, res, next) {
  console.log(req.body)
  stateService
    .add(req,res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function update(req, res, next) {
  stateService
    .update(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function remove(req, res, next) {
  stateService
    .remove(req,res,next)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

function read(req, res, next) {
  stateService
    .read(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function readAll(req, res, next) {
  stateService
    .readAll(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}


module.exports = router;
