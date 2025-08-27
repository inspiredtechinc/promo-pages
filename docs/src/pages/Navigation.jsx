
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";

export default function Navigation({ onSectionClick }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Hamburger/X icon
  const HamburgerIcon = ({ open, onClick }) => (
    <button
      className="z-50 flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span
        className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
      />
      <span
        className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 my-1 ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-1 w-8 bg-gray-800 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
      />
    </button>
  );

  return (
    <>
      {/* Header */}
      <header className="max-w-screen-2xl mx-auto relative z-10 px-4 lg:px-28 py-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-brand font-bold text-2xl lg:text-4xl">
            Project-X
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <Link to="/" className="text-brand font-semibold text-base lg:text-lg">
              Home
            </Link>
            <button
              className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg bg-transparent border-0 outline-none cursor-pointer"
              onClick={() => onSectionClick('about')}
              type="button"
            >
              About us
            </button>
            <button
              className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg bg-transparent border-0 outline-none cursor-pointer"
              onClick={() => onSectionClick('featured')}
              type="button"
            >
              Featured
            </button>
            <button
              className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg bg-transparent border-0 outline-none cursor-pointer"
              onClick={() => onSectionClick('testimonial')}
              type="button"
            >
              Testimonial
            </button>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="flex items-center space-x-4">
            <Button className="bg-brand hover:bg-brand/90 text-white px-6 lg:px-8 py-3 rounded-full font-semibold text-base lg:text-lg h-auto hidden sm:block">
              Sign In
            </Button>
            <div className="hidden sm:block w-px h-6 bg-gray-800" />
            <Button variant="ghost" className="text-gray-800 hover:text-brand font-medium text-base lg:text-lg p-0 hidden sm:block">
              Sign Up
            </Button>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen((prev) => !prev)} />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center">
          <div
            ref={menuRef}
            className="w-full max-w-md mx-auto mt-0 bg-white rounded-b-3xl shadow-lg py-10 px-6 flex flex-col items-center animate-slideDown relative"
          >
            <div className="flex flex-col items-center space-y-8 mt-8 w-full">
              <Link to="/" className="text-xl font-semibold text-brand hover:text-brand transition w-full text-center" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <button
                className="text-xl font-semibold text-gray-800 hover:text-brand transition w-full text-center bg-transparent border-0 outline-none cursor-pointer"
                onClick={() => { setMenuOpen(false); onSectionClick('about'); }}
                type="button"
              >
                About us
              </button>
              <button
                className="text-xl font-semibold text-gray-800 hover:text-brand transition w-full text-center bg-transparent border-0 outline-none cursor-pointer"
                onClick={() => { setMenuOpen(false); onSectionClick('featured'); }}
                type="button"
              >
                Featured
              </button>
              <button
                className="text-xl font-semibold text-gray-800 hover:text-brand transition w-full text-center bg-transparent border-0 outline-none cursor-pointer"
                onClick={() => { setMenuOpen(false); onSectionClick('testimonial'); }}
                type="button"
              >
                Testimonial
              </button>
              <Button className="w-full py-3 rounded-full bg-brand text-white font-semibold hover:bg-brand/90 transition">
                Sign In
              </Button>
              <Button variant="ghost" className="w-full py-3 rounded-full text-gray-800 hover:text-brand font-medium">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>
        {`
          .animate-slideDown {
            animation: slideDownFade 0.4s cubic-bezier(.4,0,.2,1);
          }
          @keyframes slideDownFade {
            0% { opacity: 0; transform: translateY(-40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </>
  );
}