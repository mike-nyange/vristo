'use client'
import React from 'react';
import { Product } from '@/app/lib/sampleProducts';

type ViewProductModalProps = {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
  };
  

  export default function ViewProductModal({
    product,
    isOpen,
    onClose,
  }: ViewProductModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}
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
                  View Product
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Product Code: {product.code}</p>
                  <p className="text-sm text-gray-500">Product Name: {product.name}</p>
                  <p className="text-sm text-gray-500">Product Class: {product.productClass}</p>
                  <p className="text-sm text-gray-500">Product Category: {product.category}</p>
                  <p className="text-sm text-gray-500">Pack Size: {product.packSize}</p>
                  <p className="text-sm text-gray-500">Unit of Measurement: {product.unitOfMeasurement}</p>
                  <p className="text-sm text-gray-500">Product Strength: {product.productStrength}</p>
                  {/* Add more fields as needed */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
