import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Ig = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    lgDesktop: {
      breakpoint: { max: 1920, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1280 },
      items: 4,
    },
    smDesktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="section-spacer">
      <Carousel
        responsive={responsive}
        showDots={true}
        ssr={true}
        removeArrowOnDeviceType={[
          "mobile",
          "desktop",
          "lgDesktop",
          "smDesktop",
          "tablet",
          "superLargeDesktop",
        ]}
      >
        <SliderItem filename="ig1" />
        <SliderItem filename="ig2" />
        <SliderItem filename="ig3" />
        <SliderItem filename="ig4" />
        <SliderItem filename="ig5" />
      </Carousel>
    </section>
  )
}

function SliderItem({ filename }) {
  return (
    <div className="flex justify-center mb-8">
      <img src={`/instagram/${filename}.png`} />
      <div>

      </div>
    </div>
  )
}

export default Ig
