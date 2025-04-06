import {Client} from "pg";

const pgClient = new Client({
    user:"todoDb_owner",
    password:"npg_PxCH5S9kMNJr",
    port:5432,
    host:"ep-snowy-snow-a1h90yry-pooler.ap-southeast-1.aws.neon.tech",
    database:"todoDb",
    ssl:true
})


// async function main(){
//     await pgClient.connect();

    

//     const response = await pgClient.query("SELECT * from users;");
//     console.log(response);
// }

// main();

import express from "express";
const app = express.Router();

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try{

        pgClient.query("BEGIN;")
        
        const insertQuery = `INSERT INTO users (username, email,password) values ($1,$2,$3) RETURNING id;`;
        
        const response = await pgClient.query(insertQuery,[username,email,password]);
        
        //got userId as a response when created the user
        const userId = response.rows[0].id;
        
        // now when adding into address's table, 
        const addressInsertQuery = `INSERT INTO adresses (city,country,street,pincode,user_id) VALUES ($1,$2,$3,$4,$5);`
        
        const adressInsertResponse = await pgClient.query(addressInsertQuery,[city,country,street,pincode,userId])
        
        pgClient.query("COMMIT;")

        res.json({
            message:"signed up successfully"
        })


    } catch(e){
        console.log(e);
        res.json({
            message:"failed to signup"
        })
    }
})