'use client'
import { useState } from 'react';

const ContractDetails = () => {
    const [contractType, setContractType] = useState('');
    const [contractCategory, setContractCategory] = useState('');
    const [currency, setCurrency] = useState('');
    const [supplierCode, setSupplierCode] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [supplierGroup, setSupplierGroup] = useState('');

    return (
        <div className="space-y-8">
            <div className="border-t border-gray-200 pt-4"> {/* Added top border line */}
                <h1 className="text-2xl font-bold">Contract Information</h1>
                <p className="border-b border-gray-200 pb-4">Please fill all information below</p> {/* Added bottom border line */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Tender Number */}
                <div>
                    <label htmlFor="tenderNumber" className="block text-sm font-medium text-gray-700">
                        Tender Number:
                    </label>
                    <input
                        type="text"
                        id="tenderNumber"
                        placeholder="Enter tender number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Contract Number */}
                <div>
                    <label htmlFor="contractNumber" className="block text-sm font-medium text-gray-700">
                        Contract Number:
                    </label>
                    <input
                        type="text"
                        id="contractNumber"
                        placeholder="Enter contract number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Contract Type */}
                <div>
                    <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">
                        Contract Type:
                    </label>
                    <select
                        id="contractType"
                        value={contractType}
                        onChange={(e) => setContractType(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option>Select contract type</option>
                        <option value="framework">Framework Contract</option>
                        <option value="one-off">One-off Contract</option>
                    </select>
                </div>

                {/* Contract Category */}
                <div>
                    <label htmlFor="contractCategory" className="block text-sm font-medium text-gray-700">
                        Contract Category:
                    </label>
                    <select
                        id="contractCategory"
                        value={contractCategory}
                        onChange={(e) => setContractCategory(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option>Select contract category</option>
                        <option value="supply">Supply</option>
                        <option value="work">Work</option>
                        <option value="service">Service</option>
                    </select>
                </div>

                {/* Lead Time */}
                <div>
                    <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700">
                        Lead Time:
                    </label>
                    <input
                        type="number"
                        id="leadTime"
                        placeholder="Enter lead time in days"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Number of Days for Default Period */}
                <div>
                    <label htmlFor="defaultPeriodDays" className="block text-sm font-medium text-gray-700">
                        Number of Days for Default Period:
                    </label>
                    <input
                        type="number"
                        id="defaultPeriodDays"
                        placeholder="Enter number of days"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Number of Days for Force-Majeure */}
                <div>
                    <label htmlFor="forceMajeureDays" className="block text-sm font-medium text-gray-700">
                        Number of Days for Force-Majeure:
                    </label>
                    <input
                        type="number"
                        id="forceMajeureDays"
                        placeholder="Enter number of days"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Exchange Rate at Tender Closing */}
                <div>
                    <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700">
                        Exchange Rate at Tender Closing:
                    </label>
                    <input
                        type="number"
                        id="exchangeRate"
                        placeholder="Enter exchange rate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Total Contract Value */}
                <div>
                    <label htmlFor="totalContractValue" className="block text-sm font-medium text-gray-700">
                        Total Contract Value:
                    </label>
                    <input
                        type="number"
                        id="totalContractValue"
                        placeholder="Enter total contract value"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Currency */}
                <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                        Currency:
                    </label>
                    <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="BWP">BWP</option>
                        <option value="USD">USD</option>
                    </select>
                </div>

                {/* Contract Start Date */}
                <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                        Contract Start Date:
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Contract End Date */}
                <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                        Contract End Date:
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Default Period Days */}
                <div>
                    <label htmlFor="defaultPeriodDays" className="block text-sm font-medium text-gray-700">
                        Default Period Days:
                    </label>
                    <input
                        type="number"
                        id="defaultPeriodDays"
                        placeholder="Enter default period days"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Contract Description */}
                <div>
                    <label htmlFor="contractDescription" className="block text-sm font-medium text-gray-700">
                        Contract Description:
                    </label>
                    <textarea
                        id="contractDescription"
                        placeholder="Enter contract description"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows={3}
                    ></textarea>
                </div>
            </div>

            {/* Supplier Details */}
            <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Supplier Details</h2>
                        <p className="border-b border-gray-200 pb-6">Please fill all information below</p> {/* Increased bottom padding */}
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 hover:text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Supplier
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* Supplier Code */}
                {/* Supplier Code */}
                <div>
                    <label htmlFor="supplierCode" className="block text-sm font-medium text-gray-700">
                        Supplier Code:
                    </label>
                    <select
                        id="supplierCode"
                        value={supplierCode}
                        onChange={(e) => setSupplierCode(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Supplier Code</option>
                        <option value="SC001">SC001 - Supplier A</option>
                        <option value="SC002">SC002 - Supplier B</option>
                        <option value="SC003">SC003 - Supplier C</option>
                    </select>
                </div>

                {/* Contact Person */}
                <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                        Contact Person:
                    </label>
                    <select
                        id="contactPerson"
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Contact Person</option>
                        <option value="CP001">CP001 - Ian John (Supplier A)</option>
                        <option value="CP002">CP002 - Jane Smith (Supplier B)</option>
                        <option value="CP003">CP003 - Michael James (Supplier C)</option>
                    </select>
                </div>
                {/* Supplier Name */}
                <div>
                    <label htmlFor="supplierName" className="block text-sm font-medium text-gray-700">
                        Supplier Name:
                    </label>
                    <input
                        type="text"
                        id="supplierName"
                        placeholder="Enter supplier name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Registration Date */}
                <div>
                    <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
                        Registration Date:
                    </label>
                    <input
                        type="date"
                        id="registrationDate"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Supplier Email */}
                <div>
                    <label htmlFor="supplierEmail" className="block text-sm font-medium text-gray-700">
                        Supplier Email:
                    </label>
                    <input
                        type="email"
                        id="supplierEmail"
                        placeholder="Enter supplier email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Supplier Telephone */}
                <div>
                    <label htmlFor="supplierTelephone" className="block text-sm font-medium text-gray-700">
                        Supplier Telephone:
                    </label>
                    <input
                        type="tel"
                        id="supplierTelephone"
                        placeholder="Enter supplier telephone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Supplier Group */}
                <div>
                    <label htmlFor="supplierGroup" className="block text-sm font-medium text-gray-700">
                        Supplier Group:
                    </label>
                    <select
                        id="supplierGroup"
                        value={supplierGroup}
                        onChange={(e) => setSupplierGroup(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value="">Select Supplier Group</option>
                        <option value="SG001">SG001 - Group A</option>
                        <option value="SG002">SG002 - Group B</option>
                        <option value="SG003">SG003 - Group C</option>
                    </select>
                </div>

                {/* Supplier Website */}
                <div>
                    <label htmlFor="supplierWebsite" className="block text-sm font-medium text-gray-700">
                        Supplier Website:
                    </label>
                    <input
                        type="url"
                        id="supplierWebsite"
                        placeholder="Enter supplier website"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Physical Address */}
                <div>
                    <label htmlFor="physicalAddress" className="block text-sm font-medium text-gray-700">
                        Physical Address:
                    </label>
                    <textarea
                        id="physicalAddress"
                        placeholder="Enter physical address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows={3}
                    ></textarea>
                </div>

                {/* Special Conditions for Contract */}
                <div>
                    <label htmlFor="specialConditions" className="block text-sm font-medium text-gray-700">
                        Special Conditions for Contract:
                    </label>
                    <textarea
                        id="specialConditions"
                        placeholder="Enter special conditions"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        rows={3}
                    ></textarea>
                </div>
            </div>

            {/* Proceed to Product Information Button */}
            <div className="border-t border-gray-200 pt-4"> {/* Added top border line */}
                <div className="text-right mt-4">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-900 hover:text-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Proceed to Product Information
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContractDetails;
