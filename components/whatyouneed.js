import React from "react"
import SlimHead from "./utils/slimHead"

const Whatyouneed = () => {
  return (
    <section className="body-font section-spacer">
      <SlimHead>Here's what you need</SlimHead>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          <Item
            image_url="/whatYouNeed/table.png"
            image_alt="Standing Desk"
            title="Standing Desk"
            description="You can scale new heights while your desk does too. These height adjustable desks so that you can work while you stand."
          />
          <Item
            image_url="/whatYouNeed/chair.png"
            image_alt="ergonomic chair"
            title="Ergonomic Chair"
            description="Explore a new you with these pieces which relives your back and neck from long hours of sitting."
          />
          <Item
            image_url="/whatYouNeed/wallframe.png"
            image_alt="Wall Frame"
            title="Wall frame"
            description="Break the monotony by adding a dash of colours and quotes for inspiration"
          />
        </div>
      </div>
    </section>
  )
}
// lg:h-96 md:h-96 md:px-0 sm:h-80
function Item({ image_url, image_alt, title, description }) {
  return (
    <div className="lg:px-4 md:px-3 lg:flex-1 lg:w-auto md:w-1/2 lg:pt-10 mt-10">
      <div className="overflow-hidden">
        <div className="lg:h-72 xl:h-80 flex items-center justify-center">
          <img
            className="lg:h-auto md:h-96 sm:h-80 md:px-0 sm:px-14 h-aut px-10 object-cover object-center"
            src={image_url}
            alt={image_alt}
          />
        </div>
        <div className="px-6 sm:mt-8 sm:mb-10 lg:mb-0 lg:mt-14">
          <h1 className="title-font lg:text-4xl md:text-3xl sm:text-xl text-lg md:mb-3 sm:mb-1 text-center font-bold uppercase">
            {title}
          </h1>
          <p className="paragraph-text sm:text-center sm:px-10 md:px-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Whatyouneed
