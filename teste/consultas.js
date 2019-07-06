const db = require("../config/db");

// db("perfis")
//   .then(res => res.map(p => p.nome))
//   .then(nomes => console.log(nomes))
//   .catch(error => {
//     throw new Error(error);
//   })
//   .finally(() => {
//     db.destroy();
//   });

// db("perfis")
//   .select("nome", "id")
//   .then(res => {
//     console.log(res);
//   })
//   .finally(() => db.destroy());

// db.select("nome")
//   .from("perfis")
//   .then(res => console.log("nomes ==>", res));

db("perfis")
  .where({ id: 2 })
  .first()
  .then(res => console.log(res.nome));
