import { Link } from "react-router-dom";
import { Button } from "../components/button";

export default function NotFound() {

  return (
    
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-28 py-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-brand font-bold text-xl lg:text-2xl">
            CouchSurfing
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <Link to="/" className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg">
              About us
            </Link>
            <Link to="/featured" className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg">
              Featured
            </Link>
            <Link to="/testimonial" className="text-gray-800 hover:text-brand transition-colors text-base lg:text-lg">
              Testimonial
            </Link>
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

      {/* Page Content */}
      <main className="px-4 lg:px-28 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-8">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Page not found. Let's get you back on track!
          </p>
          <Link to="/" className="text-brand hover:underline text-lg font-semibold">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
