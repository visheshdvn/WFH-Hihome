import React from "react";
import Link from "next/link";

const header = () => {
  const headFontsize =
    "xl:text-5xl lg:text-4xl md:text-4xl sm:text-5xl text-4xl";

  return (
    <header className="clippe md:relative overflow-hidden pt-14 md:pt-20 md:mb-16">
      <div
        style={{ backgroundColor: "#fafafa" }}
        className="absolute top-0 left-0 right-0 z-10"
      >
        <div className="container uppercase mx-auto font-bold lg:text-3xl xl:text-4xl md:text-2xl sm:text-3xl text-2xl xl:py-5 py-3 horizontal-space px-3 text-gray-800 horizontal-space">
          HI Home
        </div>
      </div>
      {/* <div className="border relative clearfix container mx-auto">
        <div className="absolute border">text heree</div>
        <img src="/header/header2.webp" className="border float-right" />
      </div> */}
      <div className="container mx-auto md:my-10">
        <div className="grid grid-cols-12 gap-4 lg:h-100 horizontal-space">
          <div className="lg:col-span-5 md:col-span-6 col-span-12 md:order-1 order-2 text-center md:text-left">
            <h1
              className={`${headFontsize} xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 mb-1`}
            >
              Make your WFH space
            </h1>
            <h1
              className={`${headFontsize} xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2 mb-1 font-extrabold text-primaryBlue`}
            >
              More Ergonomic
            </h1>
            <h1
              className={`${headFontsize} xl:mb-8 lg:mb-6 md:mb-5 sm:mb-4 mb-3`}
            >
              and better for your health.
            </h1>
            <div className="xl:text-2xl lg:text-xl md:text-lg sm:text-xl text-lg xl:mb-8 lg:mb-6 md:mb-5 sm:mb-4 mb-3 font-normal text-gray-600">
              Say goodbye to back pain, neck pain <br /> and eye strain.
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </a>
          </div>
          <div className="lg:col-span-7 md:col-span-6 col-span-12 md:order-2 order-1">
            <div
              style={{
                backgroundImage: "url(/header/header2.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100% )",
              }}
              className="md:h-full relative h-96 md:skewhead"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;

// backgroundImage: "linear-gradiet(to bottom, #fafafa 20%, #eaeaea 63%, #dedede 68%)",
