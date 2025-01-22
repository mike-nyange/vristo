import { useState } from 'react';
import { Product } from '@/app/lib/sampleProducts';

type EditProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
};

export default function EditProductModal({
  product,
  isOpen,
  onClose,
  onSave,
}: EditProductModalProps) {
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
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
                  Edit Product
                </h3>
                {/* Form fields for editing a product */}
                <div className="mt-2 flex flex-wrap">
                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Product Code</label>
                    <input
                      type="text"
                      value={editedProduct.code}
                      onChange={(e) =>
                        setEditedProduct({ ...editedProduct, code: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                    {/* Add more fields as needed */}
                  </div>
                  
                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                      type="text"
                      value={editedProduct.name}
                      onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                      className="mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Product Class</label>
                      <input
                        type="text"
                        value={editedProduct.productClass}
                        onChange={(e) =>
                          setEditedProduct({ ...editedProduct, productClass: e.target.value })
                        }
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Product Class"
                      />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Product Category</label>
                    <input
                      type="text"
                      value={editedProduct.category}
                      onChange={(e) =>
                        setEditedProduct({ ...editedProduct, category: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Category"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Pack Size</label>
                    <input
                      type="text"
                      value={editedProduct.packSize}
                      onChange={(e) =>
                        setEditedProduct({ ...editedProduct, packSize: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Pack Size"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Unit of Measurement</label>
                    <input
                      type="text"
                      value={editedProduct.unitOfMeasurement}
                      onChange={(e) =>
                        setEditedProduct({ ...editedProduct, unitOfMeasurement: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Product Strength</label>
                    <input
                      type="text"
                      value={editedProduct.productStrength}
                      onChange={(e) =>
                        setEditedProduct({ ...editedProduct, productStrength: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
