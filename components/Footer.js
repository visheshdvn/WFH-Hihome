import React from "react"

const Footer = () => {
  return (
    <footer className="lg:h-96 md:h-80 sm:h-64 h-60 overflow-hidden relative lg:pt-20 md:pt-16 sm:pt-14 bg-secondaryBlue">
      <img className="sm:w-full transform scale-105" src="/footer/Vector.svg" />
      <div style={{transform: "translate(-50%, -50%)"}} className="absolute top-1/2 left-1/2 w-full bottom-2 text-white z-10 flex flex-col items-center md:pt-3 lg:pt-10 -mt-4 sm:mt-0 xl:pt-12">
        <img className="xl:h-24 md:h-20 sm:h-16 h-16" src="/footer/HHW.png" alt="Brand Logo" />
        <div className="flex justify-around w-64 xl:my-4 md:my-4 sm:my-3 my-4">
          <img className="md:h-6 h-5" src="/socialIcons/facebook.png" />
          <img className="md:h-6 h-5" src="/socialIcons/twitter.png" />
          <img className="md:h-6 h-5" src="/socialIcons/instagram.png" />
          <img className="md:h-6 h-5" src="/socialIcons/linkedin.png" />
        </div>
        <h1 className="md:text-lg sm:text-base text-sm sm:mb-1 lg:mb-1 mb-2">PRIVACY POLICY | TERMS & CONDITIONS</h1>
        <h5 className="md:text-sm sm:text-sm text-xs text-gray-400">Copyright © 2021 Hi Home Pvt. Ltd.</h5>
      </div>
      <div
        style={{ backgroundColor: "#181818" }}
        className="w-full h-48 md:h-28 absolute bottom-0 right-0 z-0"
      ></div>
    </footer>
  )
}

export default Footer
