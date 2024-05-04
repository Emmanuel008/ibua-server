const dbConfig = require("../config/dbConfig.js");
const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.images = require("./image.model.js")(sequelize, DataTypes);
db.testimonies = require("./testimonial.models.js")(sequelize, DataTypes);
db.faqs = require("./FAQs.models.js")(sequelize, DataTypes);
db.updates = require("./updates.models.js")(sequelize, DataTypes);
db.users = require("./user.models.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => { })
.then(() => {
     console.log("Yes re-sync done.");
});

module.exports = db;
