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
    connectionString: process.env.DATABASE_URL || "postgres://gjyhibqb:T-_VWcYoNtafC9h9okk8_LIypUgZgiAh@silly.db.elephantsql.com/gjyhibqb",
});
  
//Faz a conexão
client.connect(function(err) {
  if (err) {
    console.error('could not connect to postgres', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

//Faz a verificação da conta

app.post('/verificar-conta', (req, res) => {
  const { email, senha } = req.body;
  client.query('SELECT * FROM Users WHERE cpf = $1 AND senha = $2;', [email, senha], function(err, result) {
    if (err) {
      console.error('error running query', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
    } else {
      if (result.rows.length > 0) {
        res.send("A conta existe.");
      } else {
        res.send("A não conta existe.");
      }
    }
  });

});

//Faz a verificação da conta

app.post('/transferir', (req, res) => {

  const { email, email2, valor, senha } = req.body;
  client.query('SELECT * FROM contas WHERE idconta = $1 AND senha = $2;', [email, senha], function(err, result) {

    if (err) {
      console.error('error running query', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
    } else {
      if (result.rows.length > 0) {
        client.query('UPDATE contas SET saldo = saldo + $1 WHERE idconta = $2;', [valor, email2], function(err, result) {
          if (err) {
            console.error('error running query', err);
            res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
          } else {
              if (result.rows.length > 0) {
                res.send("Valor transferido.");
                client.query('UPDATE contas SET saldo = saldo - $1 WHERE idconta = $2;', [valor, email2])
              } else {
                res.send("Dados incorretos inseridos.");
              }
            }
        });
      } 
    }
  });

});

app.post('/getNome', (req, res) => {

  const {conta} = req.body;
  const query = 'SELECT nome FROM Users WHERE idconta = $1;';

  client.query(query, [conta], function(err, result) {

    if (err) {
      console.error('error running query', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
    } else {
        if (result.rows.length > 0) {
          const valorNome = result.rows[0].nome;
          res.send(valorNome);
        } else {
          res.send("Dados incorretos inseridos.");
        }
    }

  });

});

app.post('/getSaldo', (req, res) => {
  const { conta } = req.body;
  const query = 'SELECT saldo FROM contas WHERE idconta = $1;';

  client.query(query, [conta], function(err, result) {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
    } else {
      if (result.rows.length > 0) {
        const valorSaldo = result.rows[0].saldo;
        res.send(valorSaldo);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`App is running on PORT:${PORT}`);
});


app.post('/Signup', (req, res) => {

  const { email, email2, senha } = req.body;
  client.query('SELECT * FROM contas WHERE email = $1 AND senha = $2;', [email, senha],function(err, result) {

      if (result.rows.length <= 0) {
        client.query('INSERT INTO users(email,senha) VALUES ($1,$2)', [email2, senha], function(err, result) {
          if (err) {
            console.error('error running query', err);
            res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
          } else {
                res.send("Conta Cadastrada");
              } 
              });
            }
          
        });
      
      });

      app.post('/ContaXUsers', (req, res) => {
        const { email, email2, senha } = req.body;
  client.query('SELECT * FROM contas WHERE email = $1 AND senha = $2;', [email, senha],function(err, result) {
  
  
  })
      });