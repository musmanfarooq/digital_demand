import mysql from "mysql2";

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  user: process.env.USERNAME,
  password: process.env.PASSWORD ,
  port: parseInt(process.env.SQLPORT),
});

console.log(connection)

// Create the digital_demand database
connection.query("CREATE DATABASE IF NOT EXISTS digital_demand", (err) => {
  if (err) {
    console.error("Error creating database:", err);
    connection.close();
    return;
  }

  console.log('Database "digital_demand" created.');

  // Connect to the digital_demand database
  connection.changeUser({ database: "digital_demand" }, (err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      connection.close();
      return;
    }

    // Create the users table
    const createUserTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `;

    connection.query(createUserTableQuery, (err) => {
      if (err) {
        console.error("Error creating users table:", err);
      } else {
        console.log('Table "users" created.');
      }

      connection.close();
    });
  });
});
