// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// However, these types are generated automatically if you're using an ORM such as Prisma. - but we are not!
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Supplier = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Photo = {
  albumId: string,
  id: string,
  title: string,
  url: string,
  thumbnailUrl: string
};

export type SuppliesTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedSuppliesTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type SupplierField = {
  id: string;
  name: string;
};

export type ContractTypeField = {
  id: string;
  name: string;
};

export type ProductField = {
  id: string;
  name: string;
};

export type CurrencyField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  supplier_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type SideNavItem = {
  title:string;
  path:string;

  icon?:JSX.Element;
  submenu?:boolean;
  subMenuItems?:SideNavItem[];
}
