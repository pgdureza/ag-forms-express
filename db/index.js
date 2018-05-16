
const { Client } = require('pg');

const connectionString = process.env.HEROKU_POSTGRESQL_COBALT_URL

const getClient = () => {
  return new Client({
    connectionString: connectionString,
    ssl: true,
  });
  
}

const db = {
  query: (query, params, callback) => {
    const client = getClient();
    client.connect();
    client.query(query, params || [], (err, res) => {
      if (err) {
        console.log('err',err);
        throw err;
      }
      callback && callback(res.rows);
      client.end();
    });
  }
}

module.exports = db;
