import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function SignUp() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL+"/api/v1/signup",{
            data:{
                username,
                password
            }
        })
        alert("You have signedup!")
    }

  return (
    <div className="w-screen h-screen bg-black opacity-60 flex items-center justify-center">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="text-black font-semibold text-2xl mb-4 text-center">
          SignUp Page
        </div>
        <Input ref={usernameRef} placeholder="Name here" />
        <Input ref={passwordRef} placeholder="Password here" />
        <Button onClick={signup} variant="primary" text="Signup" fullWidth={true} loading={false} />
      </div>
    </div>
  );
}
