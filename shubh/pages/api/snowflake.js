// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'Gangs of Wasseypur' })
// }
import mysql from 'mysql2/promise'
// import { pool } from "../../config/db";
var snowflake = require('snowflake-sdk');

export default async function handler(req, res) {
  // switch (req.method) {
  //   case "GET":
  //return await getProducts(req, res);
  //   const pool = await snowflake.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "",
  //     port: 3306,
  //     database: "sakila",
  // });

  var pool = await snowflake.createConnection({
    username: 'SHUVHD0664',
    password: '',//I will share the password
    account: "accountid.ap-southeast-1",
    role: "accountadmin",
    warehouse:"shubh1"
  });



  await pool.connect(
    function (err, conn) {
      if (err) {
        console.error('Unable to connect: ' + err.message);
      } else {
        console.log('Successfully connected');
       // connection_ID = conn.getId();
        console.log(conn.getId());
      }
    }
  );
  await pool.execute({
  // sqlText: "insert into SHUBH.PUBLIC.persons values (5,'Swetha')",
  sqlText: 'select * from SHUBH.PUBLIC.persons;',
  // role:"accountadmin",
    complete: function (err, stmt, rows) {
      if (err) {
        console.error('Failed to execute statement due to the following error: ' + err.message);
      } else {
        console.log('Successfully executed statement: ' + stmt.getSqlText() + ' > ' + rows.length)
        console.log(rows)
        return res.status(200).json({results:rows})
      }
    }
  });
  pool.destroy

  // try {
  //   console.log("data")
  //   const values = [];
  //   const [data] = await pool.query("select * from USERS", values);
  //   console.log(data)
  //   pool.end();
  //   return res.status(400).json({results:data})
  // return res.status(200).json({results:rows})
  // } catch (error) {
  //   return { error };
  // }

  // pool.use(async (clientConnection) => {
  //   const statement = await clientConnection.execute({
  //     sqlText: 'select * from SHUBH.PUBLIC.USERS;',
  //     complete: function (err, stmt, rows) {
  //       var stream = stmt.streamRows();
  //       stream.on('data', function (row) {
  //         console.log(row);
  //       });
  //       stream.on('end', function (row) {
  //         console.log('All rows consumed');
  //       });
  // //     }
  //   });
  // });

  // pool.connect(
  //   function (err, conn) {
  //     if (err) {
  //       console.error('Unable to connect: ' + err.message);
  //     }
  //     else {
  //       console.log('Successfully connected to Snowflake.');
  //       // Optional: store the connection ID.
  //       console.log(conn.getId());
  //     }
  //   }
  // );
  // case "POST":
  //   return await saveProduct(req, res);
  // default:
  //   return res.status(400).send("Method not allowed");
}


