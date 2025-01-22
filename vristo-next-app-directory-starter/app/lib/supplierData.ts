// defining a type for my products
export type Supplier = {
    id: string;
    code: string;
    name: string;
    supplierGroup: string;
    registrationDate: string;
    contactPerson: string;
    type: string;
    address: string;
    telephone: string;
    email: string;
    status: string;
}

// Array an of sample products
export const sampleSuppliers: Supplier[] = [
    {
        
            id: "1",
            code: "SUP001",
            name: "Belline Enterprises T/A Top Med Manufactures",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "International",
            address: "123 Main Street, City, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "2",
            code: "SUP002",
            name: "Bokaray (Pty) Ltd",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "456 Elm Street, Town, Country",
            telephone: "",
            email: "",
            status: "Disabled"
          },
          {
            id: "3",
            code: "SUP003",
            name: "Botoka Trading (Pty) Ltd T/A Botoka Pharmaceuticals",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "International",
            address: "789 Oak Street, Village, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "4",
            code: "SUP004",
            name: "Botswana Baylor Children's Clinical Centre of Excellence",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "123 Main Street, City, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "5",
            code: "SUP005",
            name: "Cashew Holdings (Pty) Ltd",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "456 Elm Street, Town, Country",
            telephone: "",
            email: "",
            status: "Disabled"
          },
          {
            id: "6",
            code: "SUP006",
            name: "Cospharm Investment (Pty) Ltd",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "International",
            address: "789 Oak Street, Village, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "7",
           code: "SUP007",
            name: "Delta Pharmaceuticals (Pty) Ltds",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "123 Main Street, City, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "8",
            code: "SUP008",
            name: "Educational Spectrum (Pty) Ltd",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "456 Elm Street, Town, Country",
            telephone: "",
            email: "",
            status: "Disabled"
          },
          {
            id: "9",
            code: "SUP009",
            name: "IDA FOUNDATION",
            type: "Local",
            address: "789 Oak Street, Village, Country",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "10",
            code: "SUP010",
            name: "FLORITEC  INVESTMENTS (PTY) LTD",
            supplierGroup: "-",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "Local",
            address: "123 Main Street, City, Country",
            telephone: "",
            email: "",
            status: "Active"
          },
          {
            id: "11",
            code: "SUP011",
            name: "JP Imports &Exports Pvt. Ltd",
            supplierGroup: "",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "International",
            address: "456 Elm Street, Town, Country",
            telephone: "",
            email: "",
            status: "Disabled"
          },
          {
            id: "12",
            code: "SUP012",
            name: "Kalahari Medical Distributors (Pty) Ltd",
            supplierGroup: "-",
            registrationDate: "12/Dec/2021",
            contactPerson: "Test User",
            type: "International",
            address: "789 Oak Street, Village, Country",
            telephone: "",
            email: "",
            status: "Active"
          }

];

export default sampleSuppliers;