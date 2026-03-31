export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const region = req.query.region || 'IN';
  try {
    const response = await fetch(`https://api.piped.projectsegfau.lt/trending?region=${region}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Trending failed", message: e.message });
  }
}