const {query} = require("../db_connection");

const getVisions = async () => {
  const sql = "SELECT `genshin-visions`.vision FROM `genshin-visions`";
  const result = await query(sql);
  return result;
}

module.exports = getVisions;