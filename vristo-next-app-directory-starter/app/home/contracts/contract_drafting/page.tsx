"use client"

import Breadcrumb from "@/components/Common/BreadCrumbs/BreadCrumb";
import { HomeIcon, ClipboardDocumentIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import ContractInformation from "@/app/ui/contracts/contract_drafting/contract_information";
import ProductInformation from "@/app/home/products/AllProducts/AllProducts"
import IncotermInformation from "@/app/ui/contracts/contract_drafting/incoterms"
import DraftingDoc from "@/app/ui/contracts/contract_drafting/doc_drafting"
import DocUpload from '@/app/ui/contracts/contract_drafting/document_upload'

import React, { useState, useMemo } from "react";



const Page: React.FC = () => {

    const [activeTab, setActiveTab] = useState<any>(1);

    const breadcrumbs = [
        { text: 'Home', active: true, link: '/home' },
        { text: 'Contracts', active: false, link: '/home/contracts' },
        { text: 'Contract Drafting', active: true, link: '/home/contracts/contract_drafting' },
    ];

    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />


            <div className="inline-block w-full bg-white p-5 ">
                <div className="relative z-[1]">
                    <div
                        className={`${activeTab === 1 ? 'w-[20%]' : activeTab === 2 ? 'w-[40%]' : activeTab === 3 ? 'w-[60%]' : activeTab=== 4 ? 'w-[80%]' : activeTab=== 5 ? 'w-[100%]' : ''}
                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                    ></div>
                    <ul className="mb-5 grid grid-cols-5">
                        <li className="mx-auto">
                            <button
                                type="button"
                                className={`${activeTab === 1 ? '!border-primary !bg-primary text-white' : ''}
                                            flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                onClick={() => setActiveTab(1)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                                </svg>

                            </button>
                            <span className={`${activeTab === 1 ? 'text-primary ' : ''}text-center mt-2 block`}>Contract <br /> Information</span>
                        </li>
                        <li className="mx-auto">
                            <button
                                type="button"
                                className={`${activeTab === 2 ? '!border-primary !bg-primary text-white' : ''}
                                            flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                onClick={() => setActiveTab(2)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>

                            </button>
                            <span className={`${activeTab === 2 ? 'text-primary ' : ''}text-center mt-2 block`}>Product <br /> Information</span>
                        </li>
                        <li className="mx-auto">
                            <button
                                type="button"
                                className={`${activeTab === 3 ? '!border-primary !bg-primary text-white' : ''}
                                            flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                onClick={() => setActiveTab(3)}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                            </button>
                            <span className={`${activeTab === 3 ? 'text-primary ' : ''}text-center mt-2 block`}>Incoterms</span>
                        </li>
                        <li className="mx-auto">
                            <button
                                type="button"
                                className={`${activeTab === 4 ? '!border-primary !bg-primary text-white' : ''}
                                            flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                onClick={() => setActiveTab(4)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                            </button>
                            <span className={`${activeTab === 4 ? 'text-primary ' : ''}text-center mt-2 block`}>Contract <br /> Document</span>
                        </li>
                        <li className="mx-auto">
                            <button
                                type="button"
                                className={`${activeTab === 5 ? '!border-primary !bg-primary text-white' : ''}
                                            flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                onClick={() => setActiveTab(5)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                            </button>
                            <span className={`${activeTab === 5 ? 'text-primary ' : ''}text-center mt-2 block`}>Document <br /> Upload</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="mb-5" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                        <ContractInformation />
                    </div>
                    <div className="mb-5" style={{ display: activeTab === 2 ? 'block' : 'none' }}>
                        <ProductInformation />
                    </div>
                    <div className="mb-5" style={{ display: activeTab === 3 ? 'block' : 'none' }}>
                        <IncotermInformation />
                    </div>
                    <div className="mb-5" style={{ display: activeTab === 4 ? 'block' : 'none' }}>
                        <DraftingDoc />
                    </div>
                    <div className="mb-5" style={{ display: activeTab === 5 ? 'block' : 'none' }}>
                        <DocUpload />
                    </div>
                </div>
                <div className="flex justify-between">

                    {/* <button type="button" className={`btn btn-info ${activeTab === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab(activeTab === 1 ? 1 : activeTab -1)}>
                        Back
                    </button> */}
                    <button className={`bg-transparentinline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${activeTab === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab(activeTab === 1 ? 1 : activeTab -1)}>
                    Back
                    </button>

                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setActiveTab(activeTab === 5 ? 5 :activeTab + 1)}>
                    {activeTab === 5 ? 'Finish' : 'Next'}
                    </button>
                    {/* <button type="button" className="btn btn-info" onClick={() => setActiveTab(activeTab === 5 ? 5 :activeTab + 1)}>
                        {activeTab === 5 ? 'Finish' : 'Next'}
                    </button> */}
                </div>
            </div>

        </div>
    );
};

export default Page;