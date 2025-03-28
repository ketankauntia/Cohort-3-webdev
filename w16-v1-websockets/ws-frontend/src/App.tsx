import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if(!socket){
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  // when the app component mounts, we run the useeffect so that the websocket connection is established only once.
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    //now when the websocket connection is setup, we set the global socket state to the connection made, so that we can use this connection to send/recieve message's globally in other functions
    setSocket(ws);

    ws.onmessage = (event) => {
      alert(event.data);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="write msg here.."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
