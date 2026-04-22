import express from "express";
import Database from "better-sqlite3";

const db = new Database("database.db");

const app = express();
app.use(express.json()); /* para o express entender o formato json */

// criar a tabela
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT UNIQUE
  )
`,
).run();

const usuarios = [];

app.post("/users", (req, res) => {
  const { nome, idade, email } = req.body;

  const idadeNum = Number(idade);

  const inserirUsuario = db.prepare(
    "INSERT INTO users (name, age, email) VALUES (?, ?, ?)",
  );

  const resultado = inserirUsuario.run(nome, idadeNum, email);

  res.status(201).json({
    id: resultado.lastInsertRowid,
    name: nome,
    age: idadeNum,
    email: email,
  });
}); /* cria um novo usuário */

app.get("/users", (req, res) => {
  const usuarios = db.prepare("SELECT * FROM users").all();
  res.status(200).json(usuarios);
}); /* trás todos os usuários */

app.put("/users/:id", (req, res) => {
  // pega id da URL
  const id = req.params.id;

  // pega body
  const { nome, idade, email } = req.body;

  // converte idade se precisar
  const idadeNum = Number(idade);

  // roda UPDATE no banco
  const atualizarUsuario = db.prepare(`
    UPDATE users 
    SET name = ?, age = ?, email = ? 
    WHERE id = ?
  `);

  const resultado = atualizarUsuario.run(nome, idadeNum, email, id);

  // responde se deu certo
  if (resultado.changes === 0) {
    // Se não mudou nada, é porque o ID não existe no banco
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }
  res.status(200).json({
    mensagem: "Usuário atualizado!",
    dadosNovos: { id, nome, idadeNum, email },
  });
});

app.delete("/users/:id", (req, res) => {
  try {
    // 1. Pega o ID da URL (ex: /users/3)
    const id = req.params.id;

    // 2. Prepara o comando de deletar no banco
    const deletarUsuario = db.prepare("DELETE FROM users WHERE id = ?");

    // 3. Roda o comando passando o ID
    const resultado = deletarUsuario.run(id);

    // 4. Responde se deu certo
    if (resultado.changes === 0) {
      // O 'return' faz o código parar aqui mesmo!
      return res.status(404).json({ erro: "Usuário não encontrado!" });
    }

    res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
  } catch (erro) {
    res.status(500).json({ erro: "Erro interno ao tentar deletar o usuário." });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000/users");
});

/*
app.put('/users')  editar um usuário existente 
app.delete('/users')  deleta um usuário existente 
*/
