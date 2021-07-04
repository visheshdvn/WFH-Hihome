import React, { useState } from "react"
import axios from "axios"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    planSelect: "",
    buttonText: "Join waiting list",
    disablBtn: false,
  })
  const { name, email, buttonText, planSelect, disablBtn } = formData

  function onChangeHandler(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function formSubmitHandler(e) {
    e.preventDefault()
    const submitdata = {
      name,
      email,
      subsTerm: planSelect,
    }

    try {
      const res = await axios.post(
        "https://lumbyte-backend.herokuapp.com/wfh-subs",
        submitdata
      )
      if (res.status === 200) {
        setFormData({
          ...formData,
          disablBtn: true,
          buttonText: "Registered 🎉",
        })
      }
    } catch (err) {
      setFormData({
        ...formData,
        disablBtn: true,
        buttonText: "You are already registered 😊",
      })
    }
  }

  return (
    <section className="section-spacer">
      <div className="body-font h-auto flex items-center bg-secondaryBlue py-5 sm:py-10 px-3 sm:px-0">
        <div className="container xl:px-64 lg:px-44 mx-auto">
          <h1 className="text-center font-bold text-xl sm:hidde mb-5 md:text-4xl sm:text-3xl">
            Ready to setup{" "}
            <span className="text-primaryBlue">your WFH station</span> with us?
          </h1>
          <div className="">
            <div className="max-w-md mx-auto">
              <form
                className="md:px px-3"
                onSubmit={(e) => formSubmitHandler(e)}
              >
                <div className="form mb-4 relative h-12 overflow-hidden rounded">
                  <input
                    className="form-input w-full h-full pt-5 border-none focus:outline-none bg-transparent"
                    // id="username"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChangeHandler}
                    required
                  />
                  <label
                    htmlFor="username"
                    className="label-name absolute bottom-0 left-0 h-full w-full pointer-events-none border-b border-gray-400 text-gray-400"
                  >
                    <span className="content-name absolute bottom-0 left-0 transition-all ease-in duration-300">
                      Name
                    </span>
                  </label>
                </div>

                <div className="form mb-4 relative h-12 overflow-hidden rounded">
                  <input
                    className="form-input w-full h-full pt-5 border-none focus:outline-none bg-transparent"
                    // id="username"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeHandler}
                    required
                  />
                  <label
                    htmlFor="username"
                    className="label-name absolute bottom-0 left-0 h-full w-full pointer-events-none border-b border-gray-400 text-gray-400"
                  >
                    <span className="content-name absolute bottom-0 left-0 transition-all ease-in duration-300">
                      Email
                    </span>
                  </label>
                </div>

                {/* <div className="mb-4">
                  <select
                    className="border-b border-gray-400 bg-transparent w-full py-2 rounded focus:outline-none focus:shadow-outline"
                    name="planSelect"
                    onChange={onChangeHandler}
                    required
                  >
                    <option value="" disabled selected>
                      Select Subscription term
                    </option>
                    <option value="monthly">Monthly</option>
                    <option value="3months">3 Months</option>
                    <option value="6months">6 Months</option>
                    <option value="12months">12 Months</option>
                    <option value="oneTimePay">One Time Payment</option>
                  </select>
                </div> */}

                <button
                  className="bg-primaryBlue hover:bg text-white font-bold p-3 rounded focus:outline-none focus:shadow-outline hover:bg-blue-400 w-full capitalize"
                  type="submit"
                  disabled={disablBtn}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
