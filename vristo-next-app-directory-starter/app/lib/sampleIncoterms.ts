// defining a type for my products
export type Product = {
    id: string;
    
    name: string;
    productDescription: string;
}

// Array an of sample products
export const sampleIncoterms: Product[] = [
    {
        id: '1',
        name: 'EXW (Ex Works)',
      
        productDescription: 'The seller makes the goods available at their premises. The buyer is responsible for all transportation costs, export clearance, and loading onto the transport vehicle. This term places the maximum responsibility on the buyer and minimum responsibility on the seller.',
        
    },
    {
        id: '2',
        name: 'FOB (Free on Board)',
      
        productDescription: 'The seller is responsible for delivering the goods to the named port of shipment and loading them onto the vessel. Once the goods are on board the vessel, the risk and responsibility transfer to the buyer, who is responsible for all subsequent transportation costs and risks.',
        
    },
    {
        id: '3',
        name: 'CIF (Cost, Insurance, and Freight)',
      
        productDescription: 'The seller is responsible for delivering the goods to the named port of destination and paying for the cost of transportation and insurance up to that point. However, the risk of loss or damage to the goods transfers to the buyer once the goods are on board the vessel.',
        
    },
    {
        id: '4',
        name: 'DDP (Delivered Duty Paid)',
      
        productDescription: "The seller is responsible for delivering the goods to the named place of destination and paying for all costs, including transportation, insurance, and duties, until the goods are delivered to the buyer's premises. This term places maximum responsibility on the seller.",
        
    },
    {
        id: '5',
        name: 'CPT (Carriage Paid To)',
      
        productDescription: 'The seller is responsible for delivering the goods to the carrier nominated by them at an agreed-upon place. The seller bears the risks and costs associated with transporting the goods to the named destination, but the risk transfers to the buyer once the goods are handed over to the carrier.',
        
    },
    
   
  
];

export default sampleIncoterms;