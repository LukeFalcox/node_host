const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var pg = require('pg');
const client = new pg.Client({
    connectionString: process.env.DATABASE_URL || "postgres://orvtrujd:7VsM_OOajd6f8-202_lUcTagWQeLaxqK@silly.db.elephantsql.com/orvtrujd",
});
  

client.connect(function(err) {
  if (err) {
    console.error('could not connect to postgres', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

app.post('/verificar-nome', (req, res) => {

  const nome = req.body.nome;
  client.query('SELECT IdUser FROM Users WHERE nome = $1', [nome], function(err, result) {
    if (err) {
      console.error('error running query', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
    } else {
      if (result.rows.length > 0) {
        res.send(`O nome existe na tabela Users.`);
      } else {
        res.send('O nome não existe na tabela Users.');
      }
    }
  });

});

app.listen(PORT, () => {
  console.log(`App is running on PORT:${PORT}`);
});
