import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const Hype = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
    <section className="section-spacer bg-secondaryBlue py-16">
      <div>
        <h1 className="text-center md:text-6xl font-extrabold text-4xl sm:text-5xl">
          Hi Home Hype
        </h1>
        <h3 className="text-center text-base sm:text-xl my-4 sm:my-8 sm:px-16 px-3">
          Hear the hype from people who have tried our{" "}
          <span className="text-primaryBlue">WFH Setups</span> and left reviews.
        </h3>
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        ssr={true}
        removeArrowOnDeviceType={[
          "mobile",
          "desktop",
          "tablet",
          "superLargeDesktop",
        ]}
      >
        <SliderItem
          starCount={5}
          review="Love, love, love my standing desk from Fully. Loved it so much that's why I came back and bought another."
          name="Karan Vohra"
        />
        <SliderItem
          starCount={5}
          review="I shopped around a lot of standup desks and I'm so glad I found Fully. The desk is exactly what I was looking for, very good quality, very nice design, the perfect size for my small space, and reasonably priced."
          name="Damini K."
        />
        <SliderItem
          starCount={5}
          review="Easy to order, easy to assemble with easy to read instructions. Love the additional purchase options to complete my home office. Quick delivery."
          name="Arnab Kothari"
        />
      </Carousel>
    </section>
  )
}

function SliderItem({starCount, review, name}) {
  return (
    <div className="flex justify-center mb-10 mt-5">
      <div className="px-6 py-9 w-80 bg-white">
        <div className="flex justify-center">
          <img className="h-6 mr-1" src="/reviews/star.svg" />
          <img className="h-6 mr-1" src="/reviews/star.svg" />
          <img className="h-6 mr-1" src="/reviews/star.svg" />
          <img className="h-6 mr-1" src="/reviews/star.svg" />
          <img className="h-6 mr-1" src="/reviews/star.svg" />
        </div>
        {/* <h2 className="font-bold md:mt-3 md:mb-2 text-xl">Works amazingly!</h2> */}
        <p style={{ fontFamily: "Poor Story" }} className="text-xl font-normal mt-3 text-center">
          {review}
        </p>
        <div className="h-px bg-gray-300 my-2"></div>
        <h1 className="font-serif font-bold text-center">{name}</h1>
      </div>
    </div>
  )
}

export default Hype
