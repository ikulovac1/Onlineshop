import express from 'express';

const pool = require("../db");

const app = express();

app.use(express.json()); 


//ROUTES/

app.get("/api/items", async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM items");
        res.json(allItems.rows);
    } catch (err) {
        console.log(err.message);
    }
})

app.get("/api/users", async(req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM items");
        const allUsers = await pool.query("SELECT * FROM users");
        const allBids = await pool.query("SELECT * FROM bids");
        
        res.json({
            items: allItems.rows,
            users: allUsers.rows,
            bids: allBids.rows
        });
    } catch (err) {
        console.log(err.message);
    }
})



app.listen(5001, () => {console.log("Server started at http://localhost:5001") });