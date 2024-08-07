'use client';

import { useState } from "react";
import Link from 'next/link';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in:", userCredential.user);
      setSuccess("Signed in successfully!");
      window.location.href = '/dashboard';
      setError("");
    } catch (error) {
      console.error("Error signing in:", error);
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto md:px-5 2xsmall:px-4">
        <div className="xsmall:w-[380px] 2xsmall:w-[100%] bg-white py-5 rounded-xl shadow-md block mx-auto mt-[30px] mb-[30px] md:px-5 2xsmall:px-4">
          <h1 className="text-2xl font-bold text-center mb-1">Sign In</h1>
          <p className="text-[15px] text-center mb-6">Don't have an account <Link href='/signup' className='underline'>Sign Up</Link></p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Write valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#24ccab] text-white font-semibold rounded-md shadow-sm hover:bg-[#33f0ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;

