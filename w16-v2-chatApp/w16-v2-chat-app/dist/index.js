"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (msg) => {
        const parsedMessage = JSON.parse(msg);
        //if wants to join the room -> add to []
        if (parsedMessage.type === 'join') {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            });
        }
        // if wants to send msg, -> get roomid, then find all users from roomid and send
        if (parsedMessage.type === 'chat') {
            //find the roomid based on the current socket
            let foundRoomId = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    foundRoomId = allSockets[i].room;
                }
            }
            // now once the room id is know, iterating over [] and sending to all with the same roomId
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room === foundRoomId) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
    socket.on("disconnect", () => {
        // 
    });
});
// =========== basic test messages ===============
// let userCount = 0;
// let allSockets: WebSocket[] = [];
// wss.on("connection", (socket) => {
//   allSockets.push(socket);
//   userCount += 1;
//   console.log("user " + userCount + " connected");
//   socket.on("message", (message) => {
//     console.log("message recieved : " + message.toString());
//     //iterating over all the connections and sending them the text that was recieved to websocket
//     for (let i = 0; i < allSockets.length; i++) {
//       const x = allSockets[i];
//       x.send(message.toString());
//     }
//   });
//   socket.on("disconnect", () => {
//     allSockets = allSockets.filter((x) => x != socket);
//   });
// });
