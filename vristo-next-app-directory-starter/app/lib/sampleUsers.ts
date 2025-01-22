// Defining a type for the users
export type User = {
    id: string;
    username: string;
    phoneNumber: string;
    role: string;
    department: string;
}

// Array of sample users
export const sampleUsers: User[] = [
    {
        id: '1',
        username: 'John Doe',
        phoneNumber: '+1234567890',
        role: 'Administrator',
        department: 'IT',
    },
    {
        id: '2',
        username: 'Jane Smith',
        phoneNumber: '+0987654321',
        role: 'Manager',
        department: 'HR',
    },
    {
        id: '3',
        username: 'Alice Johnson',
        phoneNumber: '+1122334455',
        role: 'Employee',
        department: 'Finance',
    },
    {
        id: '4',
        username: 'Bob Brown',
        phoneNumber: '+5566778899',
        role: 'Supervisor',
        department: 'Sales',
    },
    {
        id: '5',
        username: 'Charlie Green',
        phoneNumber: '+6677889900',
        role: 'Consultant',
        department: 'Marketing',
    },
    // Add more users as needed
];

export default sampleUsers;
