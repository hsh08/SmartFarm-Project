const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ 더미 데이터 (MySQL 연결 전 테스트용)
let dummyData = [
  { id: 1, temperature: 24, humidity: 60, created_at: "2025-07-27 10:00" },
  { id: 2, temperature: 25, humidity: 55, created_at: "2025-07-27 10:05" },
];

// ✅ GET: 센서 데이터 조회
app.get('/sensor-data', (req, res) => {
  res.json(dummyData);
});

// ✅ POST: 센서 데이터 추가 (테스트용)
app.post('/sensor-data', (req, res) => {
  const { temperature, humidity } = req.body;
  const newData = {
    id: dummyData.length + 1,
    temperature,
    humidity,
    created_at: new Date().toISOString(),
  };
  dummyData.push(newData);
  res.status(201).json(newData);
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});