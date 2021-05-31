import React from "react"
import SlimHead from "./utils/slimHead"

const Shines = () => {
  return (
    <section className="section-spacer lg:px-5 px-3 hidden md:block">
      <SlimHead>How hihome shines above the rest</SlimHead>
      <div className="flex justify-around flex-wrap md:mt-8 sm:mt-10 xl:mt-16 flex-col sm:flex-row">
        <Feature
          path="/feaureIcons/Subscription.png"
          textup="subscription plan upto"
          textlow="12 months available"
        />
        <Feature
          path="/feaureIcons/Assembly.png"
          textup="Easy"
          textlow="assembly"
        />
        <Feature
          path="/feaureIcons/Shipping.png"
          textup="free"
          textlow="shipping"
        />
        <Feature
          path="/feaureIcons/Return.png"
          textup="Easy"
          textlow="Return"
        />
        <Feature
          path="/feaureIcons/Quality.png"
          textup="Quality"
          textlow="assurance"
        />
      </div>
    </section>
  )
}

function Feature({ path, textup, textlow }) {
  return (
    <div className="marign-handler flex items-center mt-3">
      <img src={path} alt="featureIcons" className="mr-2 lg:h-10 xl:h-14 h-8" />
      <div className="uppercase sm:leading-relaxed sm:text-left text-gray-500 font-medium lg:text-sm xl:text-base text-xs">
        <h3 className="inline-block md:block">{textup}</h3> {" "}
        <h3 className="inline-block md:block">{textlow}</h3>
      </div>
    </div>
  )
}

export default Shines
