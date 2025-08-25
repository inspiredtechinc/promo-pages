
import { Link } from "react-router-dom";
import { Button } from "../components/button";


export default function Footer() {

    return (
      <footer className="bg-slate-200 relative overflow-hidden">
        {/* Background blur effects */}
        <div className="absolute -left-52 -top-60 w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />
        <div className="absolute right-[-100px] -top-32 w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />
        <div className="absolute right-[-200px] bottom-[-200px] w-[668px] h-[668px] rounded-full bg-orange-50 blur-[250px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 lg:px-28 py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-brand font-bold text-3xl lg:text-4xl">Project-X</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Over 8,912,000 Satisfied with our appearance
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-4">
                {/* Facebook */}
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                    <path d="M48 24C48 10.7453 37.2547 0 24 0C10.7453 0 0 10.7453 0 24C0 35.255 7.74912 44.6995 18.2026 47.2934V31.3344H13.2538V24H18.2026V20.8397C18.2026 12.671 21.8995 8.8848 29.9194 8.8848C31.44 8.8848 34.0637 9.18336 35.137 9.48096V16.129C34.5706 16.0694 33.5866 16.0397 32.3645 16.0397C28.4294 16.0397 26.9088 17.5306 26.9088 21.4061V24H34.7482L33.4013 31.3344H26.9088V47.8243C38.7926 46.3891 48.001 36.2707 48.001 24H48Z" fill="#0866FF"/>
                    <path d="M33.4005 31.3344L34.7473 24H26.908V21.406C26.908 17.5305 28.4286 16.0396 32.3636 16.0396C33.5857 16.0396 34.5697 16.0694 35.1361 16.1289V9.48093C34.0628 9.18237 31.4392 8.88477 29.9185 8.88477C21.8987 8.88477 18.2017 12.671 18.2017 20.8396V24H13.2529V31.3344H18.2017V47.2934C20.0584 47.7542 22.0005 48 23.9992 48C24.9832 48 25.9537 47.9395 26.907 47.8243V31.3344H33.3995H33.4005Z" fill="white"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                    <path d="M36.6526 3.80859H43.3995L28.6594 20.6556L46 43.5805H32.4225L21.7881 29.6767L9.61989 43.5805H2.86886L18.6349 25.5608L2 3.80859H15.9222L25.5348 16.5173L36.6526 3.80859ZM34.2846 39.5422H38.0232L13.8908 7.63486H9.87892L34.2846 39.5422Z" fill="black"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                    <path d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z" fill="#0A66C2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Short Links Section */}
            <div className="space-y-6">
              <h4 className="text-black font-bold text-xl lg:text-2xl">Short Links</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Link to="/about" className="text-gray-500 hover:text-gray-700 transition-colors">About Us</Link>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 14 14">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0745 6.94736C11.0745 7.19623 10.9836 7.44508 10.8022 7.63482L5.0916 13.6058C4.72834 13.9856 4.13936 13.9856 3.77624 13.6058C3.41313 13.2261 3.41313 12.6104 3.77624 12.2305L8.8293 6.94736L3.77642 1.66417C3.4133 1.28434 3.4133 0.668697 3.77642 0.289052C4.13954 -0.0909615 4.72851 -0.0909615 5.09178 0.289052L10.8024 6.25989C10.9838 6.44973 11.0745 6.69857 11.0745 6.94736Z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Contact Us</a>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 14 15">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0745 7.88876C11.0745 8.13764 10.9836 8.38648 10.8022 8.57623L5.0916 14.5472C4.72834 14.927 4.13936 14.927 3.77624 14.5472C3.41313 14.1675 3.41313 13.5518 3.77624 13.1719L8.8293 7.88876L3.77642 2.60557C3.4133 2.22575 3.4133 1.6101 3.77642 1.23046C4.13954 0.850445 4.72851 0.850445 5.09178 1.23046L10.8024 7.2013C10.9838 7.39113 11.0745 7.63998 11.0745 7.88876Z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">Blogs</a>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 14 14">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0745 7.02353C11.0745 7.2724 10.9836 7.52125 10.8022 7.71099L5.0916 13.6819C4.72834 14.0618 4.13936 14.0618 3.77624 13.6819C3.41313 13.3022 3.41313 12.6865 3.77624 12.3067L8.8293 7.02353L3.77642 1.74034C3.4133 1.36051 3.4133 0.744869 3.77642 0.365224C4.13954 -0.0147896 4.72851 -0.0147896 5.09178 0.365224L10.8024 6.33606C10.9838 6.5259 11.0745 6.77474 11.0745 7.02353Z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">FAQ Questions</a>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 14 15">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0745 7.35361C11.0745 7.60248 10.9836 7.85133 10.8022 8.04107L5.0916 14.012C4.72834 14.3918 4.13936 14.3918 3.77624 14.012C3.41313 13.6323 3.41313 13.0166 3.77624 12.6368L8.8293 7.35361L3.77642 2.07042C3.4133 1.69059 3.4133 1.07495 3.77642 0.695302C4.13954 0.315289 4.72851 0.315289 5.09178 0.695302L10.8024 6.66614C10.9838 6.85598 11.0745 7.10482 11.0745 7.35361Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-6">
              <h4 className="text-black font-bold text-xl lg:text-2xl">Subscribe to new Newsletter</h4>
              <p className="text-gray-500 leading-relaxed">
                What are you waiting for? Subscribe and follow our progress!
              </p>
              
              {/* Newsletter Form */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <Button className="bg-brand hover:bg-brand/90 text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap">
                  Subscribe now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}