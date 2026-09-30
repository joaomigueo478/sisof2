const express = require('express');
const sequelize = require('./models/database');

const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/login', authRoutes);

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco:', error);
    });