const db = require("../config/db");

const novoUsuario = {
  nome: "Pedro",
  email: "pedro@gmail.com",
  senha: "1234"
};

// db.update("").where({ id: 1 });

// * async await boom!

async function alterarUsuario() {
  // count
  const { qtde } = await db("usuarios")
    .count("* as qtde")
    .first();

  if (qtde === 0) {
    await db("usuarios").insert(novoUsuario);
  }

  let { id } = await db("usuarios")
    .select("id")
    .limit(1)
    .first();

  await db("usuarios")
    .where({ id })
    .update({ nome: "Erislandio", email: "erislandio.soares@gmail.com" });

  return await db("usuarios").where({ id });
}

alterarUsuario()
  .then(usuario => {
    console.log(usuario);
  })
  .finally(() => {
    db.destroy();
  });
