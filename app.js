const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.')); // Dòng này cực kỳ quan trọng để hiện file index.html có bản đồ

let tasks = [
    { id: 1, title: "Hoàn thành bài tập Docker" },
    { id: 2, title: "Kiểm tra bản đồ Đà Nẵng" } // Thêm dữ liệu mẫu liên quan đến bản đồ
];

// API Lấy danh sách (GET)
app.get('/api/tasks', (req, res) => res.json(tasks));

// API Thêm mới (POST)
app.post('/api/tasks', (req, res) => {
    const task = { id: Date.now(), title: req.body.title };
    tasks.push(task);
    res.status(201).json(task);
});

// API Xóa nhiệm vụ (DELETE)
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.status(204).send();
});

// Cập nhật dòng này để thông báo rõ hơn
app.listen(3000, () => console.log('Hệ thống To-Do & Bản đồ của Ly đang chạy tại port 3000'));