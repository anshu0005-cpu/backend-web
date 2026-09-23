const express = require("express");
const router = express.Router();

let students = require("../data/student");

// GET all students
router.get("/", (req, res) => {
    res.json(students);
});

// GET student by ID
router.get("/:id", (req, res) => {
    let student = students.find(s => s.id == req.params.id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// ADD student
router.post("/", (req, res) => {
    let student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.json(student);
});

// UPDATE student
router.put("/:id", (req, res) => {
    let student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});

// DELETE student
router.delete("/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);

    res.json({ message: "Student deleted" });
});

module.exports = router;


router.post("/", (req, res) => {
    students.push(req.body);
    res.send("Student added");
});