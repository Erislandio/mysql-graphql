const db = require("../../config/db");

module.exports = {
  async usuarios() {
    return await db.select("*").from("usuarios");
  },
  async usuario(
    _,
    {
      filtro: { id, email }
    }
  ) {
    if (email) {
      return await db("usuarios")
        .where({ email })
        .first();
    }

    const usuario = await db("usuarios")
      .where({ id })
      .first();

    return usuario;
  }
};
