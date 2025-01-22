// Defining a type for the permissions
export type Permission = {
    id: string;
    name: string;
    method: 'create' | 'read' | 'update' | 'delete';
    allow: boolean;
    deny: boolean;
}

// Array of sample permissions
export const samplePermissions: Permission[] = [
    {
        id: '1',
        name: 'User Management',
        method: 'create',
        allow: true,
        deny: true,
    },
    {
        id: '2',
        name: 'User Group Management',
        method: 'read',
        allow: true,
        deny: true,
    },
    {
        id: '3',
        name: 'Role Management',
        method: 'update',
        allow: true,
        deny: true,
    },
    {
        id: '4',
        name: 'Contract Drafting',
        method: 'delete',
        allow: true,
        deny: true,
    },
    {
        id: '5',
        name: 'Template Management',
        method: 'create',
        allow: true,
        deny: true,
    },
    {
        id: '6',
        name: 'System Settings',
        method: 'read',
        allow: true,
        deny: true,
    },
    {
        id: '7',
        name: 'Reports',
        method: 'update',
        allow: true,
        deny: true,
    },
    {
        id: '8',
        name: 'Audit Trailing',
        method: 'delete',
        allow: true,
        deny: true,
    },
    // Add more permissions as needed
];

export default samplePermissions;
