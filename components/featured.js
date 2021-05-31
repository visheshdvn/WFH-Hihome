import React from "react"
import SlimHead from './utils/slimHead'

const featured = () => {
  return (
    <section className="section-spacer">
      <SlimHead>
        we are featured in.
      </SlimHead>
      <div className="body-font items-center bg-secondaryBlue lg:py-16 md:py-10 sm:py-8 py-3">
        <div className="container horizontal-space mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center flex-1">
            <img className="lg:h-auto sm:h-7 md:h-8 h-8 my-3 sm:my-0" src="/entrepreneur.png" />
            <img className="lg:h-8 sm:h-5 md:h-6 h-6 my-3 sm:my-0" src="/popsugar.png" />
            <img className="lg:h-auto sm:h-6 md:h-7 h-7 my-3 sm:my-0" src="/forbes.png" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default featured
