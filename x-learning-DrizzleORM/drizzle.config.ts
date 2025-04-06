import {defineConfig} from "drizzle-orm";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
    schema:"./src/drizzle/schema.ts",
    out:"./src/drizzle/migrations",
    driver:"pg",
    dbCredentials:{
        connectionString: process.env.DATABASE_URL as string
    },
    verbose:true,   // when we generate migrations, it will tell us exactly what are the things that are going to be changing
    strict:true,    //will ask us, hey you are chaning or deleteing certian things, are you sure? (a 2nd check)
})