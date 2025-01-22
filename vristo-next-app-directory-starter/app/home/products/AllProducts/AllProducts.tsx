'use client'
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Product, contractProducts } from '@/app/lib/contractProducts';
import Link from 'next/link';
import EditProductModal from './EditProductModal';
import ViewProductModal from './ViewProductModal';
import SearchInput from '@/app/ui/contracts/products/SearchInput';
import Pagination from '@/app/ui/contracts/products/Pagination';
import ExportButton from '@/app/ui/contracts/products/ExportButton';

export default function ProductRegisterPage() {
    const [products, setProducts] = useState<Product[]>(contractProducts);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isActionModalOpen, setIsActionModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProductIds, setSelectedProductIds] = useState<Set<string>>(new Set());
    const [viewingProduct, setViewingProduct] = useState<Product | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [actionModalIndex, setActionModalIndex] = useState<number | null>(null);




    //state variables to manage the current page and the number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsEditModalOpen(true);
      };

    const handleSaveEditedProduct = (updatedProduct: Product) => {
        const updatedProducts = products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setIsEditModalOpen(false);
    };

    // product deletion
    const handleDeleteProduct = (productId: string) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        setIsActionModalOpen(false);
    };  
    
    //View Product Function
    const handleViewProduct = (product: Product) => {
        setViewingProduct(product);
        setIsViewModalOpen(true);
        setActionModalIndex(null); // Close the action modal
    };
    
    //View Product Function
    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setIsEditModalOpen(true);
        setActionModalIndex(null); // Close the action modal
    };
    

    //calculating the total number of pages and slice the filteredProducts array to only show the products for the current page
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    // function to update the current page when a pagination button is clicked
    const handlePageChange = (pageNumber: SetStateAction<number>) => {
        setCurrentPage(pageNumber);
      };      



    const handleExport = () => {
        const csvContent = [
            ['Product Code', 'Product Name', 'Product Class', 'Product Category', 'Pack Size', 'Unit of Measurement', 'Product Strength'],
            ...filteredProducts.map(product => [
                product.code,
                product.name,
                product.productClass,
                product.category,
                product.packSize,
                product.unitOfMeasurement,
                product.productStrength
            ])
        ]
        .map(row => row.join(','))
        .join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'product.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)

        setIsExportModalOpen(false);
    }
    const [newProduct, setNewProduct] = useState<Product>({
        id: '',
        code: '',
        name: '',
        productClass: '',
        category: '',
        packSize: '',
        unitOfMeasurement: '',
        productStrength: '',
        currency: '',
        quantity:'',
        unit_price:'',
        total:'',
    });

    const handleSubmit = () => {
        const newId = (products.length + 1).toString();
        const productToAdd = { ...newProduct, id: newId };
        setProducts([...products, productToAdd]);
        setNewProduct({
        id: '',
        code: '',
        name: '',
        productClass: '',
        category: '',
        packSize: '',
        unitOfMeasurement: '',
        productStrength: '',
        currency: '',
        quantity:'',
        unit_price:'',
        total:'',
        });
        setIsCreateModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSelectProduct = (productId: string, isSelected: boolean) => {
        const newSelectedProductIds = new Set(selectedProductIds);
        if (isSelected) {
            newSelectedProductIds.add(productId);
        } else {
            newSelectedProductIds.delete(productId);
        }
        setSelectedProductIds(newSelectedProductIds);
    
        // Uncheck the "Select All" checkbox if any individual checkbox is deselected
        if (selectAllCheckboxRef.current) {
            selectAllCheckboxRef.current.checked = 
                newSelectedProductIds.size === products.length;
        }
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            const allProductIds = new Set(products.map(product => product.id));
            setSelectedProductIds(allProductIds);
        } else {
            setSelectedProductIds(new Set());
        }
    };
    
    const handleSelectAllProducts = () => {
        if (selectedProductIds.size > 0) {
            setSelectedProductIds(new Set());
        } else {
            const allProductIds = new Set(products.map(product => product.id));
            setSelectedProductIds(allProductIds);
        }
    };
    
    const selectAllCheckboxRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (selectAllCheckboxRef.current) {
            selectAllCheckboxRef.current.indeterminate = selectedProductIds.size > 0 && selectedProductIds.size < products.length;
            selectAllCheckboxRef.current.checked = selectedProductIds.size === products.length && products.length > 0;
        }
    }, [selectedProductIds, products.length]);
    
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Product Information</h1>
                <div>
                {/* <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Create Product
                </button> */}
                <ExportButton
      data={filteredProducts}
      fileName="products.csv"
      headers={['code', 'name', 'productClass', 'category', 'packSize', 'unitOfMeasurement', 'productStrength']}
    />
                </div>
            </div>

            <SearchInput
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Product table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                        <th>
                        <input
                            ref={selectAllCheckboxRef}
                            type="checkbox"
                            onChange={handleSelectAll}
                            checked={selectAll}
                        />

                        </th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Code
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Class
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Unit Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Currency
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Unit of Issue
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((product, index) => (
                            <tr key={product.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        onChange={e => handleSelectProduct(product.id, e.target.checked)}
                                        checked={selectedProductIds.has(product.id)}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.code}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.productClass}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.unit_price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.currency}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.unitOfMeasurement}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.quantity}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.total}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => {
                                        setSelectedProduct(product);
                                        setActionModalIndex(index); // Use the index here
                                    }}
                                    className="text-gray-500 hover:text-gray-900"
                                >
                                    ...
                                </button>
                                {actionModalIndex === index && (
                                <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <button
                                            onClick={() => handleViewProduct(product)}
                                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleEditProduct(product)}
                                            className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProduct(product.id)}
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

            {/* Pagination Controls */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
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
                                    Create Product
                                    </h3>

                                    {/* Form fields for creating a product */}
                                    <div className="">
                                        <form className='mt-2 flex flex-wrap'>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Product Code</label>
                                            <input
                                                type="text"
                                                name="code"
                                                id="productCode"
                                                value={newProduct.code}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product code"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="productName"
                                                value={newProduct.name}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product name"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Product Class</label>
                                            <input
                                                type="text"
                                                name="productClass"
                                                id="productClass"
                                                value={newProduct.productClass}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product class"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Product Category</label>
                                            <input
                                                type="text"
                                                name="category"
                                                id="productCategory"
                                                value={newProduct.category}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product category"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="packSize" className="block text-sm font-medium text-gray-700">Pack Size</label>
                                            <input
                                                type="text"
                                                name="packSize"
                                                id="packSize"
                                                value={newProduct.packSize}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter pack size"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="unitOfMeasurement" className="block text-sm font-medium text-gray-700">Unit of Measurement</label>
                                            <input
                                                type="text"
                                                name="unitOfMeasurement"
                                                id="unitOfMeasurement"
                                                value={newProduct.unitOfMeasurement}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter unit of measurement"
                                            />
                                            </div>
                                            <div className="w-1/2 pr-2 mb-4">
                                            <label htmlFor="productStrength" className="block text-sm font-medium text-gray-700">Product Strength</label>
                                            <input
                                                type="text"
                                                name="productStrength"
                                                id="productStrength"
                                                value={newProduct.productStrength}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                placeholder="Enter product strength"
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
                                        Export Products
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to export the products to a CSV file?
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
            {/* {isActionModalOpen && (
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
                            Product Actions
                        </h3>
                        <div className="mt-2">
                            <ul>
                            <li>
                                <button
                                onClick={() => {
                                    setEditingProduct(selectedProduct);
                                    setIsActionModalOpen(false);
                                    setIsEditModalOpen(true);
                                }}
                                className="text-blue-500 hover:text-blue-700"
                                >
                                Edit
                                </button>
                            </li>
                            <li>
                            <button
                                onClick={() => {
                                    setViewingProduct(selectedProduct);
                                    setIsViewModalOpen(true);
                                    setIsActionModalOpen(false);
                                }}
                                className="text-blue-500 hover:text-blue-700"
                                >
                                View
                            </button>
                            </li>
                            <li>
                                <button
                                onClick={() => {
                                    if (selectedProduct) {
                                    handleDeleteProduct(selectedProduct.id);
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
            )} */}

            {/* Edit Product Modal */}
            {/* {isEditModalOpen && editingProduct && (
                <EditProductModal
                product={editingProduct}
                isOpen={!!selectedProduct}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleSaveEditedProduct}
              />
            )} */}
            {/* ViewProductModal Component */}
            {isViewModalOpen && viewingProduct && (
                <ViewProductModal
                    product={viewingProduct}
                    isOpen={isViewModalOpen}
                    onClose={() => setIsViewModalOpen(false)}
                />
            )}

        </div>
    );
}
