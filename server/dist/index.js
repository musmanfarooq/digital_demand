import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import viewDigitalData from "./routes/viewDigitalData.js";
import signupRoute from "./routes/signupRoute.js";
import loginRoute from "./routes/loginRoute.js";
import bodyParser from "body-parser";
import mysql from "mysql2";
const app = express();
const corsOrigin = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));
dotenv.config();
app.use(bodyParser.json());
export const pool = mysql.createPool({
    host: "localhost",
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: parseInt(process.env.SQLPORT),
});
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database!");
    connection.release();
});
app.get("/", (req, res) => {
    res.send("Hello, World");
});
app.get("/data", viewDigitalData);
app.post("/login", loginRoute);
app.post("/signup", signupRoute);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map