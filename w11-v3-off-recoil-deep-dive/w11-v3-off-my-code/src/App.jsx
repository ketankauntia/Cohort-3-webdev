import React from "react";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}

function MyApp() {

  //using atoms
  const networkNotificationCount = useRecoilValue(networkAtom);
  // const messageAtomCount = useRecoilValue(messagingAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const [messageAtomCount, setMessageAtomCount] = useRecoilState(messagingAtom);



  //using selector
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>
      <button>
        Notifications ({" "}
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ( )</button>
      <button>Network ( )</button>
      <button>Messages ( {messageAtomCount})</button>
      <button>Me {totalNotificationCount}</button>
      {/* <button onClick={()=>setMessageAtomCount(messageAtomCount+1)}>Me</button> */}
    </>
  );
}

export default App;
