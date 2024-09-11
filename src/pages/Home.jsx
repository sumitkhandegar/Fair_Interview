import React from 'react';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
       <div className="bg-black text-white">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-white py-24">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 max-w-none -translate-x-1/2 rotate-[30deg] scale-[1.3] text-gray-900"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#f6d2570c-13f4-4e36-bf30-5cf6cce3cf9b)"
                  fillOpacity=".3"
                  d="M317.715 379.405L474.516 280.963L640.663 434.581L528.786 527.732L318.584 571.821L275.348 518.175L317.715 379.405Z"
                />
                <defs>
                  <linearGradient
                    id="f6d2570c-13f4-4e36-bf30-5cf6cce3cf9b"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative px-6 pt-0 pb-16 lg:px-8 text-black">
              <div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                    Fair and Transparent Interview Platform
                  </h1>
                  <p className="mt-6 text-lg leading-8">
                    Our platform ensures a seamless and unbiased interview experience for both candidates and recruiters.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Get Started
                      <span className="text-indigo-400" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Features Section */}
          <section className="pb-16 pt-0 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-8 text-gray-900">
                  How It Works
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Discover the key features of our platform that make the interview process fair and efficient.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
                <div className="relative flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 text-center shadow-lg">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">Unbiased Evaluation</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Our platform provides a fair evaluation process without any bias, ensuring equal opportunities for all candidates.
                  </p>
                </div>
                <div className="relative flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 text-center shadow-lg">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">Streamlined Scheduling</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Easily schedule and manage interviews with our user-friendly scheduling tools.
                  </p>
                </div>
                <div className="relative flex flex-col gap-6 rounded-2xl bg-gray-50 p-6 text-center shadow-lg">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">Comprehensive Feedback</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Provide and receive detailed feedback to enhance the interview experience and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Call to Action Section */}
          <section className="bg-gray-800 py-16 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-8">
                  Ready to Get Started?
                </h2>
                <p className="mt-4 text-lg">
                  Join us today to experience a new way of conducting interviews.
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-base font-semibold leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Get Started
                    <span className="text-indigo-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
      </div>
    </Layout>
  );
}

export default Home;