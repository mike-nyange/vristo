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
}

// Array an of sample products
export const sampleProducts: Product[] = [
    {
        id: '1',
        code: 'P001',
        name: '2- chlorotritanol , BP,',
        productClass: '600',
        category: 'DRUGS',
        packSize: '25mg',
        unitOfMeasurement: 'Each',
        productStrength: 'N/A',
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
    },
    {
        id: '6',
        code: 'P006',
        name: 'Chloral hydrate Powder 500g',
        productClass: '500',
        category: 'DRUGS',
        packSize: '10g',
        unitOfMeasurement: 'Each',
        productStrength: 'N/A',
    },
    {
        id: '7',
        code: 'CHL027',
        name: 'Chlorpheniramine 4mg tablets 1000',
        productClass: '600',
        category: 'DRUGS',
        packSize: '35mg',
        unitOfMeasurement: 'Pack',
        productStrength: 'N/A',
    },
    {
        id: '8',
        code: 'CH016',
        name: 'Chlorhexidine gluconate 0.5% with 70% alchohol, 5L',
        productClass: '800',
        category: 'Lab',
        packSize: '5L',
        unitOfMeasurement: 'Ampoules',
        productStrength: 'N/A',
    },
    {
        id: '9',
        code: 'CH016',
        name: 'Ciloxan Eye Drops',
        productClass: '900',
        category: 'DRUGS',
        packSize: '5g',
        unitOfMeasurement: 'Pack',
        productStrength: 'N/A',
    },
    {
        id: '10',
        code: 'P0010',
        name: 'Cisatracurium 2mg/ml Injection 2.5ml Ampoules',
        productClass: '200',
        category: 'DRUGS',
        packSize: '2.5ml',
        unitOfMeasurement: 'Bottle',
        productStrength: 'N/A',
    },
    {
        id: '10',
        code: 'P009',
        name: '	Cistern machine side valve',
        productClass: '500',
        category: 'NON-DRUGS',
        packSize: '500g',
        unitOfMeasurement: 'Pack',
        productStrength: 'N/A',
    },
    {
        id: '11',
        code: 'CIL001',
        name: 'Cistren machine bottom valve/low level',
        productClass: '200',
        category: 'NON-DRUGS',
        packSize: 'Pack',
        unitOfMeasurement: 'Pack',
        productStrength: 'N/A',
    },
];

export default sampleProducts;