const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// @route GET api/persons
// @desc Get all persons
// @access Public
router.get("/persons", (req, res) => {
  Person.find()
    .sort({ date: -1 })
    .then((persons) => res.json(persons));
});

// @route POST api/persons
// @desc Add new person
// @access Public
router.post("/persons", (req, res) => {
  const newPerson = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
  });
  newPerson.save().then((person) => res.json(person));
});

module.exports = router;
