const { Client, Pool } = require('pg');
const url = 'postgres://pm:admin@localhost/pmdb';
const config = {
  user: 'pm',
  database: 'pmdb',
  password: 'admin',
  host: 'localhost',
  port: 5432
};

const pool = new Pool(config);

console.log(
  `Connecting to ${config.database} on host ${config.host} as ${
    config.user
  } on port ${config.port}`
);

pool.on('error', (err, client) => {
  console.log(`idle client error ${err.message} ${err.stack}`);
});

module.exports = {
  query: (text, values, callback) => {
    //console.log('query:', text, values);
    return pool.query(text, values, callback);
  },
  connect: callback => {
    return pool.connect(callback);
  }
};
