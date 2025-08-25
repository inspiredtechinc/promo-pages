

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
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight max-w-5xl">
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
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v11h2v3h2v-3h2v3h2v-3h9v3h2v-3h2V6h-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Shared Sleep Spaces</h3>
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                  Whether it's a cozy couch, private room, or a quiet sleeping nook, find a place to rest wherever you are. Perfect for overnight stays, power naps, or unexpected layovers.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/56d39c4678bcbfa1640adb6ecaeb35fba2cc7c80?width=1016" 
                alt="Shared Sleep Spaces" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 2 - Community Kitchens & Lounges */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex-1 lg:max-w-lg p-8">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Community Kitchens & Lounges</h3>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                Cook a meal, share recipes, or unwind in a welcoming lounge areas designed for connection and comfort. Great for travelers looking to feel at home away from home.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/183e54858710c97345aecc0029662c9fdb147e6f?width=1094" 
                alt="Community Kitchens & Lounges" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 3 - Storage & Charging Stations */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex-1 lg:max-w-lg">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Storage & Charging Stations</h3>
                <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                  Keep your gear safe and your devices powered up with secure storage and charging points. Designed for those in transit, between check-ins, or taking quick breaks.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0918fe708b42bde3d5d01cd47d6dca2220c56901?width=1098" 
                alt="Storage & Charging Stations" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* Feature 4 - Flexible Workspaces */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
            <div className="flex-1 lg:max-w-lg p-8">
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Flexible Workspaces</h3>
              <p className="text-lg lg:text-xl text-gray-500 leading-relaxed">
                From desks to studios, access inspiring environments to focus, create, and collaborate. Ideal for remote workers, freelancers, or digital nomads on the move.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/be4ff83acd02b169b8dbc37f9f8ce8c6e7b00f16?width=1110" 
                alt="Flexible Workspaces" 
                className="w-full h-80 lg:h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
