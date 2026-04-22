import express from 'express';
import Database from 'better-sqlite3';

const db = new Database('database.db');

const app = express();
app.use(express.json()) /* para o express entender o formato json */

// criar a tabela
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT UNIQUE
  )
`).run();


const usuarios = []

app.post('/users' , (req, res) => {

        const { nome, idade, email } = req.body;

        const idadeNum = Number(idade);

        const inserirUsuario = db.prepare(
          'INSERT INTO users (name, age, email) VALUES (?, ?, ?)'
        );
        
        const resultado = inserirUsuario.run(nome, idadeNum, email);

        res.status(201).json({
          id: resultado.lastInsertRowid,
          name: nome,
          age: idadeNum,
          email: email
        });
      }) /* cria um novo usuário */

app.get('/users', (req, res) => {
  const usuarios = db.prepare('SELECT * FROM users').all();
  res.status(200).json(usuarios);
});  /* trás todos os usuários */

app.put('/users/:id', (req, res) => {
  // pega id da URL
  // pega body
  // converte idade se precisar
  // roda UPDATE no banco
  // responde se deu certo
});



app.listen(3000, () => {
console.log('http://localhost:3000/users');
});


/*
app.put('/users')  editar um usuário existente 
app.delete('/users')  deleta um usuário existente 
*/