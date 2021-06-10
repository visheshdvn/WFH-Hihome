import React, { Component } from "react"
import * as typeformEmbed from "@typeform/embed"

export class Typeform extends Component {
  componentDidMount() {
    const popup1 = typeformEmbed.makePopup(
      "https://8u48hfnsb2c.typeform.com/to/NPgb2C6F",
      {
        mode: "popup",
        autoClose: 3000,
        hideHeaders: true,
        hideFooters: true,
        onsubmit: () => {
          popup1.close()
        },
      }
    )

    document
      .getElementById("popup")
      .addEventListener("click", () => popup1.open())
  }

  render() {
    return (
      <section className="section-spacer">
        <div className="body-font h-auto flex items-center bg-secondaryBlue py-5 sm:py-10 px-3 sm:px-0">
          <div className="container xl:px-64 lg:px-44 mx-auto">
            <h1 className="text-center font-bold text-xl sm:hidde mb-5 md:text-4xl sm:text-3xl">
              Ready to setup{" "}
              <span className="text-primaryBlue">your WFH station</span> with
              us?
            </h1>

            <div className="flex justify-center">
              <button id="popup" className="rounded-lg px-5 py-3 flex text-white font-bold bg-primaryBlue hover:bg-blue-400 border-none focus:outline-none">
                Register now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Typeform
