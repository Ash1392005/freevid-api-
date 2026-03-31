const instances = [
  "https://api.piped.projectsegfau.lt",
  "https://pipedapi.moomoo.me",
  "https://piped-api.garudalinux.org",
  "https://pipedapi.kavin.rocks"
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const region = req.query.region || 'IN';

  for (const url of instances) {
    try {
      const response = await fetch(`${url}/trending?region=${region}`);
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      }
    } catch (e) {
      console.log(`Failed: ${url}`);
    }
  }
  res.status(500).json({ error: "All servers are down." });
}
