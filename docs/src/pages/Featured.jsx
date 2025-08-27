
//assets
import featureImage1 from '/assets/feature-image1.jpg';
import featureImage2 from '/assets/feature-image2.jpg';
import featureImage3 from '/assets/feature-image3.jpg';
import featureImage4 from '/assets/feature-image4.jpg';
import fetureSvg1 from '/assets/feature-svg1.svg';
import fetureSvg2 from '/assets/feature-svg2.svg';
import fetureSvg3 from '/assets/feature-svg3.svg';
import fetureSvg4 from '/assets/feature-svg4.svg'; 

export default function Featured() {
  return (
    <section className="relative py-16 lg:py-24 px-4 lg:px-28 overflow-hidden">
        {/* Background blur effects */}
        <div className="absolute -left-52 -top-60 w-[668px] h-[668px] rounded-full bg-orange-100/20 blur-[250px] pointer-events-none" />
        <div className="absolute right-[-150px] top-72 w-[668px] h-[668px] rounded-full bg-orange-200/30 blur-[250px] pointer-events-none" />
        <div className="absolute left-96 bottom-32 w-[668px] h-[668px] rounded-full bg-orange-100/20 blur-[250px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-2xl  lg:text-5xl font-semibold leading-tight max-w-5xl">
              <span className="text-gray-800">Not just </span>
              <span className="text-brand">features </span>
              <span className="text-gray-800">, your everyday </span>
              <div className="mt-2">
                <span className="text-gray-800">essentials, </span>
                <span className="text-brand">reimagined</span>
              </div>
            </h2>
          </div>

          {/* Feature 1 - Shared Sleep Spaces */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex-1 lg:max-w-lg">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                  <img src={fetureSvg1} alt="sleep-icon" className='w-12 h-12' />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Shared Sleep Spaces</h3>
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                  Whether it's a cozy couch, private room, or a quiet sleeping nook, find a place to rest wherever you are. Perfect for overnight stays, power naps, or unexpected layovers.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={featureImage1} 
                alt="Shared Sleep Spaces" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 2 - Community Kitchens & Lounges */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex-1 lg:max-w-lg p-8">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                <img src={fetureSvg2} alt="kitchen-icon" className='w-12 h-12' />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Community Kitchens & Lounges</h3>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                Cook a meal, share recipes, or unwind in a welcoming lounge areas designed for connection and comfort. Great for travelers looking to feel at home away from home.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src={featureImage2} 
                alt="Community Kitchens & Lounges" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 3 - Storage & Charging Stations */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex-1 lg:max-w-lg">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                  <img src={fetureSvg3} alt="storage-icon" className='w-12 h-12' />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Storage & Charging Stations</h3>
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                  Keep your gear safe and your devices powered up with secure storage and charging points. Designed for those in transit, between check-ins, or taking quick breaks.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={featureImage3} 
                alt="Storage & Charging Stations" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 4 - Flexible Workspaces */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            <div className="flex-1 lg:max-w-lg p-8">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                <img src={fetureSvg4} alt="workspace-icon" className='w-12 h-12' />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Flexible Workspaces</h3>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                From desks to studios, access inspiring environments to focus, create, and collaborate. Ideal for remote workers, freelancers, or digital nomads on the move.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src={featureImage4} 
                alt="Flexible Workspaces" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
