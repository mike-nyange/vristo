'use client'
import { useState } from 'react';
import OneOffLocalContractTemplate from './Templates/One-Off Templates/OneOffLocalTemplate';

import { useDropzone } from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';


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

    const onDrop = (acceptedFiles: FileWithPath[]) => {
        console.log(acceptedFiles);
        // You can handle the file upload logic here
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    return (
        <div className="lg:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                {/* Product Gallery Card */}
                <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                    <h2 className="text-lg font-semibold mb-4">Award Letter</h2>
                    {/* File upload area */}
                    <div {...getRootProps()} className="dropzone p-4 border-2 border-dashed border-gray-300 text-center cursor-pointer">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : (
                            <p>Drag &apos;n &apos drop some files here, or click to select files</p>
                        )}
                    </div>
                </div>
                    {/* Product Gallery Card */}
                <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                    <h2 className="text-lg font-semibold mb-4">PPRA Form 3.</h2>
                    {/* File upload area */}
                    <div {...getRootProps()} className="dropzone p-4 border-2 border-dashed border-gray-300 text-center cursor-pointer">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : (
                            <p>Drag &apos;n &apos drop some files here, or click to select files</p>
                        )}
                    </div>
                </div>
                {/* Product Gallery Card */}
                <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                    <h2 className="text-lg font-semibold mb-4">Pricing Schedule</h2>
                    {/* File upload area */}
                    <div {...getRootProps()} className="dropzone p-4 border-2 border-dashed border-gray-300 text-center cursor-pointer">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : (
                            <p>Drag &apos;n &apos drop some files here, or click to select files</p>
                        )}
                    </div>
                </div>
                {/* Product Gallery Card */}
                <div className="card bg-white p-4 rounded-lg shadow col-span-2">
                    <h2 className="text-lg font-semibold mb-4">General Specifications.</h2>
                    {/* File upload area */}
                    <div {...getRootProps()} className="dropzone p-4 border-2 border-dashed border-gray-300 text-center cursor-pointer">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : (
                            <p>Drag &apos;n &apos drop some files here, or click to select files</p>
                        )}
                    </div>
                </div>


            </div>
        </div>
        );
}
