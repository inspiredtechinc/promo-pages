
import { Link } from "react-router-dom";
import { Button } from "../components/button";

export default function Navigation({ onSectionClick }) {

    return (
        <>
        {/* Header */}
      <header className="relative z-10 px-4 lg:px-28 py-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-brand font-bold text-2xl lg:text-3xl">
            Project-X
          </div>
          
          {/* Navigation Links */}
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
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-brand hover:bg-brand/90 text-white px-6 lg:px-8 py-3 rounded-full font-semibold text-base lg:text-lg h-auto">
              Sign In
            </Button>
            <div className="hidden sm:block w-px h-6 bg-gray-800" />
            <Button variant="ghost" className="text-gray-800 hover:text-brand font-medium text-base lg:text-lg p-0">
              Sign Up
            </Button>
          </div>
        </nav>
      </header>
    </>
    );
}