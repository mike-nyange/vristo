import React from "react";
import Logo from "../../bcms-logo";

export default function forgotPassword() {
    return (
        <section className="bg-blue-600 md:h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto lg:py-0">
      <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-black">
         <Logo /> 
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl flex justify-center">
                  Forgot Password
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <div className="bg-yellow-200 py-2">
                    <p className="text-sm flex justify-center text-amber-400">Enter your email address and instructions will be sent to you!</p>
                    </div>
                      <label  className="block mb-2 text-sm font-medium text-black mt-4">Email</label>
                      <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" />
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send Reset Link</button>
                  <p className="text-sm font-light text-black flex justify-center">
                      Wait, I remember my password... <a href="../../login" className="font-medium text-blue-600 hover:underline dark:text-primary-600 ml-2">Login</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );
}