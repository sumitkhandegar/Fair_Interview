function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Logo and Description */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-lg font-semibold">FAIR INTERVIEW</a>
            <p className="mt-2 text-gray-400 text-sm">
              Helping you to streamline the interview process.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-200">Contact Us</a>
            <a href="#" className="hover:text-gray-200">Support Queries</a>
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms of Service</a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.07 2.25c1.98 0 3.495 1.515 3.495 3.495 0 1.98-1.515 3.495-3.495 3.495s-3.495-1.515-3.495-3.495c0-1.98 1.515-3.495 3.495-3.495zm-4.31 10.245c0-2.28 4.56-3.495 4.56-3.495s4.56 1.215 4.56 3.495v.3H7.76v-.3z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zm-4.56-1.44H4.56C3.24 3.12 2.16 4.2 2.16 5.52v12.96c0 1.32 1.08 2.4 2.4 2.4h14.88c1.32 0 2.4-1.08 2.4-2.4V5.52c0-1.32-1.08-2.4-2.4-2.4zm-7.92 12.96v-5.28l4.56 2.64-4.56 2.64z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.494 5.533c-.887.392-1.84.657-2.843.774a4.927 4.927 0 0 0 2.165-2.713 9.849 9.849 0 0 1-3.118 1.189A4.915 4.915 0 0 0 16.5 4a4.924 4.924 0 0 0-4.914 4.914c0 .386.044.762.127 1.122C7.69 9.95 5.096 8.235 3.26 5.694a4.897 4.897 0 0 0-.664 2.472c0 1.704.868 3.208 2.189 4.089a4.912 4.912 0 0 1-2.225-.615v.061a4.922 4.922 0 0 0 3.946 4.83 4.935 4.935 0 0 1-2.219.084A4.924 4.924 0 0 0 8.44 18.793a9.87 9.87 0 0 1-6.105 2.106c-.396 0-.79-.024-1.178-.07a13.92 13.92 0 0 0 7.526 2.206c9.029 0 13.973-7.481 13.973-13.973 0-.213-.005-.426-.015-.638a9.98 9.98 0 0 0 2.455-2.543z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;