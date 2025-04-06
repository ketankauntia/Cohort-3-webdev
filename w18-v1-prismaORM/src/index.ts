import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// client.user()

client.$queryRaw("SELECT * FROM User");