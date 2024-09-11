import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close-btn');

    if (mobileMenuBtn && mobileMenu && closeBtn) {
      const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
      };

      mobileMenuBtn.addEventListener('click', toggleMenu);
      closeBtn.addEventListener('click', toggleMenu);

      // Cleanup event listeners on unmount
      return () => {
        mobileMenuBtn.removeEventListener('click', toggleMenu);
        closeBtn.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">FAIR INTERVIEW</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            id="mobile-menu-btn"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white">Home</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Practice</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">Interview</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Profile
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="lg:hidden hidden" id="mobile-menu">
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div>
        <div className="fixed inset-y-0 right-0 z-20 w-full max-w-sm p-6 overflow-y-auto bg-black">
          <div className="flex items-center justify-between mb-6">
            <a href="#">
              <span className="sr-only">FAIR INTERVIEW</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              id="mobile-menu-close-btn"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-6">
            <a href="#" className="block text-base font-semibold text-white">Home</a>
            <a href="#" className="block text-base font-semibold text-white">Practice</a>
            <a href="#" className="block text-base font-semibold text-white">Interview</a>
            <a href="#" className="block text-base font-semibold text-white">Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;