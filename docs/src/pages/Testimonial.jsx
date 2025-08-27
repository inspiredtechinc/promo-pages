//assets
import testiImage1 from '/assets/testimonial-image1.jpg';
import testiImage2 from '/assets/testimonial-image2.jpg';
import testiImage3 from '/assets/testimonial-image3.jpg';
import testiImage4 from '/assets/testimonial-image4.jpg';


export default function Testimonial() {
  return (
    
    <section className="py-16 lg:py-24 px-4 lg:px-28">

      <div className="bg-slate-200 max-w-7xl mx-auto rounded-[50px] px-8 lg:px-12 py-16 lg:py-20 relative overflow-hidden">
        {/* Background blur effects */}
        <div className="absolute -left-52 -top-60 w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />
        <div className="absolute right-[-100px] top-72 w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />

        {/* Decorative Elements */}
        <div className="absolute items-center top-1/2 left-1/2  -translate-x-[80%] -translate-y-1/4 opacity-10 pointer-events-none hidden lg:flex space-x-4">
          <div className="w-80 h-80 bg-orange-500 rounded-full shadow-lg" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 relative z-10">
          <h3 className="text-brand font-bold text-2xl lg:text-3xl mb-4">Customer's Feedback</h3>
          <h2 className="text-gray-800 font-bold text-xl lg:text-4xl mb-6">What people are saying</h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto">
            Real experiences from travelers and hosts who have connected through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch relative z-10">

          {/* Testimonial 1 - Sarah Miller */}
          <div className="bg-white  rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-brand overflow-hidden mx-auto sm:mx-0">
                  <img
                    src={testiImage1}
                    alt="Sarah Miller"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 hidden lg:block">
                  <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h4 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">Sarah Miller</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4">Financial Analyst</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "I've been using this platform for my last three trips and it's completely changed how I travel. I've made lifelong friends."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 - Elizabeth Thomp */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-brand overflow-hidden mx-auto sm:mx-0">
                  <img
                    src={testiImage2}
                    alt="Elizabeth Thomp"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 hidden lg:block">
                  <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  gap-2">
                  <h4 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">Elizabeth Thomp</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4">Business Analyst</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "Hosting travelers has brought so much joy into my home. I've learned about different cultures and made connections I never would have otherwise."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 - Moe John */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-brand overflow-hidden mx-auto sm:mx-0">
                  <img
                    src={testiImage3}
                    alt="Moe John"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 hidden lg:block">
                  <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h4 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">Moe John</h4>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4">Product Owner</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "The verification system and reviews gave me the confidence to try couch surfing. I've met friendly hosts who made me feel welcome from day one. it's been an amazing experience!"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 - Abdul Khan */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-brand overflow-hidden mx-auto sm:mx-0">
                  <img
                    src={testiImage4}
                    alt="Abdul Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 hidden lg:block">
                  <svg className="w-10 h-10 text-brand/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h4 className="text-gray-800 font-bold text-lg sm:text-xl lg:text-2xl">Abdul Khan</h4>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-brand/20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 text-base mb-4">Marketing Manager</p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  "I've been using this platform for my last three trips and it's completely changed how I travel. I've made lifelong friends."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
