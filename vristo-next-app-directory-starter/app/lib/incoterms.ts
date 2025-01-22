const incoTerms = [
    {
        id: '1',
        IncotermName: "EXW (Ex Works)",
        IncotermDescription: "The seller makes the goods available at their premises. The buyer is responsible for all transportation costs, export clearance, and loading onto the transport vehicle. This term places the maximum responsibility on the buyer and minimum responsibility on the seller.",
    },
    {
        id: '2',
        IncotermName: "FOB (Free on Board)",
        IncotermDescription: "The seller is responsible for delivering the goods to the named port of shipment and loading them onto the vessel. Once the goods are on board the vessel, the risk and responsibility transfer to the buyer, who is responsible for all subsequent transportation costs and risks.",
    },
    {
        id: '3',
        IncotermName: "CIF (Cost, Insurance, and Freight)",
        IncotermDescription: "The seller is responsible for delivering the goods to the named port of destination and paying for the cost of transportation and insurance up to that point. However, the risk of loss or damage to the goods transfers to the buyer once the goods are on board the vessel.",
    },
    {
        id: '4',
        IncotermName: "DDP (Delivered Duty Paid)",
        IncotermDescription: "The seller is responsible for delivering the goods to the named place of destination and paying for all costs, including transportation, insurance, and duties, until the goods are delivered to the buyer's premises. This term places maximum responsibility on the seller.",
    },
    {
        id: '5',
        IncotermName: "CPT (Carriage Paid To)",
        IncotermDescription: "The seller is responsible for delivering the goods to the carrier nominated by them at an agreed-upon place. The seller bears the risks and costs associated with transporting the goods to the named destination, but the risk transfers to the buyer once the goods are handed over to the carrier.",
    },
  ];

  export { incoTerms};