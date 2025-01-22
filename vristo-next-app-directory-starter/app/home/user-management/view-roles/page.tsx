"use client"
import { useState } from 'react';
import Link from 'next/link';
import { sampleRoles, Role } from '@/app/lib/sampleRoles';
import { ChangeEvent } from 'react';

export default function ViewRolesPage() {
    const [roles, setRoles] = useState<Role[]>(sampleRoles);
    const [dropdownOpen, setDropdownOpen] = useState<Record<number, boolean>>({});
    const [searchQuery, setSearchQuery] = useState('');
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState<Set<string>>(new Set());
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);

    const toggleDropdown = (index: number) => {
        setDropdownOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectAll(e.target.checked);
        if (e.target.checked) {
            const newSelectedRoles = new Set(filteredRoles.map((role) => role.id));
            setSelectedRoles(newSelectedRoles);
        } else {
            setSelectedRoles(new Set());
        }
        setShowDeleteIcon(e.target.checked);
    };

    const handleSelectRole = (roleId: string, isChecked: boolean) => {
        const newSelectedRoles = new Set(selectedRoles);
        if (isChecked) {
            newSelectedRoles.add(roleId);
        } else {
            newSelectedRoles.delete(roleId);
        }
        setSelectedRoles(newSelectedRoles);
        setSelectAll(newSelectedRoles.size === filteredRoles.length);
        setShowDeleteIcon(newSelectedRoles.size > 0);
    };

    const handleDeleteSelectedRoles = () => {
        if (confirm('Are you sure you want to delete the selected roles?')) {
            const newRoles = roles.filter((role) => !selectedRoles.has(role.id));
            setRoles(newRoles);
            setSelectedRoles(new Set());
            setShowDeleteIcon(false);
        }
    };

    const handleDeleteRole = (roleId: string) => {
        if (confirm('Are you sure you want to delete this role?')) {
            const newRoles = roles.filter((role) => role.id !== roleId);
            setRoles(newRoles);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center border-b pb-4">
                <h1 className="text-2xl font-semibold">Roles List</h1>
                <div className="flex items-center">
                    <Link href="/add-role" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Add Role
                    </Link>
                    {showDeleteIcon && (
                        <button onClick={handleDeleteSelectedRoles} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zm-1.707 7.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414L11.414 12l1.293 1.293a1 1 0 01-1.414 1.414L10 13.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 12 7.293 10.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className="mt-4 flex justify-between items-center border-b pb-4">
                <input
                    type="text"
                    placeholder="Search roles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
                />
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                    Filter
                </button>
            </div>

            <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input type="checkbox" className="form-check-input" checked={selectAll} onChange={handleSelectAll} />
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredRoles.map((role, index) => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={selectedRoles.has(role.id)}
                                        onChange={(e) => handleSelectRole(role.id, e.target.checked)}
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {role.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {role.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <div className="relative inline-block text-left">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                            id={`menu-button-${index}`}
                                            aria-expanded="true"
                                            aria-haspopup="true"
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            Actions
                                            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        {dropdownOpen[index] && (
                                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby={`menu-button-${index}`}>
                                                <div className="py-1 bg-white" role="none">
                                                    <Link href={`/edit-role/${role.id}`} className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteRole(role.id)}
                                                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                        role="menuitem"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
