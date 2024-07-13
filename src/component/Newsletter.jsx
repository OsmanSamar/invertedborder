import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { emailValidation } from "../Validation";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    email: " ",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleError = (err, field) => {
    setErrorMessage((prev) => ({ ...prev, [field]: err }));
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value; // To get the input value directly
    setEmail(value); // Update email state with the new value

    // Validate the email input

    const validation = emailValidation(value);
    if (validation.isValid) {
      handleError("", "email"); // Clear error message if email is valid
    } else {
      handleError(validation.message, "email"); // Set error message if email is invalid
    }
    // setEmail(""); // Reset email state to clear the input field
    setFormSubmitted(false); // Reset form submission state when typing
  };

  const validate = async (e) => {
    // Prevent form submission
    e.preventDefault();

    setFormSubmitted(true);

    let isValid = true;

    // Existing validation logic

    if (!email) {
      handleError("Please enter email address", "email");
      isValid = false;
    } else if (!emailValidation(email).isValid) {
      handleError("Valid Email Required", "email");
      isValid = false;
    } else {
      handleError("", "email");
    }
    if (isValid) {
      // alert("Message Sent! ");
      setSuccessMessage("Message Sent!");
      // Clear the form and reset form submission state

      setEmail("");

      setFormSubmitted(false);
    }
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessage("");
  };

  return (
    <>
      <div className="p-2 mt-6 ">
        <form onSubmit={validate} className="relative">
          {errorMessage.email && (
            <p className="text-red-500 mb-2">{errorMessage.email}</p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => handleInputChange(e, "email")}
            className={`bg-gray-50 text-gray-900 w-full md:w-[218px] text-md cursor-pointer block p-2.5
             px-4 py-2 mb-4 lg:mb-4 border-0  rounded-lg pl-7 pr-20
             ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6
             border-gray-300   focus:ring-orange-600  focus:border-orange-600
             ring-1 ring-inset    hover:border-orange-500 outline-none
              ${
                formSubmitted && errorMessage.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
          />

          <button
            onclick="validateEmail(event)"
            type="submit"
            className=" w-full md:w-[110px] text-white  bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium
             rounded-lg text-sm px-6 py-2.5  cursor-pointer  "
          >
            Subscribe
          </button>

          {/* Success Message */}
          {successMessage && (
            <div className="fixed top-0 left-0  w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
              <div className="bg-white p-6 m-6  rounded-lg  ">
                <div className=" flex items-center space-x-2 mb-4">
                  <FaCheckCircle className="text-green-500" />
                  <p className="text-lg font-semibold ">{successMessage}</p>
                </div>
                <p className="text-lg font-semibold mb-4">
                  Thanks for subscribing. You'll get our newsletter weekly!
                </p>
                <div className="flex justify-end">
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                    onClick={handleCloseSuccessMessage}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Newsletter;
