const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

// Dữ liệu mẫu ban đầu
let tasks = [
    { id: 1, title: "Hoàn thành bài tập Docker" }
];

// 1. API Lấy danh sách (GET)
app.get('/api/tasks', (req, res) => res.json(tasks));

// 2. API Thêm nhiệm vụ (POST)
app.post('/api/tasks', (req, res) => {
    const task = { id: Date.now(), title: req.body.title };
    tasks.push(task);
    res.status(201).json(task);
});

// 3. API Xóa nhiệm vụ (DELETE)
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.status(204).send();
});

app.listen(3000, () => console.log('Server Ly đang chạy tại port 3000'));