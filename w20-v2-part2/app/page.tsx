"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home(){
  return <SessionProvider>
    <OtherHome />
  </SessionProvider>
}

function OtherHome() {
  const session = useSession();
  return (
    <div>
      {session.status === 'authenticated' && <button onClick={()=>signOut()}>Logout</button>}
      {session.status === 'unauthenticated' && <button onClick={()=>signIn()}>Signin</button>}
    </div>
  );
}
