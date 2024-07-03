const express = require('express');
const app = express();

app.use(express.json());

let courses = [
    { id: 1, name: 'java' },
    { id: 2, name: 'node' },
    { id: 3, name: 'react' }
];

let courses1 = [
    { id: 1, name: 'javascript' },
    { id: 2, name: 'node - v' },
    { id: 3, name: 'react native' }
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/courses1', (req, res) => {
    res.json(courses1);
});

app.post('/courses', (req, res) => {
    console.log(req.body);
    let singlecourse = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(singlecourse);
    res.send(singlecourse);
});

app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    course.name = req.body.name;
    res.send(course);
});

app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    const deletedCourse = courses.splice(courseIndex, 1);
    res.send(deletedCourse[0]);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
