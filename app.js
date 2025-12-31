const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

let tasks = [{ id: 1, title: "Hoàn thành bài tập Docker" }];

app.get('/api/tasks', (req, res) => res.json(tasks));
app.post('/api/tasks', (req, res) => {
    const task = { id: Date.now(), title: req.body.title };
    tasks.push(task);
    res.status(201).json(task);
});

app.listen(3000, () => console.log('Server Ly đang chạy tại port 3000'));