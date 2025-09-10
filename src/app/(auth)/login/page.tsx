import Link from "next/link";
import React from "react";
import { Icon } from "../../../../public/Icons";
import Image from "next/image";

function Login() {
  return (
    <div className="relative">
      <button className="absolute top-6 left-6 bg-black text-white py-2 px-4 rounded-lg flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          Back to Home
        </Link>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 h-screen w-screen overflow-hidden bg-white">
        <section className="max-lg:col-span-2 px-4 md:w-9/12 max-w-[1000px] m-auto text-black">
          <div className="flex flex-col gap-3 ">
            <h1 className="font-light text-4xl">
              Hello, <span className="font-bold">Welcome Back!</span>
            </h1>
            <p className="text-neutral-400">
              We're glad to see you again. Please log in to continue.
            </p>
            <div className="flex gap-4 w-full text-black">
              <button className="py-3 px-6 border rounded-xl border-neutral-300 w-full font-semibold flex items-center justify-center gap-2">
                <Icon name="google" size={20} />
                Google
              </button>
              <button className="py-3 px-6 border rounded-xl border-neutral-300 w-full font-semibold flex items-center justify-center gap-2">
                <Icon name="apple" size={20} />
                Apple
              </button>
            </div>
            <div className="h-[1px] w-full bg-neutral-300 relative my-4">
              <span className="bg-white text-[#8f8f8d] px-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Or Continue With
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <label>
                <span className="font-semibold text-[#8f8f8d] text-sm">
                  Email
                </span>
                <input
                  type="email"
                  className="border bg-neutral-100 border-neutral-300 rounded-xl p-3 w-full mt-1"
                />
              </label>
              <label>
                <span className="font-semibold text-[#8f8f8d] text-sm">
                  Password
                </span>
                <input
                  type="password"
                  className="border bg-neutral-100 border-neutral-300 rounded-xl p-3 w-full mt-1"
                />
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-black font-semibold cursor-pointer flex justify-end"
            >
              Forgot Password?
            </Link>
            <button className="bg-black text-white py-4 px-6 rounded-xl w-full font-semibold mt-2">
              LOGIN
            </button>
            <div className="text-sm text-center text-[#8f8f8d]">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-black font-semibold cursor-pointer"
              >
                Sign up for free
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[#27ae60] max-md:hidden size-full relative shadow-2xl shadow-green-500">
          <Image
            src="/images/yourtrainerwp1.png"
            alt="Login Hero"
            width={1800}
            height={1800}
            className="drop-shadow-2xl absolute left-1/2 -top-10 transform -translate-x-1/2  h-screen w-screen opacity-50"
          />
          <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 -translate-y-1/6 text-center bg-[#10633d] text-white shadow-green-500 shadow-xl drop-shadow-2xl drop-shadow-green-500 italic h-48 rounded-tl-[4rem] rounded-br-[4rem] text-xl border-y-4 border-green-400 p-14 w-11/12">
            Unlock the full potential of your learning experience with our
            platform. Experience personalized learning paths, interactive
            content, and a supportive community.
          </div>
        </section>
      </div>
      <div>
        <h1>tekrar hoşgeldin</h1>
      </div>
    </div>
  );
}

export default Login;
