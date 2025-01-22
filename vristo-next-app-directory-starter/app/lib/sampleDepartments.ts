// Defining a type for the departments
export type Department = {
    id: string;
    name: string;
    description: string;
}

// Array of sample departments
export const sampleDepartments: Department[] = [
    {
        id: '1',
        name: 'Contract Management Unit',
        description: 'Responsible for managing contracts and agreements.',
    },
    {
        id: '2',
        name: 'Procurement Unit',
        description: 'Handles the procurement of goods and services.',
    },
    {
        id: '3',
        name: 'Quality Assurance Unit',
        description: 'Ensures quality standards are met in all processes.',
    },
    {
        id: '4',
        name: 'IT Support Unit',
        description: 'Provides technical support and maintains IT infrastructure.',
    },
    {
        id: '5',
        name: 'Logistics Management Unit',
        description: 'Manages logistics and supply chain operations.',
    },
    // Add more departments as needed
];

export default sampleDepartments;
