import React from "react"
import SlimHead from "./utils/slimHead"

const Plans = () => {
  return (
    <section className="container mx-auto section-spacer">
      <SlimHead>Choose your plan</SlimHead>
      <div className="flex flex-col items-center max-w-5xl mx-auto lg:px-5 md:px-3">
        <div className="rounded-full bg-secondaryBlue lg:w-60 lg:h-60 md:w-56 md:h-56 sm:w-44 sm:h-44 w-40 h-40 text-center flex flex-col justify-center md:mb-4 sm:mb-2 items-center hover:bg-blue-100">
          <h1 className="capitalize lg:p-4 lg:text-2xl md:text-xl text-lg font-medium">
            one time payment
          </h1>
          <h5 className="sm:text-base text-sm text-center">Rs 11999/-</h5>
        </div>
        <h1 className="capitalize md:mb-4 mb-2 lg:text-2xl md:text-xl text-xl font-medium">
          Or
        </h1>
        <h1 className="capitalize md:mb-4 mb-2 lg:text-2xl md:text-xl text-xl font-medium">
          our affordable subscription plans
        </h1>
        <div className="w-full flex flex-wrap">
          <div className="sm:flex-1 w-full flex justify-around">
            <SmallPlans duration="Monthly" cost="300" />
            <SmallPlans duration="3 Months" cost="800" />
          </div>
          <div className="sm:flex-1 w-full flex justify-around">
            <SmallPlans duration="6 Months" cost="1500" />
            <SmallPlans duration="12 Months" cost="2400" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SmallPlans({ duration, cost }) {
  return (
    <div className="rounded-full bg-secondaryBlue hover:bg-blue-100 lg:w-48 lg:h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 h-32 w-32 lg:text-2xl text-center flex flex-col justify-center items-center mb-4">
      <h1 className="capitalize lg:p-4 lg:text-2xl md:text-xl text-lg font-medium">
        {duration}
      </h1>
      <h5 className="sm:text-base text-sm text-center">Rs {cost}/-</h5>
    </div>
  )
}

export default Plans
