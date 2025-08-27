import { Button } from "../components/button";

//assets
import aboutImage1 from '/assets/about-image1.jpg';
import aboutImage2 from '/assets/about-image2.jpg';
import aboutImage3 from '/assets/about-image3.png';
import aboutImage4 from '/assets/about-image4.png';
import aboutLockIcon from '/assets/about-lockIcon.svg';
import aboutProfile1 from '/assets/about-profileImage1.jpg';
import aboutProfile2 from '/assets/about-profileImage2.jpg';
import aboutProfile3 from '/assets/about-profileImage3.jpg';
import aboutProfile4 from '/assets/about-profileImage4.jpg';


export default function About() {

  return (
    <section className="relative py-16 lg:py-24 px-4 lg:px-28 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute -left-96 bottom-0 w-[1146px] h-[1146px] rounded-full bg-orange-100/20 blur-[200px] pointer-events-none" />
      <div className="absolute -right-32 -top-40 w-[1146px] h-[1146px] rounded-full bg-orange-200/30 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight mb-8 lg:mb-0 max-w-3xl">
            <span className="text-gray-800">Where </span>
            <span className="text-brand">People</span>
            <span className="text-gray-800"> and </span>
            <span className="text-brand">Spaces</span>
            <span className="text-gray-800"> Come </span>
            <span className="text-brand">Together</span>
          </h2>
          <Button className="bg-brand hover:bg-brand/90 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-semibold text-lg lg:text-xl h-auto">
            View More
          </Button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
          
          {/* Card 1 - Major Library */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="md:shrink-0 m-5">
                <img
                  src={aboutImage1}
                  alt="Major Library"
                  className="block w-full h-72 lg:h-80 object-center object-cover rounded-2xl"
                />
              </div>
              {/* Good Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-orange-500">👍</span>
                <span className="text-gray-800 font-semibold">Good</span>
              </div>
              {/* Heart Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {/* Profile Picture */}
              <div className="absolute -bottom-10 right-10 w-24 h-24  mx-auto sm:mx-0 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img
                  src={aboutProfile1}
                  alt="Host profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Major Library</h3>
                    <p className="text-lg lg:text-xl text-gray-500">Vaughan, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="m-6 flex items-center justify-between">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">$15.99</div>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <img src={aboutLockIcon} alt="Lock Icon" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - 222 Bernard */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="md:shrink-0 m-5">
                <img
                  src={aboutImage2}
                  alt="Major Library"
                  className="block w-full h-72 lg:h-80 object-center object-cover rounded-2xl"
                />
              </div>
              {/* Good Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-orange-500">👍</span>
                <span className="text-gray-800 font-semibold">Good</span>
              </div>
              {/* Heart Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {/* Profile Picture */}
              <div className="absolute -bottom-10 right-10 w-24 h-24  mx-auto sm:mx-0  rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img
                  src={aboutProfile2}
                  alt="Host profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">222 Bernard</h3>
                    <p className="text-lg lg:text-xl text-gray-500">Vaughan, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="m-6 bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">$25.99</div>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <img src={aboutLockIcon} alt="Lock Icon" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - 89 Crosby */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="md:shrink-0 m-5">
                <img
                  src={aboutImage3}
                  alt="Major Library"
                  className="block w-full h-72 lg:h-80 object-center object-cover rounded-2xl"
                />
              </div>

              {/* Good Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-orange-500">👍</span>
                <span className="text-gray-800 font-semibold">Good</span>
              </div>
              {/* Heart Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {/* Profile Picture */}
              <div className="absolute -bottom-10 right-10 w-24 h-24  mx-auto sm:mx-0 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img
                  src={aboutProfile3}
                  alt="Host profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">89 Crosby</h3>
                    <p className="text-lg lg:text-xl text-gray-500">Stoufville, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="m-6 bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">$27.99</div>
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <img src={aboutLockIcon} alt="Lock Icon" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Workspace */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="md:shrink-0 m-5">
                <img
                  src={aboutImage4}
                  alt="Major Library"
                  className="block w-full h-72 lg:h-80 object-center object-cover rounded-2xl"
                />
              </div>
              {/* Good Badge */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <span className="text-orange-500">👍</span>
                <span className="text-gray-800 font-semibold">Good</span>
              </div>
              {/* Heart Icon */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-black/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {/* Profile Picture */}
              <div className="absolute -bottom-10 right-12 w-24 h-24  mx-auto sm:mx-0 rounded-full border-2 border-white overflow-hidden shadow-lg">
                <img
                  src={aboutProfile4}
                  alt="Host profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <svg className="w-16 h-16 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">Workspace</h3>
                    <p className="text-lg lg:text-xl text-gray-500">Oshawa, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="m-6 bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">$19.99</div>
               <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                  <img src={aboutLockIcon} alt="Lock Icon" className="w-24 h-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
