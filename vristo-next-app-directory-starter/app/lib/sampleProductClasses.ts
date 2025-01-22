// Sample data for product classes
export const sampleProductClasses = [
    { 
        id: '1', 
        code: '10', 
        description: 'MEMS Items' 
    },
    { 
        id: '2',
        code: '100',
        description: 'Lab Reagents and consumable items' 
    },
    { 
        id: '3', 
        code: '200', 
        description: 'Miscellaneous Drugs' 
    },
    { 
        id: '4', 
        code: '300', 
        description: 'Tablets and Capsules' 
    },
    { 
        id: '5',
        code: '400', 
        description: 'Parenteral preparations' 
    },
    { 
        id: '6',
        code: '200', 
        description: 'Miscellaneous Drugs' 
    },
    { 
        id: '7',
        code: '500', 
        description: 'Vaccines and Immunoglobulins' 
    },
    { 
        id: '8',
        code: '600', 
        description: 'Reserved specialist drugs' 
    },
    { 
        id: '9',
        code: '700', 
        description: 'Sexual reproductive health products' 
    },
    { 
        id: '10',
        code: '800', 
        description: 'Dressings, Surgical and Sutures' 
    },
    { 
        id: '11',
        code: '900', 
        description: 'Reserved Specialist Dressings and surgical and Sutures' 
    },
  ];
  
  export type ProductClass = {
    id: string;
    code: string;
    description: string;
  };
  