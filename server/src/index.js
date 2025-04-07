const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

// 라우트
app.use('/api/contacts', require('./routes/contactRoutes'));

// 환경 변수
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// 데이터베이스 연결
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // 서버 시작
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err)); 