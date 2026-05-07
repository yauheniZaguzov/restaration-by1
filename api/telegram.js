const TELEGRAM_API = 'https://api.telegram.org/bot';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pick(fields, names) {
  for (const name of names) {
    const value = fields[name];
    if (value && String(value).trim()) {
      return String(value).trim();
    }
  }
  return '';
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: 'Telegram is not configured' });
  }

  const body = typeof req.body === 'object' && req.body ? req.body : {};
  const fields = body.fields || {};
  const name = pick(fields, ['form_fields[name]', 'name', 'Ваше имя']);
  const phone = pick(fields, ['form_fields[email]', 'form_fields[phone]', 'phone', 'tel', '+375']);
  const pageTitle = body.pageTitle || fields.referer_title || '';
  const pageUrl = body.pageUrl || '';

  if (!phone) {
    return res.status(400).json({ ok: false, error: 'Phone is required' });
  }

  const lines = [
    '<b>Новая заявка с сайта Restoration.by</b>',
    name ? `<b>Имя:</b> ${escapeHtml(name)}` : '',
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    pageTitle ? `<b>Страница:</b> ${escapeHtml(pageTitle)}` : '',
    pageUrl ? `<b>URL:</b> ${escapeHtml(pageUrl)}` : '',
  ].filter(Boolean);

  const response = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    return res.status(502).json({ ok: false, error: text });
  }

  return res.status(200).json({ ok: true });
};
