import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createDummyUsers(){
    await client.user.create({
        data:{
            username:"Ketan",
            age:75,
            password:"LearningPrismaSeeding",
            city:"nahiBataunga",
            todos:{
                create:{
                    description:"go to gym",
                    title:"workout",
                    done:false    
                }
            }
        }
    })
}

createDummyUsers();