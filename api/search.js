export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { q } = req.query;
  try {
    const response = await fetch(`https://api.piped.projectsegfau.lt/search?q=${q}&filter=videos`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Search failed" });
  }
}