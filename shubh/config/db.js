import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "Shubh@270896",
    port: 3306,
    database: "sakila",
  },
});

export { pool };