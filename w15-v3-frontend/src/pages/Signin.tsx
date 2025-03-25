import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (!username || !password) {
        alert("Username and Password are required!");
        return;
      }

      const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      navigate('/dashboard');
    } catch (e) {
      console.error("Signup error:", e);
      alert("Failed to sign-in. Please try again.");
    }
  }

  return (
    <div className="w-screen h-screen bg-black opacity-60 flex items-center justify-center">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="text-black font-semibold text-2xl mb-4 text-center">
          SignIn Page
        </div>
        <Input reference={usernameRef} placeholder="Name here" />
        <Input reference={passwordRef} placeholder="Password here" />
        <Button
          onClick={signin}
          variant="primary"
          text="Signin"
          fullWidth={true}
          loading={false}
        />
      </div>
    </div>
  );
}
