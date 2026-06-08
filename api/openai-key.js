module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.json({ error: 'Method not allowed' });
  }

  const key = process.env.OPENAI_API_KEY || '';
  if (!key) {
    res.statusCode = 500;
    return res.json({ error: 'Missing OPENAI_API_KEY' });
  }

  return res.json({ key });
};