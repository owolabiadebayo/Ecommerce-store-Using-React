import React from "react";
import "../Footer/Footer.css";
function Footer() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            <span className="block">Have a product to sell?</span>
            <span className="block text-blue-600">Send us a test today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Request a call
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-indigo-50"
              >
                Send a message
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer">
        Developed by <a href="#">Victor Natius</a> &copy; 2022
      </p>
    </>
    //
  );
}

export default Footer;
