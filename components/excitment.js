import React from "react"

const Excitment = () => {
  return (
    <section id="excitment" className="body-font px-0 lg:px-5 pt-0 xl:mt-0 lg:mt-20 md:mt-16 sm:mt-14 mt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap sm:-mx-4 -mb-10 text-center w-full xl:px-24">
          <div className="xl:w-2/5 sm:w-1/2 px-4 flex flex-row-reverse">
            <img src="/excitment/excitment.jpg" alt="excitment" />
          </div>

          <div className="xl:w-3/5 sm:w-1/2 sm:pl-2 md:p-0 pb-5 px-3 sm:px-0">
            <div className="h-full xl:pr-16">
              <h1 className="font-bold sm:text-left lg:text-4xl md:text-3xl text-lg sm:leading-relaxed lg:mb-10 md:mb-6 sm:mb-4 mb-3">
                Everything you need to stay healthy & find your workflow
              </h1>
              <p className="paragraph-text">
              From adjustable standing desks to active chairs, and art pieces — everything to create a home office that makes you feel good in your body and do your most inspired work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Excitment
