import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Message } from "./components/Message";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();
  const [messages, setMessages] = useState(["hi there"]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      setMessages((oldMsgs) => [...oldMsgs, event.data]);
    };

    ws.onopen = ()=>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }

    return ()=>{
      ws.close();
    }
  }, []);

  function sendMessage(socket: WebSocket) {
    if (!socket) return;
    // console.log(inputRef.current.value)
    const currentMessage = inputRef.current?.value;
    //@ts-ignore
    socket.send(JSON.stringify({
      type:"chat",
      payload:{
        message:currentMessage
      }
    }));
  }

  return (
    <div className="bg-gray-600 h-screen w-screen border-2 flex flex-col items-center justify-center">
      <div className="chat-room w-2/4 h-3/4 flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl mb-2 bg-purple-400 w-full text-center rounded-sm py-1">
          {" "}
          {"<<"} CHAT APP {">>"}
        </div>
        <div className="msg-container flex flex-col h-full w-full border-2 border-black overflow-y-auto">
          {messages.map((m) => (
            <Message text={m} />
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
