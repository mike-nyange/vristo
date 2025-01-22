import React from "react";
import Logo from "../../bcms-logo";

export default function signUp() {
    return (
        <section className="bg-blue-600">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-black">
         <Logo />   
      </a>
      <div className="w-full md:w-auto rounded-lg shadow shadow-md dark:border bg-white mb-6">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full md:w-[600px]">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl flex justify-center">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">  
              <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-2">           
                  <div className="w-full md:w-11/12 mb-6 md:mb-0 mr-6">
                      <label className="block mb-2 text-sm font-medium text-black">Username</label>
                      <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-black">Full Name</label>
                      <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your full name" />
                  </div>
                  </div> 
                  <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-2">   
                  <div className="w-full md:w-11/12 mb-6 md:mb-0 mr-6">
                      <label className="block mb-2 text-sm font-medium text-black">Telephone</label>
                      <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter phone number" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-black">Address</label>
                      <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter physical address" />
                  </div>
                  </div>
                 <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-2">
                  <div className="w-full md:w-11/12 mb-6 md:mb-0 mr-6">
                      <label className="block mb-2 text-sm font-medium text-black">ID/Passport Number</label>
                      <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter ID/Passport number" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-black">Email Address</label>
                      <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email address" />
                  </div>
                  </div> 
                  <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-3">
                  <div className="w-full md:w-auto mb-6 md:mb-0 mr-6">
                      <label className="block mb-2 text-sm font-medium text-black">Station</label>
                      <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select station</option>
                            <option value="1">Headquaters</option>
                            </select>
                  </div>
                  <div className="-ml-3">
                      <label className="block mb-2 text-sm font-medium text-black">Department</label>
                      <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select department</option>
                            <option value="1">Procurement Unit</option>
                            <option value="2">Contract Management Unit</option>
                            <option value="3">Finance</option>
                            <option value="3">Warehouse</option>
                            </select>
                  </div>
                  <div className="ml-3">
                      <label className="block mb-2 text-sm font-medium text-black">Role</label>
                      <select id="countries" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select role</option>
                            <option value="1">Admin</option>
                            <option value="2">Editor</option>
                            <option value="3">User</option>
                            <option value="3">Guest</option>
                            </select>
                  </div>
                  </div> 
                  <div className="flex flex-wrap -mx-3 mb-6 grid grid-cols-2">
                  <div className="w-full md:w-11/12 mb-6 md:mb-0 mr-6">
                      <label className="block mb-2 text-sm font-medium text-black">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-black">Confirm password</label>
                      <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-black flex justify-center">
                      Already have an account? <a href="../../login" className="font-medium text-blue-600 hover:underline dark:text-primary-500 ml-2">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );
}