// defining a type for my products
export type Product = {
    id: string;
    code: string;
    name: string;
    productClass: string;
    category: string;
    packSize: string;
    unitOfMeasurement: string;
    productStrength: string;
    currency: string;
    quantity:string;
    unit_price:string;
    total:string;
}

// Array an of sample products
export const contractProducts: Product[] = [
    {
        id: '1',
        code: 'P001',
        name: '2- chlorotritanol , BP,',
        productClass: '600',
        category: 'DRUGS',
        packSize: '25mg',
        unitOfMeasurement: 'Each',
        productStrength: 'N/A',
        currency: 'USD',
        quantity: '6',
        unit_price: '67.99',
        total: '67.99',
    },
    {
        id: '2',
        code: 'P002',
        name: 'Cholestane',
        productClass: 'Class B',
        category: 'DRUGS',
        packSize: '1 liter',
        unitOfMeasurement: 'Pack',
        productStrength: 'N/A',
        currency: 'BWP',
        quantity: '7',
        unit_price: '788.99',
        total: '788.99',

    },
    {
        id: '3',
        code: 'P003',
        name: 'Chalkline MTS W/Powder +L/Leve',
        productClass: '600',
        category: 'LAB',
        packSize: '1 liter',
        unitOfMeasurement: 'Box',
        productStrength: 'N/A',
        currency: 'USD',
        quantity: '98',
        unit_price: '988.99',
        total: '988.99',
    },
    {
        id: '4',
        code: 'P005',
        name: 'Chemistry Control P',
        productClass: '900',
        category: 'DRUGS',
        packSize: '5L',
        unitOfMeasurement: 'Bottle',
        productStrength: 'N/A',
        currency: 'BWP',
        quantity: '99',
        unit_price: '986.99',
        total: '986.99',
        

    },
    {
        id: '5',
        code: 'CHL027',
        name: 'Child mask C/W nebuliser + tube',
        productClass: '200',
        category: 'MEMS',
        packSize: 'Each',
        unitOfMeasurement: 'Box',
        productStrength: 'High',
        currency: 'BWP',
        quantity: '87',
        unit_price: '788.99',
        total: '788.99',
    },
];

export default contractProducts;