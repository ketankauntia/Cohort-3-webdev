import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Message } from "./components/Message";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  const [messages, setMessages] = useState([{message:"hi there", username:"user1"}]);
  const usernameRef = useRef();
  const [username, setUsername] = useState("");


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);


    ws.onmessage = (event) => {
      // console.log(`event : ${JSON.parse(event)}`);
      // console.log(`event.data : ${event.data}`); //this is the msg
      setMessages((oldMsgs) => [...oldMsgs, JSON.parse(event.data)]);
    };

    ws.onopen = ()=>{
      const username = usernameRef.current?.value || "Anonymous";
      if(username){

        // const username = usernameRef.current?.value;
        ws.send(JSON.stringify({
          type:"join",
          payload:{
            roomId:"red",
            username,
          }
        }))
      }
    }

    return ()=>{
      ws.close();
    }
  }, []);

  function sendMessage(socket: WebSocket) {
    if (!socket) return;
    // console.log(inputRef.current.value)
    const currentMessage = inputRef.current?.value;
    const username = usernameRef.current?.value;
    // console.log(`username from frontend : ${username}`)
    //@ts-ignore
    socket.send(JSON.stringify({
      type:"chat",
      payload:{
        message:currentMessage,
        username:username,
      }
    }));

    //@ts-ignore
    inputRef.current.value = "";
  }

  return (
    <div className="bg-gray-600 h-screen w-screen border-2 flex flex-col items-center justify-center">
      <div className="chat-room w-2/4 h-3/4 flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl mb-2 bg-purple-400 w-full text-center rounded-sm py-1 flex justify-between items-center">
          <span className="ml-6">CHAT APP</span>
          <span className="mr-2"><input ref={usernameRef}
            className="w-36 p-2 text-sm rounded-md outline-none" type="text" placeholder="username here..." /></span>
        </div>
        <div className="msg-container flex flex-col h-full w-full border-2 border-black overflow-y-auto">
          {messages.map((user) => (
            <Message text={user.message} username={user.username} />
          ))}
        </div>
        <div className="input-cont flex flex-row mt-5   w-full">
          <input
            ref={inputRef}
            className="w-full p-4 text-lg rounded-md outline-none"
            type="text"
            placeholder="Type your message here.."
          ></input>
          <button
            className="w-40 bg-purple-500 text-white p-4 ml-3 rounded-md text-lg hover:bg-purple-600"
            onClick={()=>sendMessage(socket)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
