"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// const pgClient = new Client("postgresql://todoDb_owner:npg_PxCH5S9kMNJr@ep-snowy-snow-a1h90yry-pooler.ap-southeast-1.aws.neon.tech/todoDb?sslmode=require");
const pgClient = new pg_1.Client({
    user: "todoDb_owner",
    password: "npg_PxCH5S9kMNJr",
    port: 5432,
    host: "ep-snowy-snow-a1h90yry-pooler.ap-southeast-1.aws.neon.tech",
    database: "todoDb",
    ssl: true
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * from users;");
        console.log(response);
    });
}
main();
