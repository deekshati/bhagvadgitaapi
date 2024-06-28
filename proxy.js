const cors_anywhere = require('cors-anywhere');

const PORT = process.env.PORT || 8080;

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, () => {
  console.log(`CORS Anywhere proxy server is running on localhost:${PORT}`);
});
