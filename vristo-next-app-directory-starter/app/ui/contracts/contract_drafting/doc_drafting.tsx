'use client'
import { useState } from 'react';
import OneOffLocalContractTemplate from './Templates/One-Off Templates/OneOffLocalTemplate';

export default function ProductRegisterPage() {
    const [modal, setModal] = useState<boolean>(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isDocVisible, setIsDocVisible] = useState(false);

    const [selectedFiles, setselectedFiles] = useState([]);
    const [files, setFiles] = useState<any>([]);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const changeDoc = () => {
        setModalOpen(!modalOpen)
        setIsVisible(!isVisible);
        setIsDocVisible(false);

    };

    const chooseDoc = () => {
        setModalOpen(!modalOpen)
        setIsVisible(!isVisible);
        setIsDocVisible(true);
    };

    const togglemodal = () => {
        setModal(!modal);
      };
    
    
    return (
        <>
        <h2>Contract Document Preview</h2>
        {/* <button  style={{ display: isVisible ? 'block' : 'none' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalOpen(!modalOpen)}>
            Select Template +
        </button>
        <button  style={{ display: isVisible ? 'block' : 'none' }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeDoc}>
            Change Template
        </button> */}

        <div className='justify-center' >
            <div className="bg-light mt-4" style={{ display: isDocVisible ? 'block' : 'none' }}>
                {/* <OneOffLocalContractTemplate /> */}
            </div>
        </div>

        <button data-modal-target="#default-modal" data-modal-toggle="default-modal" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
        Select Template
        </button>

        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Select a Template
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                            <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                            <div className="ml-5">
                                <span className="mt-2 font-semibold">Fedex Delivery</span>
                                <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                            </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                            <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                            <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                            <div className="ml-5">
                                <span className="mt-2 font-semibold">Fedex Delivery</span>
                                <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                            </div>
                            </label>
                        </div>
                    </form>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={chooseDoc}>Choose</button>
                        <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => setModalOpen(!modalOpen)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
                        
                        


                      
        </>
    );
}
