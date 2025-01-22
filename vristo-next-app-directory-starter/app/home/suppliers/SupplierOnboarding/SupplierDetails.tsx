import React from "react";

export default function SupplierDetails(){
    return (
        <section className="bg-white">
        <div className="py-8 px-4 mx-auto">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Supplier Details</h2>
            <form action="#">
                <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Supplier Name</label>
                        <input type="text" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                        <input type="text" name="brand" id="brand" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Telephone Number</label>
                        <input type="number" name="price" id="price" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
                    </div>
                    <div>
                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select id="category" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="default">Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Item Weight (kg)</label>
                        <input type="number" name="item-weight" id="item-weight" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" />
                    </div> 
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                        <textarea id="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                    </div>
                </div>
                </div>
                <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Add product
                </button>
            </form>
        </div>
      </section>
    )
}