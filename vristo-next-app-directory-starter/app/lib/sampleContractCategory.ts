// defining a type for my products
export type Product = {
    id: string;
    
    referenceNumber: string;
    productDescription: string;
}

// Array an of sample products
export const sampleIncoterms: Product[] = [
    {
        id: '1',
        referenceNumber: 'C001',
      
        productDescription: 'The seller makes the goods available at their premises. The buyer is responsible for all transportation costs, export clearance, and loading onto the transport vehicle. This term places the maximum responsibility on the buyer and minimum responsibility on the seller.',
        
    },
    {
        id: '2',
        referenceNumber: 'C002',
      
        productDescription: 'The seller is responsible for delivering the goods to the named port of shipment and loading them onto the vessel. Once the goods are on board the vessel, the risk and responsibility transfer to the buyer, who is responsible for all subsequent transportation costs and risks.',
        
    },
    {
        id: '3',
        referenceNumber: 'C003',
      
        productDescription: 'The seller is responsible for delivering the goods to the named port of destination and paying for the cost of transportation and insurance up to that point. However, the risk of loss or damage to the goods transfers to the buyer once the goods are on board the vessel.',
        
    },
    
    
   
  
];

export default sampleIncoterms;