import { uuid } from "drizzle-orm/gel-core";
import { varchar } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user",{
    id: uuid("id").primaryKey.defaultRandom(),
    name:varchar("name", {length:255}).notNull(),
})