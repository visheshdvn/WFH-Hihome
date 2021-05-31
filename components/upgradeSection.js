import React from "react"
import SlimHead from "./utils/slimHead"

const UpgradeSection = () => {
  return (
    <section className="container mx-auto section-spacer lg:px-5 px-3">
      <SlimHead>Upgrade your workstation with hi home</SlimHead>

      <Heading>Perfect standing desk for your Work Station</Heading>

      <section className="text-gray-600 body-font overflow-hidden mb-10">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-wrap">
            <img
              style={{ maxHeight: "600px" }}
              alt="ecommerce"
              className="upgrade-section-image"
              src="/perfectStandingDesk.png"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0">
              <ul className="pl-8">
                <ListItem>
                  Lower your risk of weight gain - burn upto 1000 calories every
                  week with a standing desk.
                </ListItem>
                <ListItem>
                  Reduce back pain upto 32% and neck pain by 54% in several
                  weeks.
                </ListItem>
                <ListItem>
                  Improve mood and energy levels - think fast & work smart.{" "}
                </ListItem>
                <ListItem>
                  Boost Productivity - stop wasting 5 hours in simple tasks and
                  do it in 2 hours with focus and concentration.
                </ListItem>
              </ul>
              {/* <div className="pl-8">
                <BtnOutline />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-row-reverse text-right">
        <Heading>Incredibly comfortable Ergonomic chair</Heading>
      </div>

      <section className="text-gray-600 body-font overflow-hidden mb-10">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-wrap">
            <img
              style={{ maxHeight: "600px" }}
              alt="ecommerce"
              className="upgrade-section-image lg:order-2 order-1"
              src="/elegantDeskChair.png"
            />
            <div className="lg:w-1/2 w-full lg:pr-10 lg:mt-0 lg:order-1 order-2 pl-8 ">
              <ul className="list-dis">
                <ListItem>Soft, Relaxing and comfortable</ListItem>
                <ListItem>Supports your posture</ListItem>
                <ListItem>Reduces back pain and neck pain</ListItem>
                <ListItem>Reduces pressure on your hips</ListItem>
                <ListItem>Reduces eye strain</ListItem>
              </ul>

              {/* <BtnOutline /> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

function BtnOutline() {
  return (
    <div className="text-center sm:text-left">
      <button className="text-primaryBlue bg-white border-2 border-primaryBlue font-bold text-sm md:text-base lg:py-4 lg:px-8 md:py-3.5 md:px-5 sm:py-3 sm:px-4 py-2.5 px-3 focus:outline-none rounded uppercase">
        Get it now
      </button>
    </div>
  )
}

function Heading({ children }) {
  return (
    <div className="xl:mb-8 xl:mt-14 lg:mb-6 md:mt-8 sm:mt-10 lg:w-4/6 md:w-3/4 w-full font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl">
      {children}
    </div>
  )
}

function ListItem({ children }) {
  return (
    <li className="lg:text-xl md:text-lg text-base sm:leading-relaxed sm:text-left xl:mb-8 lg:mb-5 md:mb-6 sm:mb-4 mb-3 text-left">
      <div className="md:w-6 w-4 float-left border-collapse -ml-8 mr-3">
        <img src="/check.png" className="w-full" />
      </div>
      {children}
    </li>
  )
}

export default UpgradeSection
