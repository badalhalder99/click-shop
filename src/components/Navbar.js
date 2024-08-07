'use client';

import { useState, useEffect } from 'react';
import style from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header>
      <nav className="bg-[#ddd] border-b border-solid border-[#dddddd28]">
        <div
          className={`container ${style.customContainer} my-0 ml-auto mr-auto flex items-center justify-between py-[6px] md:px-5 2xsmall:px-4 lg:max-w-[1024px] xl:max-w-[1320px]`}
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

          {/* Hamburger Button for Mobile Menu */}
          <button className="block md:hidden" type="button" onClick={toggleNav}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <div className={`${style.homeNavWrap} items-start flex md:space-x-3 md:block 2xsmall:hidden`}>
            <ul className="navbar-nav md:flex md:space-x-2">
              <li>
                <Link
                  href="/"
                  className={`text-black px-2 py-2 rounded ${activeLink === '/' ? 'text-[#24ccab]' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className={`text-black px-2 py-2 rounded ${activeLink === '/signin' ? 'text-[#24ccab]' : ''}`}
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={`text-black px-2 py-2 rounded ${activeLink === '/signup' ? 'text-[#24ccab]' : ''}`}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-nav container mx-auto my-0 ml-auto mr-auto md:px-5 2xsmall:px-4 ${
            style.customContainer
          } lg:max-w-[1024px] xl:max-w-[1280px] ${
            isNavOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="mobile-nav-content-wrap">
            <ul className="navbar-nav md:hidden 2xsmall:block">
              <li className="my-3">
                <Link
                  href="/"
                  className={`nav-link text-black text-[15px] font-semibold ${activeLink === '/' ? 'text-[#24ccab]' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/signin"
                  className={`nav-link text-black text-[15px] font-semibold ${activeLink === '/signin' ? 'text-[#24ccab]' : ''}`}
                >
                  Sign in
                </Link>
              </li>
              <li className="my-3">
                <Link
                  href="/signup"
                  className={`nav-link text-black text-[15px] font-semibold ${activeLink === '/signup' ? 'text-[#24ccab]' : ''}`}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
