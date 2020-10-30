const app = require('./app');

const PORT = process.env.APP_PORT || 3333;
app.listen(PORT, () => console.log(`✔️  Server listening at http://localhost:${PORT}`));