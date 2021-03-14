const express = require("express");
const router = express.Router();

//@route GET api/contacts
//@desc get all users contacts
//@access private

router.get("/", (res, req) => {
  res.send("get all contacts");
});

//@route POST api/contacts
//@desc add new contacts
//@access private

router.post("/", (res, req) => {
  res.send("add contacts");
});

//@route PUT api/contacts/:id
//@desc update contacts
//@access private

router.put("/:id", (req, res) => {
  res.send("update contacts");
});

//@route DELETE api/contacts/:id
//@desc delete contacts
//@access private

router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});
module.exports = router;
