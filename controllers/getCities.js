const {query} = require("../db_connection");

const getCities = async () => {
  const sql = "SELECT `genshin-cities`.city FROM `genshin-cities` LIMIT 7";
  const result = await query(sql);
  return result;
}

module.exports = getCities;