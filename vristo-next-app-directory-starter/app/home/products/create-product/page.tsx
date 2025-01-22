'use client'
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';
import Head from 'next/head';

const CreateProductPage = () => {
  const [productDetails, setProductDetails] = useState({
    title: '',
    code: '',
    description: '',
    category: '',
    newCategory: '',
    class: '',
    newClass: '',
    unitOfIssue: '',
    packSize: '',
    productStrength: '',
    brandName: '',
    status: 'Draft',
    visibility: 'Hidden',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  const handleAddNewCategory = () => {
    // Implement the logic to add a new category
    console.log("Add new category");
  };
  const handleAddNewProductClass = () => {
    // Implement the logic to add a new category
    console.log("Add new category");
  };

  const handleAddNewUnitOfMeasurement = () => {
    // Implement the logic to add a new category
    console.log("Add new category");
  };
  const handleAddNewpackSize = () => {
    // Implement the logic to add a new category
    console.log("Add new category");
  };
  const handleAddNewProductStrength = () => {
    // Implement the logic to add a new category
    console.log("Add new category");
  };

  const onDrop = (acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
    // You can handle the file upload logic here
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container mx-auto p-4">
        <Head>
            <title>Create Product</title>
        </Head>
        <h1 className="text-3xl font-semibold text-center my-4">
            Create A New Product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
                <input type="text" name="title" id="title" value={productDetails.title} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="code" className="block text-sm font-medium text-gray-700">Product Code</label>
                <input type="text" name="code" id="code" value={productDetails.code} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Product Description</label>
                <textarea name="description" id="description" value={productDetails.description} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
            </div>

            {/* General Info Card */}
            <div className="card bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">General Info</h2>
                {/* Dropdowns and inputs for category, class, unit of issue, pack size, etc. */}
                <div className="mb-4 flex items-center justify-between">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">
                        Select Product Category
                    </label>
                    <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleAddNewCategory}
                    >
                        Add New
                    </button>
                </div>
                <div className="mb-4">
                    <select
                        name="newProductCategory"
                        id="newProdcutCategory"
                        value={productDetails.category}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option value="" disabled>
                        Categories
                        </option>
                        <option>
                        DRUGS
                        </option>
                        <option>
                        LAB
                        </option>
                        <option>
                        NON-DRUGS
                        </option>
                        <option>
                        DRUGS
                        </option>
                    {/* Add other categories here */}
                    </select>
                </div>

                <div className="mb-4 flex items-center justify-between">
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                        Select Product Class
                    </label>
                    <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleAddNewProductClass}
                    >
                        Add New
                    </button>
                </div>
                <div className="mb-4">
                <select 
                    name="newProductClass" 
                    id="newProductClass" 
                    value={productDetails.class} 
                    onChange={handleInputChange} 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                <option value="" disabled>
                    Classes
                </option>
                <option>
                    Class A
                </option>
                <option>
                    Class B
                </option>
                <option>
                    Class C
                </option>
                <option>
                    Class D
                </option>
                {/* Add other classes here */}
                </select>
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label htmlFor="unitOfIssue" className="block text-sm font-medium text-gray-700">Select Unit of Measurement</label>
                    <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleAddNewUnitOfMeasurement}
                    >
                        Add New
                    </button>
                </div>
                    <div className='mb-4'>
                    <select 
                        name="unitOfMeasurement"
                        id="unitOfMeasuremen" 
                        value={productDetails.unitOfIssue} 
                        onChange={handleInputChange} 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="" disabled>Units</option>
                    <option>
                        Litres
                    </option>
                    <option>
                        grams
                    </option>
                    <option>
                        Kilograms
                    </option>
                    <option>
                        Meters
                    </option>
                    {/* Add other units here */}
                    </select>
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label htmlFor="packSize" className="block text-sm font-medium text-gray-700">Select Pack Size</label>
                    <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleAddNewpackSize}
                    >
                        Add New
                    </button>
                </div>
                    <div className='mb-4'>
                    <select 
                        name="packSize" 
                        id="packSize" 
                        value={productDetails.packSize} 
                        onChange={handleInputChange} 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="" disabled>Sizes</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                    
                    {/* Add other pack sizes here */}
                    </select>
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Select Product Strength</label>
                    <button
                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        onClick={handleAddNewProductStrength}
                    >
                        Add New
                    </button>
                </div>
                <div className='mb-4'>
                    <select 
                        name="productStrength" 
                        id="productStrength" 
                        value={productDetails.productStrength} 
                        onChange={handleInputChange} 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        <option value="" disabled>
                            Product Strengths
                        </option>
                        <option value="">
                            High
                        </option>
                        <option value="">
                            Medium
                        </option>
                        <option value="">
                            Low
                        </option>
                        {/* Add other product strengths here */}
                    </select>
                </div>
            </div>

            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Product Gallery Card */}
                    <div className="card bg-white p-4 rounded-lg shadow lg:col-span-1">
                        <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                            <h2 className="text-lg font-semibold mb-4">Product Gallery</h2>
                            {/* File upload area */}
                            <div {...getRootProps()} className="dropzone p-4 border-2 border-dashed border-gray-300 text-center cursor-pointer">
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                <p>Drop the files here...</p>
                                ) : (
                                <p>Drag &apos;n&apos drop some files here, or click to select files</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Publish Card */}
                    <div className="card bg-white p-4 rounded-lg shadow lg:col-span-1">
                        <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                            <h2 className="text-lg font-semibold mb-4">Publish</h2>
                            {/* Status and visibility dropdowns */}
                            <div className="mb-4 flex items-center justify-between">
                                <div className='mt-2'>
                                    <label htmlFor="status" className="text-sm font-medium text-gray-700">
                                        Status:
                                    </label>
                                    <div className="mb-4">
                                        <select
                                            name="status"
                                            id="status"
                                            value={productDetails.status}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                        <option value="" disabled>
                                                All
                                            </option>
                                            <option value="draft">
                                                Draft
                                            </option>
                                            <option value="published">
                                                Published
                                            </option>
                                            <option value="scheduled">
                                                Scheduled
                                            </option>
                                        {/* Add other categories here */}
                                        </select>
                                    </div>
                                    <div className='mt-4'>
                                        <label htmlFor="visibility" className='block text-sm font-medium text-gray-700'>
                                            Visibility
                                        </label>
                                        <select
                                            name="visibility"
                                            id="visibility"
                                            value={productDetails.visibility}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            <option value="hidden">Hidden</option>
                                                <option value="public">Public</option>
                                            </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CreateProductPage;
