const {query} = require("../db_connection");

const getWeapons = async () => {
  const sql = "SELECT `genshin-weapons`.weapon FROM `genshin-weapons`";
  const result = await query(sql);
  return result;
}

module.exports = getWeapons;