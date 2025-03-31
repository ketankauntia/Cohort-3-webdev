import {Client} from "pg";

// const pgClient = new Client("postgresql://todoDb_owner:npg_PxCH5S9kMNJr@ep-snowy-snow-a1h90yry-pooler.ap-southeast-1.aws.neon.tech/todoDb?sslmode=require");

const pgClient = new Client({
    user:"todoDb_owner",
    password:"npg_PxCH5S9kMNJr",
    port:5432,
    host:"ep-snowy-snow-a1h90yry-pooler.ap-southeast-1.aws.neon.tech",
    database:"todoDb",
    ssl:true
})


async function main(){
    await pgClient.connect();

    

    const response = await pgClient.query("SELECT * from users;");
    console.log(response);
}

main();

// -------------------- in express -> SQL Injection & how to prevent

app.post("/signup", async (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try{


        // best practice : 
        // 
        // pass as $1, $2... in the query
        // 
        // the query reaches directly to postgres db,
        // 
        // then the values are inserted into the db directly
        // 
        // instead of getting inserted into the query and then the query being executed.

        const insertQuery = `INSERT INTO users (username, email,password) values ($1,$2,$3);`;

        const response = await pgClient.query(insertQuery,[username,email,password]);

        res.json({
            message:"signedup successfully"
        })


    } catch(e){
        console.log(e);
        res.json({
            message:"failed to signup"
        })
    }
})