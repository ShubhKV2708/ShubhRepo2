// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'Gangs of Wasseypur' })
// }
import mysql from 'mysql2/promise'
// import { pool } from "../../config/db";


export default async function handler(req, res) {
  // switch (req.method) {
  //   case "GET":
      //return await getProducts(req, res);
      const pool = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "sakila",
    });
      try {
        console.log("data")
       const values =[];
        const [data] = await pool.query("SELECT * FROM actor", values);
        console.log(data)
         pool.end();
        res.status(400).json({results:data})
       
      } catch (error) {
        return { error };
      }
    // case "POST":
    //   return await saveProduct(req, res);
    // default:
    //   return res.status(400).send("Method not allowed");
  }


const getProducts = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM sakila.actor");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const result = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};