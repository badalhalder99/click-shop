'use client';

import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
         window.location.href = '/signin';
      }
    });
    return () => unsubscribe();
  }, [window.location.href]);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = '/';
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
          <p className="mb-6">User: {user.email}</p>
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
