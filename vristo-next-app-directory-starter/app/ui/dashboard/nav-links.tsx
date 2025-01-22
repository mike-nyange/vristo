'use client'

import { HomeIcon, CogIcon,
    BanknotesIcon, DocumentDuplicateIcon,UserGroupIcon,
    DocumentTextIcon,ShoppingBagIcon, ShoppingCartIcon, BellAlertIcon, ArrowPathIcon, ChevronRightIcon, ArrowRightCircleIcon, Squares2X2Icon, UsersIcon, BookmarkIcon, FolderOpenIcon, ServerStackIcon, NewspaperIcon, SwatchIcon, PowerIcon, QrCodeIcon, WrenchScrewdriverIcon, CalculatorIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import {SideNavItem} from "../../lib/definitions"
import { useState } from "react";
import { BookmarkSquareIcon } from "@heroicons/react/20/solid";
import ProductRegisterPage from "../../home/products/AllProducts/page";
import CreateProductPage from "../../home/products/create-product/page";
import ProductCategoryPage from "../../home/products/product-categories/page";
import ProductClassPage from "../../home/products/product-classes/page";
import ProductUnitOfPage from "../../home/products/product-UnitOfIssue/page";
const iconStyle = "text-black-500 w-5 h-5";

// Map of links to display in the side navigation.
// Depending on the size of the application, this can be stored in a database.
export const SIDENAV_ITEMS:SideNavItem[]=[
    {title: 'Home', path:'/home', icon:<HomeIcon className={iconStyle}  />,},
    {title: 'Task Tray', path:'/home/task_tray', icon:<ArrowPathIcon className={iconStyle} />,},
    {title: 'Notifications', path: '/home/notifications', icon:<BellAlertIcon className={iconStyle}/>,},
    {title: 'Contracts', path: '/home/contracts', icon:<BookmarkSquareIcon className={iconStyle} />,
    
        subMenuItems:[
            {title:"Contract Drafting",path:"/home/contracts/contract_drafting"},
            {title:"Contract Register",path:"/home/contracts/contract_register"}
        ],
},
{title: 'Contract Tamplates', path: '/home/contract_template', icon:<CalculatorIcon className={iconStyle} />,
    
        subMenuItems:[
            // {title:"Tamplates Register",path:"/home/contract_template"},
            {title:"Contract Clauses",path:"/home/contract_template/contract_clause"}
        ],
},
    
    {title: 'Suppliers', path:'/home/suppliers', icon:<UsersIcon className={iconStyle} />,
    subMenuItems:[
        {title:"Supplier Register",path:"/supplier-register"},
        {title:"Create Suppliers",path:"/create-supplier"},
        {title:"Supplier Review",path:"/supplier-review"},
    ],
},
    {title: 'Products', path:'/home/products', icon:<FolderOpenIcon className={iconStyle}/>,
    subMenuItems:[
        {title:"Products",path:"/home/products/AllProducts"},
        {title:"Create Product",path:"/home/products/create-product"},
        
    ],
},
    {title: 'LOC', path:'/home/loc', icon:<Squares2X2Icon className={iconStyle} />,
    subMenuItems:[
                    {title:"TBA",path:"/home/loc"},
                    {title:"TBA",path:"/home/loc"}
                ],
},
    {title: 'Deliveries', path:'/home/deliveries', icon:<ServerStackIcon className={iconStyle} />,
    subMenuItems:[
        {title:"TBA",path:"/home/deliveries"},
        {title:"TBA",path:"/home/deliveries"}
    ],
},
    {title: 'Services', path:'/home/services', icon:<SwatchIcon className={iconStyle}/>,
    subMenuItems:[
        {title:"TBA",path:"/home/services"},
        {title:"TBA",path:"/home/services"}
    ],
},
    {title: 'Reports', path:'/home/reports', icon:<QrCodeIcon className={iconStyle}/>,
    subMenuItems:[
        {title:"TBA",path:"/home/reports"},
        {title:"TBA",path:"/home/reports"}
    ],
},

{title: 'Products Configurations', path:'/home/products', icon:<CogIcon className={iconStyle}/>,
    subMenuItems:[
        
        {title:"Product Categories",path:"/home/products/product-categories"},
        {title:"Product Classes",path:"/home/products/product-classes"},
        {title:"Unit of Issue",path:"/home/products/product-UnitOfIssue"},
    ],
},
{title: 'Contract Configurations', path:'/home/contract_configurations', icon:<WrenchScrewdriverIcon className={iconStyle}/>,
    subMenuItems:[
        {title:"Incoterms",path:"/home/contract_configurations/incoterms"},
        {title:"Contract Category",path:"/home/contract_configurations/contract_category"},
        {title:"Contract Type",path:"/home/contract_configurations/contract_type"},
        
    ],
},
{title: 'User Management', path:'/home/user-management', icon:<PowerIcon className={iconStyle}/>,
    subMenuItems:[
        
        {title:"Users",path:"/home/user-management/view-users"},
        {title:"Roles",path:"/home/user-management/view-roles"},
        {title:"Departments",path:"/home/user-management/view-departments"},
        {title:"Permissions",path:"/home/user-management/view-permissions"},
        
    ],
},
];


export const SideBarMenuItem = ({item,toggleCollapse}:{item:SideNavItem,toggleCollapse:boolean})=>{
    const linkStyle ="rounded-md flex items-center min-h-[40px] h-full text-[#000000] py-2 px-4 hover:text-white transition duration-200";
    const ddLinkStyle = linkStyle;
    const activeLinkStyle = "rounded-md text-white light:text-black light:bg-[#000000] bg-[#000000]"
    const navMenuDropdownItem = "text-[#000000] py-2 px-4 hover:text-black transition duration-200";
    const pathName = usePathname()
    
    const [subMenuOpen,setSubMenuOpen]= useState(false);
    const toggleSubMenu =()=>{
        setSubMenuOpen(!subMenuOpen);
    }
    return (<>
    {item.subMenuItems?(<div className="rounded-md min-w-[18px]">
        <a className={`${ddLinkStyle} ${pathName.includes(item.path)?activeLinkStyle:""}`} onClick={toggleSubMenu}>
        {item.icon}    
                {!toggleCollapse &&
                <>
                <span className="ml-3 text-base font-semibold leading-6 ">{item.title}</span>
                <ChevronRightIcon className={`${subMenuOpen ?'rotate-90':''} ml-auto stroke-2 text-xs text-black-500 w-5 h-5`} />
                </>}
          
        </a>
        {subMenuOpen && !toggleCollapse &&<div className="bg-[#0099cc] border-1-4">
            <div className="grid gap-y-2 px-10 py-3 leading-5">
            {item.subMenuItems.map((subItem,index)=>{
                        return (
                            <Link key={index} href={subItem.path} className={`${navMenuDropdownItem} ${subItem.path === pathName?"text-white":""}`}>
                               <div className="flex items-center space-x-2">
                               <ArrowRightCircleIcon className={iconStyle}/>
                                <span>{subItem.title}</span>
                               </div>
                                
                            </Link>
                        )
                    })}
            </div>
        </div>}
    </div>)
    :(<Link className={`${linkStyle} ${item.path === pathName ? activeLinkStyle:""}`} href={item.path}>
        {item.icon}
        {!toggleCollapse &&<span className="ml-3 leading-6 font-semibold">{item.title}</span>}
        
        </Link>)}
    </>)
}
// export default function NavLinks(){
//     const pathname = usePathname();

//     return (
//         <>
//             {links.map((link) => {
//                 const LinkIcon = link.icon;
//                 return (
//                 <Link
//                     key={link.name}
//                     href={link.href}
//                     className=
//                     {
//                         clsx ("flex h-[36px] grow items-center justify-center gap-1 bg-blue-600 p-1 text-sm text-white font-medium hover:bg-black-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3 border-b border-blue-300", 
//                         {
//                             'text-white bg-gray-950': pathname === link.href,
//                         },)
//                     }
//                 >
//                     <LinkIcon className="w-6" />
//                     <p className="hidden md:block">{link.name}</p>
//                 </Link>
//                 );
//             })}
//         </>
//     );

// };