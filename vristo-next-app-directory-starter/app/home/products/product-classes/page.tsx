'use client'
// ProductClassPage.tsx
import { useState } from 'react';
import { sampleProductClasses, ProductClass } from '@/app/lib/sampleProductClasses';
import Link from 'next/link';

export default function ProductClassPage() {
  const [productClasses, setProductClasses] = useState<ProductClass[]>(sampleProductClasses);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionModalIndex, setActionModalIndex] = useState<number | null>(null);
  const [viewingProductClass, setViewingProductClass] = useState<ProductClass | null>(null);
  const [editingProductClass, setEditingProductClass] = useState<ProductClass | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const itemsPerPage = 10;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newProductClass, setNewProductClass] = useState({id: '', code:'', description: ''});

  //function to handle the submission of the new product class
  const handleCreateProductClass = () => {
    const newId = (productClasses.length + 1).toString(); //Generate a new ID
    const productClassToAdd = { ...newProductClass, id: newId };
    setProductClasses([...productClasses, productClassToAdd]);
    setNewProductClass({ id: '', code: '', description: ''}); //Reset the form
    setIsCreateModalOpen(false); //close the modal
  }

  const filteredProductClasses = productClasses.filter((productClass) =>
    productClass.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    productClass.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProductClasses.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductClasses.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleExport = () => {
    const csvHeader = 'Class Code, Class Description\n';
    const csvRows = productClasses
        .map((productClass) => `${productClass.code},${productClass.description}`)
        .join('\n');

    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'product_classes.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openActionModal = (index: number) => {
    setActionModalIndex(index);
  };

  const closeActionModal = () => {
    setActionModalIndex(null);
  };

  const handleViewProductClass = (productClass: ProductClass) => {
    setViewingProductClass(productClass);
    setIsViewModalOpen(true);
    closeActionModal();
  };

  const handleEditProductClass = (productClass: ProductClass) => {
    setEditingProductClass(productClass);
    setIsEditModalOpen(true);
    closeActionModal();
  };

  const handleDeleteProductClass = (productClass: ProductClass) => {
    if (confirm('Are you sure you want to delete this product class?')) {
      setProductClasses(productClasses.filter((pc) => pc.id !== productClass.id));
      closeActionModal();
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Product Class</h1>
        <div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Product Class
          </button>
          <button
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Export
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search product classes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-4 mb-4 block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((productClass, index) => (
              <tr key={productClass.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productClass.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productClass.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium relative">
                  <button
                    onClick={() => openActionModal(index)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    ...
                  </button>
                  {actionModalIndex === index && (
                    <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <button
                          onClick={() => handleViewProductClass(productClass)}
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEditProductClass(productClass)}
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProductClass(productClass)}
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

      {/* View Modal */}
      {isViewModalOpen && viewingProductClass && (
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
                      View Product Class
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Class Code: {viewingProductClass.code}
                      </p>
                      <p className="text-sm text-gray-500">
                        Class Description: {viewingProductClass.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsViewModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && editingProductClass && (
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
                      Edit Product Class
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="mb-4">
                          <label htmlFor="editClassCode" className="block text-sm font-medium text-gray-700">
                            Class Code
                          </label>
                          <input
                            type="text"
                            id="editClassCode"
                            value={editingProductClass.code}
                            onChange={(e) => setEditingProductClass({ ...editingProductClass, code: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="editClassDescription" className="block text-sm font-medium text-gray-700">
                            Class Description
                          </label>
                          <input
                            type="text"
                            id="editClassDescription"
                            value={editingProductClass.description}
                            onChange={(e) => setEditingProductClass({ ...editingProductClass, description: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                  onClick={() => {
                    setProductClasses(productClasses.map((pc) => (pc.id === editingProductClass.id ? editingProductClass : pc)));
                    setIsEditModalOpen(false);
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Create Product Class Modal */}
    {isCreateModalOpen && (
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
                    Create Product Class
                </h3>
                <div className="mt-2">
                    <form>
                    <div className="mb-4">
                        <label htmlFor="createClassCode" className="block text-sm font-medium text-gray-700">
                        Class Code
                        </label>
                        <input
                        type="text"
                        id="createClassCode"
                        value={newProductClass.code}
                        onChange={(e) => setNewProductClass({ ...newProductClass, code: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="createClassDescription" className="block text-sm font-medium text-gray-700">
                        Class Description
                        </label>
                        <input
                        type="text"
                        id="createClassDescription"
                        value={newProductClass.description}
                        onChange={(e) => setNewProductClass({ ...newProductClass, description: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                onClick={handleCreateProductClass}
            >
                Create
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

    </div>
  );
}
