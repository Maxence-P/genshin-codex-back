require("dotenv").config();
const mysql = require("mysql");

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(config);

const query = (...args) => {
    return new Promise((resolve, reject) => {
      connection.query(...args, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

module.exports = {
    connection,
    query,
};