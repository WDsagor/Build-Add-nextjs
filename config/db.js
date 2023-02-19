const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.host_name,
  user: process.env.user_name,
  password: process.env.password,
  port: process.env.port_name,
  database: process.env.database_name,
});
pool.getConnection((error) => {
  if (error) {
    console.log(error);
  }
  console.log("DB Connected Success");
});
const dataQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arraParms, (error, data) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = { dataQuery };
