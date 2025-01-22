import { useState } from 'react';
import { Supplier } from '../../lib/supplierData';

type EditSupplierModalProps = {
  supplier: Supplier;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedSupplier: Supplier) => void;
};

export default function EditSupplierModal({
  supplier,
  isOpen,
  onClose,
  onSave,
}: EditSupplierModalProps) {
  const [editedSupplier, setEditedSupplier] = useState<Supplier>(supplier);

  const handleSave = () => {
    onSave(editedSupplier);
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
                  Edit Supplier
                </h3>
                {/* Form fields for editing a product */}
                <div className="mt-2 flex flex-wrap">
                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Supplier Code</label>
                    <input
                      type="text"
                      value={editedSupplier.code}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, code: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Supplier Code"
                    />
                  </div>
                  
                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Supplier Name</label>
                    <input
                      type="text"
                      value={editedSupplier.name}
                      onChange={(e) => setEditedSupplier({ ...editedSupplier, name: e.target.value })}
                      className="mb-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Supplier Name"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                    <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Supplier Group</label>
                      <input
                        type="text"
                        value={editedSupplier.supplierGroup}
                        onChange={(e) =>
                          setEditedSupplier({ ...editedSupplier, supplierGroup: e.target.value })
                        }
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Product Class"
                      />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Registration Date</label>
                    <input
                      type="text"
                      value={editedSupplier.registrationDate}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, registrationDate: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Category"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Contact Person</label>
                    <input
                      type="text"
                      value={editedSupplier.contactPerson}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, contactPerson: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Pack Size"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Supplier Type</label>
                    <input
                      type="text"
                      value={editedSupplier.type}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, type: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                  </div>

                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Physical Address</label>
                    <input
                      type="text"
                      value={editedSupplier.address}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, address: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Telephone</label>
                    <input
                      type="text"
                      value={editedSupplier.telephone}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, telephone: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="text"
                      value={editedSupplier.email}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, email: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className='w-1/2 pr-2 mb-4'>
                   <label htmlFor="productClass" className="block text-sm font-medium text-gray-700">Status</label>
                    <input
                      type="text"
                      value={editedSupplier.status}
                      onChange={(e) =>
                        setEditedSupplier({ ...editedSupplier, status: e.target.value })
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="Status"
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