const Sequelize = require("sequelize");
const sequelize = new Sequelize("impactbyte", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

//CONECCTION
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//MODEL
const User = sequelize.define("user", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

// force: true will drop the table if it already exists
// User.sync({ force: true }).then(() => {
// Table created
//   console.log("table created");
// });

// //CREATE
// User.create({
//   first_name: "Celestino",
//   last_name: "Tino",
//   Email: "tino@celes.com"
// })
//   .then(() => console.log("berhasil!"))
//   .catch(() => console.log(`gagal ${err}`));

//FIND BY ID
// User.findById(1, { raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

//FIND BY ALL
// User.findAll({ raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));
//UPDATE
// User.update(
//   {
//     first_name: "wippy",
//     email: "wippy@gmail.com"
//   },
//   {
//     where: {
//       last_name: "Budi"
//     }
//   }
// )
//   .then(result => {
//     console.log("Berhasil");
//   })
//   .catch(err => console.log(err));

//DELETE
// User.findOne({ where: { id: 5 } })
//   .then(user => {
//     user
//       .destroy()
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   })
//   .catch(err => console.log(err));

// //SEARCH
// User.findOne({ where: { last_name: "Joni" }, raw: true })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

//SEARCH WITH OR
const Op = Sequelize.Op;
User.findAll({
  where: { [Op.or]: [{ last_name: "budi" }, { last_name: "Tino" }] },
  raw: true
})
  .then(user => console.log(user))
  .catch(err => console.log(err));
