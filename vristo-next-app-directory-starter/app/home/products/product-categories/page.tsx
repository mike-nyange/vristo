'use client'
import { useState } from 'react';
import { sampleProductCategories, ProductCategory } from '@/app/lib/sampleProductCategories';
import Link from 'next/link';

export default function ProductCategoryPage() {
  const [productCategories, setProductCategories] = useState<ProductCategory[]>(sampleProductCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionModalIndex, setActionModalIndex] = useState<number | null>(null);
  const [viewingProductCategory, setViewingProductCategory] = useState<ProductCategory | null>(null);
  const [editingProductCategory, setEditingProductCategory] = useState<ProductCategory | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const itemsPerPage = 10;
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newProductCategory, setNewProductCategory] = useState({ id: '', name: '', description: '' });

  const filteredProductCategories = productCategories.filter((productCategory) =>
    productCategory.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    productCategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProductCategories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProductCategories.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleExport = () => {
    const csvHeader = 'Category Name,Category Description\n';
    const csvRows = productCategories
      .map((productCategory) => `${productCategory.name},${productCategory.description}`)
      .join('\n');

    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'product_categories.csv');
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

  const handleViewProductCategory = (productCategory: ProductCategory) => {
    setViewingProductCategory(productCategory);
    setIsViewModalOpen(true);
    closeActionModal();
  };

  const handleEditProductCategory = (productCategory: ProductCategory) => {
    setEditingProductCategory(productCategory);
    setIsEditModalOpen(true);
    closeActionModal();
  };

  const handleDeleteProductCategory = (productCategory: ProductCategory) => {
    if (confirm('Are you sure you want to delete this product category?')) {
      setProductCategories(productCategories.filter((pc) => pc.id !== productCategory.id));
      closeActionModal();
    }
  };

  const handleCreateProductCategory = () => {
    const newId = (productCategories.length + 1).toString(); // Generate a new ID
    const productCategoryToAdd = { ...newProductCategory, id: newId };
    setProductCategories([...productCategories, productCategoryToAdd]);
    setNewProductCategory({ id: '', name: '', description: '' }); // Reset the form
    setIsCreateModalOpen(false); // Close the modal
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Product Category</h1>
        <div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Product Category
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
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((productCategory, index) => (
              <tr key={productCategory.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productCategory.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{productCategory.description}</td>
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
                          onClick={() => handleViewProductCategory(productCategory)}
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEditProductCategory(productCategory)}
                          className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProductCategory(productCategory)}
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
      {isViewModalOpen && viewingProductCategory && (
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
                      View Product Category
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Category Name: {viewingProductCategory.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Category Description: {viewingProductCategory.description}
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
      {isEditModalOpen && editingProductCategory && (
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
                      Edit Product Category
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="mb-4">
                          <label htmlFor="editClassCode" className="block text-sm font-medium text-gray-700">
                            Category Name
                          </label>
                          <input
                            type="text"
                            id="editCategoryName"
                            value={editingProductCategory.name}
                            onChange={(e) => setEditingProductCategory({ ...editingProductCategory, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="editClassDescription" className="block text-sm font-medium text-gray-700">
                            Category Description
                          </label>
                          <input
                            type="text"
                            id="editClassDescription"
                            value={editingProductCategory.description}
                            onChange={(e) => setEditingProductCategory({ ...editingProductCategory, description: e.target.value })}
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
                    setProductCategories(productCategories.map((pc) => (pc.id === editingProductCategory.id ? editingProductCategory : pc)));
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

      {/* Create Product Category Modal */}
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
                      Create Product Category
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="mb-4">
                          <label htmlFor="createClassCode" className="block text-sm font-medium text-gray-700">
                            Category Name
                          </label>
                          <input
                            type="text"
                            id="createClassCode"
                            value={newProductCategory.name}
                            onChange={(e) => setNewProductCategory({ ...newProductCategory, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="createCategoryDescription" className="block text-sm font-medium text-gray-700">
                            Category Description
                          </label>
                          <input
                            type="text"
                            id="createCategoryDescription"
                            value={newProductCategory.description}
                            onChange={(e) => setNewProductCategory({ ...newProductCategory, description: e.target.value })}
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
                  onClick={handleCreateProductCategory}
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
