export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { prompt, maxTokens } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: 'Falta el prompt' });
  }
  const tokens = Math.min(Math.max(parseInt(maxTokens, 10) || 1000, 200), 4096);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY no está configurada en el entorno' });
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: tokens,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ error: data });
    }

    const text = (data.content || []).map(b => b.text || '').join('\n').trim();
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
