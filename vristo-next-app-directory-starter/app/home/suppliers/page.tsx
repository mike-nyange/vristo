'use client'
import { SetStateAction, useState } from 'react';
import { Supplier, sampleSuppliers } from '../../lib/supplierData';
import Link from 'next/link';
import EditSupplierModal from './EditSupplier';

export default function SupplierRegisterPage() {
    const [suppliers, setSuppliers] = useState<Supplier[]>(sampleSuppliers);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [editingSupplier, setEditingSupplier] = useState<Supplier | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSupplierIds, setSelectedSupplierIds] = useState<Set<string>>(new Set());


    //state variables to manage the current page and the number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEdit = (supplier: Supplier) => {
        setEditingSupplier(supplier);
        setIsEditModalOpen(true);
      };

      const handleSaveEditedSupplier = (updatedSupplier: Supplier) => {
        const updatedSuppliers = suppliers.map((supplier) =>
            supplier.id === updatedSupplier.id ? updatedSupplier : supplier
        );
        setSuppliers(updatedSuppliers);
        setIsEditModalOpen(false);
    };

    // Supplier deletion
    const handleDeleteSupplier = (supplierId: string) => {
        if (window.confirm("Are you sure you want to delete this supplier?")) {
          const updatedSuppliers = suppliers.filter((supplier) => supplier.id !== supplierId);
          setSuppliers(updatedSuppliers);
        }
        setIsActionModalOpen(false);
      };
          
    
    //calculating the total number of pages and slice the filteredProducts array to only show the products for the current page
    const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredSuppliers.slice(indexOfFirstItem, indexOfLastItem);

    // function to update the current page when a pagination button is clicked
    const handlePageChange = (pageNumber: SetStateAction<number>) => {
        setCurrentPage(pageNumber);
      };      



    const handleExport = () => {
        const csvContent = [
            ['Supplier Code', 'Supplier Name', 'Supplier Group', 'Registration Date', 'Contact Person', 'Supplier Type', 'Physical Address', 'Telephone', 'Email Address', 'Status'],
            ...filteredSuppliers.map(supplier => [
                supplier.code,
                supplier.name,
                supplier.supplierGroup,
                supplier.registrationDate,
                supplier.contactPerson,
                supplier.type,
                supplier.address,
                supplier.telephone,
                supplier.email,
                supplier.status
            ])
        ]
        .map(row => row.join(','))
        .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'supplier.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)

        setIsExportModalOpen(false);
    }
    const [newSupplier, setNewSupplier] = useState<Supplier>({
        id: '',
        code: '',
        name: '',
        supplierGroup: '',
        registrationDate: '',
        contactPerson: '',
        type: '',
        address: '',
        telephone: '',
        email: '',
        status: ''
    });

    const handleSubmit = () => {
        const newId = (suppliers.length + 1).toString();
        const supplierToAdd = { ...newSupplier, id: newId };
        setSuppliers([...suppliers, supplierToAdd]);
        setNewSupplier({
        id: '',
        code: '',
        name: '',
        supplierGroup: '',
        registrationDate: '',
        contactPerson: '',
        type: '',
        address: '',
        telephone: '',
        email: '',
        status: ''
        });
        setIsCreateModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
    };

    const handleSelectSupplier = (supplierId: string, isSelected: boolean) => {
        const newSelectedSupplierIds = new Set(selectedSupplierIds);
        if (isSelected) {
          newSelectedSupplierIds.add(supplierId);
        } else {
          newSelectedSupplierIds.delete(supplierId);
        }
        setSelectedSupplierIds(newSelectedSupplierIds);
      };
      
    const handleSelectAllSuppliers = (isSelected: boolean) => {
        if (isSelected) {
            const allSupplierIds = new Set(suppliers.map(supplier => supplier.id));
            setSelectedSupplierIds(allSupplierIds);
        } else {
            setSelectedSupplierIds(new Set());
        }
    };
      

    return (
        <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Supplier Register</h1>
                <div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                   Add Supplier
                </button>
                <button
                    onClick={() =>  setIsExportModalOpen(true)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Export Suppliers
                </button>
                </div>
            </div>

            <input
                type="text"
                placeholder="Search suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-4 mb-4 block w-1/3 rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            />

            {/* Product table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 ">
                        <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold font-medium text-gray-500 uppercase tracking-wider">
                            Supplier Code
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Supplier Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Supplier Group
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Registration Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact Person
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Supplier Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Physical Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Telephone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((supplier) => (
                        <tr key={supplier.id}>
                             {/* <td>
                                <input
                                    type="checkbox"
                                    onChange={e => handleSelectSupplier(supplier.id, e.target.checked)}
                                    checked={selectedSupplierIds.has(supplier.id)}
                                />
                            </td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.code}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.supplierGroup}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.registrationDate}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.contactPerson}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.address}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.telephone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {supplier.status}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                                onClick={() =>{
                                    setSelectedSupplier(supplier);
                                    setIsActionModalOpen(true);
                                }}
                                className='text-gray-500 hover:text-gray-900'
                            >
                                ...
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4">
                <button
                    disabled={currentPage <= 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${currentPage === index + 1 ? 'bg-blue-500' : ''}`}
                    >
                    {index + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage >= totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                >
                    Next
                </button>
            </div>


            {/* Create Product Modal */}
            {isCreateModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                        >
                        &#8203;
                        </span>

                        <div
                        className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                        >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                    className="text-lg font-medium leading-6 text-gray-900"
                                    id="modal-headline"
                                    >
                                    Add Supplier
                                    </h3>

                                    {/* Form fields for creating a product */}
                                    <div className="mt-2">
                                        <form>
                                            <div className="mb-4">
                                            <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Supplier Code</label>
                                            <input
                                                type="text"
                                                name="code"
                                                id="productCode"
                                                value={newSupplier.code}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier code"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Supplier Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="productName"
                                                value={newSupplier.name}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier name"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Supplier Group</label>
                                            <input
                                                type="text"
                                                name="productClass"
                                                id="productClass"
                                                value={newSupplier.supplierGroup}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier group"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Registration Date</label>
                                            <input
                                                type="text"
                                                name="category"
                                                id="productCategory"
                                                value={newSupplier.registrationDate}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product category"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="packSize" className="block text-sm font-medium text-gray-700">Contact Person</label>
                                            <input
                                                type="text"
                                                name="packSize"
                                                id="packSize"
                                                value={newSupplier.contactPerson}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter contact person"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="unitOfMeasurement" className="block text-sm font-medium text-gray-700">Supplier Type</label>
                                            <input
                                                type="text"
                                                name="unitOfMeasurement"
                                                id="unitOfMeasurement"
                                                value={newSupplier.type}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier type"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Physical Address</label>
                                            <input
                                                type="text"
                                                name="productStrength"
                                                id="productStrength"
                                                value={newSupplier.address}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier address"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Telephone</label>
                                            <input
                                                type="text"
                                                name="productStrength"
                                                id="productStrength"
                                                value={newSupplier.address}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier address"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Email Address</label>
                                            <input
                                                type="text"
                                                name="productStrength"
                                                id="productStrength"
                                                value={newSupplier.address}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter supplier address"
                                            />
                                            </div>
                                            <div className="mb-4">
                                            <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Status</label>
                                            <input
                                                type="text"
                                                name="productStrength"
                                                id="productStrength"
                                                value={newSupplier.status}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter status"
                                            />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                            onClick={handleSubmit}
                            >
                            Add
                            </button>
                            <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setIsCreateModalOpen(false)}
                            >
                            Cancel
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Export Products Modal */}
            {isExportModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                        >
                        &#8203;
                        </span>

                        <div
                        className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3
                                        className="text-lg font-medium leading-6 text-gray-900"
                                        id="modal-headline"
                                        >
                                        Export Suppliers
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to export the suppliers from a CSV file?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={handleExport}
                                >
                                Export
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setIsExportModalOpen(false)}
                                >
                                Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* isActionModalOpen */}
            {isActionModalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>

                <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-headline">
                            Actions
                        </h3>
                        <div className="mt-2">
                            <ul>
                            <li>
                                <button
                                onClick={() => {
                                    setEditingSupplier(selectedSupplier);
                                    setIsActionModalOpen(false);
                                    setIsEditModalOpen(true);
                                }}
                                className="text-blue-500 hover:text-blue-700"
                                >
                                Edit
                                </button>
                            </li>
                            <li>
                                <Link href={`/supplier/view/${selectedSupplier?.id}`} legacyBehavior>
                                <a className="text-blue-500 hover:text-blue-700">View</a>
                                </Link>
                            </li>
                            <li>
                                <button
                                onClick={() => {
                                    if (selectedSupplier) {
                                    handleDeleteSupplier(selectedSupplier.id);
                                    }
                                }}
                                className="text-red-500 hover:text-red-700"
                                >
                                Delete
                                </button>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setIsActionModalOpen(false)}
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            )}

            {/* Edit Product Modal */}
            {isEditModalOpen && editingSupplier && (
                <EditSupplierModal
                supplier={editingSupplier}
                isOpen={!!selectedSupplier}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleSaveEditedSupplier}
              />
      )}

        </div>
    );
}