const mysql = require("mysql2");
// Create a connection to the MySQL server
const connection = mysql.createConnection({
    user: "root",
    password: "admin@123",
    database: "digital_demand",
    port: 3306,
});
connection.query("CREATE DATABASE IF NOT EXISTS digital_demand", (err) => {
    if (err) {
        console.error("Error creating database:", err);
        connection.close();
        return;
    }
    console.log('Database "digital_demand" created.');
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
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL UNIQUE
      )
    `;
        connection.query(createUserTableQuery, (err) => {
            if (err) {
                console.error("Error creating users table:", err);
            }
            else {
                console.log('Table "users" created.');
            }
            connection.close();
        });
    });
});
export {};
//# sourceMappingURL=digital_demand_migrate.js.map