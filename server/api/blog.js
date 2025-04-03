const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const router = express.Router();

router.get('/naver-blog', async (req, res) => {
  try {
    const naverBlogId = process.env.NAVER_BLOG_ID || 'YOUR_NAVER_BLOG_ID';
    const response = await axios.get(`https://rss.blog.naver.com/${naverBlogId}.xml`);
    
    // XML을 JSON으로 변환
    const parser = new xml2js.Parser({ explicitArray: false });
    parser.parseString(response.data, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'XML 파싱 오류' });
      }
      
      const items = Array.isArray(result.rss.channel.item) 
        ? result.rss.channel.item 
        : [result.rss.channel.item];
      
      const posts = items.map(item => ({
        id: item.guid || item.link,
        title: item.title,
        content: item.description,
        date: new Date(item.pubDate).toLocaleDateString('ko-KR'),
        link: item.link
      }));
      
      res.json(posts);
    });
  } catch (error) {
    console.error('블로그 데이터 가져오기 오류:', error);
    res.status(500).json({ error: '블로그 데이터를 가져오는 중 오류가 발생했습니다.' });
  }
});

module.exports = router; 