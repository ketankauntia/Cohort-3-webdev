import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div>Todo App</div>
      <div className="flex">
        <Link href='/signin' className="signin m-2">SignIn</Link>
        <Link href='/signup' className="signup m-2">SignUp</Link>
      </div>
    </div>
  );
}
