
const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.MYSQLDB_USER || 'root',
    DB_PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD || '',
    DB_NAME: process.env.MYSQLDB_DATABASE || 'citasVet',
    DB_PORT: process.env.MYSQLDN_DOCKER || 3306
  };
  
  module.exports = config;