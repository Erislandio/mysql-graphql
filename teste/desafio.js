const db = require("../config/db");

async function salvarUsuario(nome, email, senha) {
  let novoUsuario = await db("usuarios").insert({ nome, email, senha });

  return novoUsuario;
}

async function salvarPerfil(nome, rotulo) {
  const novoPerfil = await db("perfis").insert({ nome, rotulo });

  return novoPerfil;
}

async function adicionarPerfis(usuario, ...perfis) {
  const usuarioAdicionado = await db("usuarios").insert(usuario);
  const perfisAdicionado = await db("perfis").insert({ ...perfis });

  return {
    usuarioAdicionado,
    perfisAdicionado
  };
}

async function executar() {
  const usuario = await salvarUsuario("Ana", "ana@empresa.com.br", "123456");
  const perfilA = await salvarPerfil("rh", "Pessoal");
  const perfilB = await salvarPerfil("fin", "Financeiro");

  console.log(usuario);
  console.log(perfilA);
  console.log(perfilB);

  await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy());
