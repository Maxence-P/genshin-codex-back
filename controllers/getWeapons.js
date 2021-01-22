const {query} = require("../db_connection");

const getWeapons = async () => {
  const sql = "SELECT genshin_weapons.weapon FROM genshin_weapons";
  const result = await query(sql);
  return result;
}

module.exports = getWeapons;