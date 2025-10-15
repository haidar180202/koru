import koru from "../assets/koru.png";
import { FcGoogle } from "react-icons/fc";

export default function LoginCard(){
  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
    <div className="bg-white backdrop-blur-md border border-white/8 rounded-xl p-12 w-fit">
      <div className="flex flex-col items-center gap-3">
        {/* <div className="w-14 h-14 rounded-full bg-emerald-700 flex items-center justify-center font-bold">K</div> */}
        <img src={koru} alt="logo koru" className="w-25  rounded-full flex items-center justify-center font-bold"/>
        <h2 className="text-4xl font-semibold mt-6 text-center">Welcome to Koru (Copy)</h2>
        <p className="text-xs text-white/60">Sign in to continue</p>

        <button className="mt-2 w-full bg-white border-1 py-3 text-black rounded-md flex items-center justify-center">
          <FcGoogle className="me-3"/>
          Continue with Google
        </button>

        <div className="w-full mt-2">
          <label className="text-xs text-white/60">Email</label>
          <input className="w-full mt-1 px-3 py-3 rounded-md bg-black/30 border border-white/6" placeholder="you@example.com" />
          <label className="text-xs text-white/60 mt-2 block">Password</label>
          <input className="w-full mt-1 px-3 py-3 rounded-md bg-black/30 border border-white/6" type="password" placeholder="••••••••" />
        </div>

        <button className="mt-12 w-full bg-koruGreen text-white py-3 font-semibold border-1 bg-blue-950 rounded-md ">Sign in</button>

        <div className="text-xs text-white/60 flex justify-between w-full mt-2">
          <button className="underline">Forgot password?</button>
          <button className="underline">Sign up</button>
        </div>
      </div>
    </div>
    </div>

  );
}