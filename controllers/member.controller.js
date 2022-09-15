const express = require("express");
const router = express.Router();
const memberService = require("../service/member.service");

router.get("/:id", read);
router.get("/", readAll);
router.post("/", add);
router.put("/:id", update);
router.delete("/:id", remove);






function add(req, res, next) {
  console.log(req.body)
  memberService
    .add(req,res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function update(req, res, next) {
  memberService
    .update(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function remove(req, res, next) {
  memberService
    .remove(req,res,next)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}

function read(req, res, next) {
  memberService
    .read(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function readAll(req, res, next) {
  memberService
    .readAll(req)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}


module.exports = router;
