'use client';

import { useState } from "react";
import Link from 'next/link';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", userCredential.user);
      setSuccess("Signed up successfully!");
      window.location.href = '/signin';
      setError("");
    } catch (error) {
      console.error("Error signing up:", error);
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
        <div className="xsmall:w-[420px] 2xsmall:w-[100%] bg-white py-5 rounded-xl shadow-md block mx-auto mt-[30px] mb-[30px] md:px-5 2xsmall:px-4">
          <h1 className="text-2xl font-bold mb-1 text-center">Sign Up</h1>
          <p className="text-[15px] text-center mb-6">Already have an account <Link href='/signin' className='underline'>Sign in</Link></p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                placeholder="Write username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Write valid email address.."
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
                placeholder="Write password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Write confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#24ccab] text-white font-semibold rounded-md shadow-sm hover:bg-[#37f0cb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
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

export default SignUp;

