'use client';

import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config'; 
import styles from '@/components/navbar.module.css';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  console.log(user)
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
      <header>
        <nav className="bg-[#ddd] border-b border-solid border-[#dddddd28]">
          <div
            className={`container ${styles.customContainer} my-0 ml-auto mr-auto flex items-center justify-between py-[6px] md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}
          >
            {/* Logo */}
            <div>
              <Link className="navbar-brand" href="/">
                <img
                  src="./logo.png"
                  className="small:w-[150px] h-auto 2xsmall:w-[120px]"
                />
              </Link>
            </div>
            <div>{user.email.substring(0, 13)}</div>
          </div>
        </nav>
      </header>
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
