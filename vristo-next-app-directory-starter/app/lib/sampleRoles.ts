// Defining a type for the roles
export type Role = {
    id: string;
    name: string;
    description: string;
}

// Array of sample roles
export const sampleRoles: Role[] = [
    {
        id: '1',
        name: 'Super Administrator',
        description: 'Has access to all system features and settings.',
    },
    {
        id: '2',
        name: 'Administrator',
        description: 'Can manage users, roles, and some system settings.',
    },
    {
        id: '3',
        name: 'Editor',
        description: 'Can create, edit, and publish content.',
    },
    {
        id: '4',
        name: 'User',
        description: 'Can view and interact with content.',
    },
    {
        id: '5',
        name: 'Guest',
        description: 'Has limited access to view content.',
    },
    // Add more roles as needed
];

export default sampleRoles;
