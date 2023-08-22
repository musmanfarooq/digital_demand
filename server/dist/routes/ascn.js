import express from "express";
import { pool } from "../index.js";
const router = express.Router();
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ error: "Username and password are required." });
    }
    const getUserQuery = "SELECT * FROM users WHERE username = ?";
    pool.query(getUserQuery, [username], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Internal server error.' });
        }
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }
    });
});
export default router;
//# sourceMappingURL=ascn.js.map