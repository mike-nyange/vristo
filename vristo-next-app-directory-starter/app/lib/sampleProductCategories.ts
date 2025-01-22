// Sample data for product classes
export const sampleProductCategories = [
    { 
        id: '1', 
        name: 'MEMS', 
        description: 'MEMS' 
    },
    { 
        id: '2',
        name: 'LAB',
        description: 'Lab' 
    },
    { 
        id: '3', 
        name: 'DRUGS', 
        description: 'DRUGS' 
    },
    { 
        id: '4', 
        name: 'DRUGS', 
        description: 'DRUGS' 
    },
    { 
        id: '5',
        name: 'NON-DRUGS', 
        description: 'NON-DRUGS' 
    },
  ];
  
  export type ProductCategory = {
    id: string;
    name: any;
    description: string;
  };