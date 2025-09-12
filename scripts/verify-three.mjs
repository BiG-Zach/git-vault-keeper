import https from 'https';

const URLS = [
  'https://bradfordinformedguidance.com/services/health-insurance',
  'https://bradfordinformedguidance.com/services/life-insurance',
  'https://bradfordinformedguidance.com/about'
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' }
    }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
  });
}

function hasOneH1(html) {
  const matches = html.match(/<h1\b[^>]*>/gi) || [];
  return matches.length >= 1; // minimally ensure presence
}

(async () => {
  for (const url of URLS) {
    try {
      const { status, body } = await fetch(url);
      const statusOk = status === 200;
      const titleOk = /<title>/i.test(body);
      const metaOk = /name=["']description["']/i.test(body);
      const h1Ok = hasOneH1(body);
      const canonOk = new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'i').test(body);
      const jsonldOk = /application\/ld\+json/i.test(body);
      console.log(`URL=${url} status=${statusOk ? '200' : status} title=${titleOk?'ok':'missing'} meta=${metaOk?'ok':'missing'} h1=${h1Ok?'ok':'missing'} canonical=${canonOk?'ok':'missing/other'} jsonld=${jsonldOk?'ok':'missing'}`);
    } catch (e) {
      console.log(`URL=${url} ERROR=${e.message}`);
    }
  }
})();
