import { useState } from 'react';

type EditDepartmentsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    department: {
        name: string;
        description: string;
    };
    onSave: (updatedDepartment: {
        id: string; name: string; description: string 
}) => void;
};

const EditDepartmentsModal = ({ isOpen, onClose, department, onSave }: EditDepartmentsModalProps) => {
    const [departmentName, setDepartmentName] = useState(department.name);
    const [description, setDescription] = useState(department.description);

    const handleSave = () => {
        onSave({ name: departmentName, description });
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" onClick={onClose}>
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
                <div className="mt-3 text-center">
                    <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded-t-md">
                        <h3 className="text-lg leading-6 font-medium">Edit Department</h3>
                        <button onClick={onClose} className="hover:rotate-45 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-2 px-7 py-3">
                        <input
                            type="text"
                            placeholder="Department Name"
                            className="mb-4 w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                        <button
                            className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDepartmentsModal;
