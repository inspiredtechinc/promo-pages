import { Button } from "../components/button";
import { ArrowRight } from "lucide-react";
import heroMainImage from '/assets/Hero-mainImage.png';

export default function Hero() {

  return (
    <main className="relative z-10 mt-4 px-4 lg:px-28 ">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="text-center mb-4 lg:mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-gray-800">A Global </span>
            <span className="text-brand">Welcome, </span>
            <span className="text-gray-800">One </span>
            <span className="text-brand">Stay</span>
            <span className="text-gray-800"> at a Time</span>
          </h1>
          {/* Get Started Button */}
          <Button
            variant="outline"
            className="border-brand text-brand hover:bg-brand hover:text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-base lg:text-lg h-auto group transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center pointer-events-none mt-4 lg:mt-6">
          <div className="relative max-w-4xl">
            <img
              src={heroMainImage}
              alt="Happy traveler with luggage giving thumbs up"
              className="w-full h-64 sm:h-96 lg:h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </main>

  );

}