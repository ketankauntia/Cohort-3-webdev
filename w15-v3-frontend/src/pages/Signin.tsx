import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signin() {
  return (
    <div className="w-screen h-screen bg-black opacity-60 flex items-center justify-center">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="text-black font-semibold text-2xl mb-4 text-center">
          Signin Page
        </div>
        <Input placeholder="Email here" />
        <Input placeholder="Name here" />
        <Input placeholder="Password here" />
        <Button variant="primary" text="Signin" fullWidth={true} loading={false} />
      </div>
    </div>
  );
}
