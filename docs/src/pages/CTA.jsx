

export default function CTA() {

  return (
    <section className="py-16 lg:py-24 px-4 lg:px-28 relative overflow-hidden">
        {/* Background blur effects */}
        <div className="absolute -left-80 -top-16 w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />
        
        {/* Large decorative search icon */}
        <div className="absolute left-1/2 top-20 transform -translate-x-1/2 w-96 h-96 opacity-10 pointer-events-none">
          <svg className="w-full h-full text-slate-400" fill="currentColor" viewBox="0 0 320 320">
            <path d="M249.463 249.998C255.616 243.888 265.477 243.888 271.629 249.998L312.292 282.82H312.997C321.223 291.135 321.223 304.616 312.997 312.931C304.77 321.246 291.433 321.246 283.207 312.931L249.463 274.258C246.273 271.045 244.48 266.68 244.48 262.128C244.48 257.576 246.273 253.211 249.463 249.998ZM137.361 0.833984C173.57 0.833984 208.297 15.3726 233.901 41.252C259.505 67.1312 273.888 102.231 273.888 138.83C273.888 215.043 212.763 276.826 137.361 276.826C61.9589 276.826 0.833496 215.043 0.833496 138.83C0.833617 62.6169 61.9589 0.834033 137.361 0.833984Z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8 lg:mb-12">
            <span className="text-gray-800">We shall </span>
            <span className="text-orange-400">never deny</span>
            <span className="text-gray-800"> a guest, even the</span>
            <br className="hidden sm:block" />
            <span className="text-brand">most ridiculous request</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-amber-700 leading-relaxed mb-12 lg:mb-16 max-w-4xl mx-auto">
            Project-X is an application for job seekers and workers who prioritize user comfort and the quality of services provided by our team. We provide comfort and quality in your range.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6">
            {/* Google Play Store Button */}
            <a 
              href="#" 
              className="flex items-center justify-center bg-black text-white rounded-lg border border-brand/20 px-6 py-4 hover:bg-gray-900 transition-colors group"
            >
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/0861f5931dcbd9676867eb8294bda46323e6990c?width=404" 
                alt="Get it on Google Play" 
                className="h-11 w-auto"
              />
            </a>

            {/* App Store Button */}
            <a 
              href="#" 
              className="flex items-center justify-center bg-black text-white rounded-lg border border-brand/20 px-6 py-4 hover:bg-gray-900 transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09999 22C7.78999 22.05 6.79999 20.68 5.95999 19.47C4.24999 17 2.93999 12.45 4.69999 9.39C5.56999 7.87 7.12999 6.91 8.81999 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
  );
}