import React from "react"
import Image from 'next/image'

const HoveredImages = () => {
  return (
    <section className="body-font hidden lg:block section-spacer">
      <div className="container px-5 pt-10 mt-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Item
            image_url="/hoveredimages/ergChair1.png"
            image_alt="Standing Desk"
            description="It perfectly fits your body height and shape."
          />
          <Item
            image_url="/hoveredimages/table.png"
            image_alt="ergonomic chair"
            description="The melamine surface is durable, stain resistant and easy to clean."
          />
          <Item
            image_url="/hoveredimages/ergChair2.png"
            image_alt="Wall Frame"
            description="En-lighten your Space and Work like a Boss."
          />
        </div>
      </div>
    </section>
  )
}

function Item({ image_url, image_alt, description }) {
  return (
    <div className="m-4 flex-1 overflow-hidden">
      <div className="h-full overflow-hidden relative overlay-parent">
        <Image
          className="w-full h-full block transform scale-110"
          src={image_url}
          alt={image_alt}
          height={631}
          width={420}
          layout="responsive"
        />
        <div className="overlay absolute top-0 right-0 bottom-0 left-0 opacity-0 transition ease-in duration-200 p-5">
          <p className="font-extrabold xl:text-6xl lg:text-5xl xl:pt-10 lg:pt-3 text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HoveredImages
