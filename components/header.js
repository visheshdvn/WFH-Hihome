import React from "react"
import Link from "next/link"

const header = () => {
  const headFontsize = "xl:text-6xl lg:text-5xl md:text-4xl sm:text-5xl text-4xl"

  return (
    <header className="clipped md:relative overflow-hidden pt-20">
      <div
        style={{ backgroundColor: "#fafafa" }}
        className="absolute top-0 left-0 right-0 z-10"
      >
        <div className="container uppercase mx-auto font-bold lg:text-3xl xl:text-4xl md:text-2xl sm:text-3xl text-2xl xl:py-5 py-3 horizontal-space px-3 text-gray-800 horizontal-space">
          HI Home
        </div>
      </div>

      <img
        src="/header/headerPrimary.png"
        className="float-right md:absolute right-0 h-auto md:h-1/2 lg:h-3/4 xl:h-1/2 2xl:h-auto mb-3"
      />
      <div className="container mx-auto md:absolute xl:top-1/2 lg:top-1/2 left-1/2 horizontal-space md:transform md:-translate-x-1/2 xl:-translate-y-3/4 lg:-translate-y-1/2 md:translate-y-5 text-center md:text-left">
        <h1 className={`${headFontsize} xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 mb-1`}>
          Elevate your
        </h1>
        <h1 className={`${headFontsize} xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 mb-1 font-extrabold text-primaryBlue`}>
          Work Corners
        </h1>
        <h1 className={`${headFontsize} xl:mb-8 lg:mb-6 md:mb-5 sm:mb-4 mb-3`}>at Home</h1>
        <div className="xl:text-2xl lg:text-xl md:text-lg sm:text-xl text-lg xl:mb-8 lg:mb-6 md:mb-5 sm:mb-4 mb-3 font-normal text-gray-600">
          Intrested in an organized, affordable <br /> workstation?
        </div>
        <a
          href="#excitment"
          className="bg-primaryBlue py-4 px-3 inline-block uppercase font-bold text-white rounded lg:text-base md:text-sm mb-14"
        >
          explore now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-6 lg:w-6 md:h-5 md:w-5 sm:h-6 sm:w-6 h-5 w-5 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default header

// backgroundImage: "linear-gradiet(to bottom, #fafafa 20%, #eaeaea 63%, #dedede 68%)",
