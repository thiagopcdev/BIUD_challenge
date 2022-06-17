require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = require('./app');

app.listen(PORT, () => console.log(`Servidor backend rodando na porta ${PORT}`));
