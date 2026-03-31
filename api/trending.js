const instances = [
  "https://invidious.flokinet.to",
  "https://yewtu.be",
  "https://inv.vern.cc",
  "https://invidious.io"
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const region = req.query.region || 'IN';

  for (const url of instances) {
    try {
      const response = await fetch(`${url}/api/v1/trending?region=${region}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      }
    } catch (e) { console.log(`Failed: ${url}`); }
  }
  res.status(500).json({ error: "Trending failed on all servers." });
}
