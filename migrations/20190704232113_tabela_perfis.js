exports.up = function(knex) {
  return knex.schema
    .createTable("perfis", table => {
      table.increments("id").primary();
      table
        .string("nome")
        .notNull()
        .unique();
      table.string("rotulo").notNull();
    })
    .then(function() {
      return knex("perfis").insert([
        { nome: "Comum", rotulo: "Comum" },
        { nome: "admin", rotulo: "administrador" },
        { nome: "master", rotulo: "master" }
      ]);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("perfis");
};
