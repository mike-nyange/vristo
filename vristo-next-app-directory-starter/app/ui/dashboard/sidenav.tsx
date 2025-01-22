"use client";
//import Image from "/eCSRMLogo.png";
import { SIDENAV_ITEMS } from "./nav-links";
import Image from "next/image";
import { SideBarMenuItem } from "./nav-links";
import classNames from "classnames";
import { SideNavItem } from "../../lib/definitions";
export default function Sidebar  ({toggleCollapse}:{toggleCollapse:boolean}) {
    const asideStyle = classNames("overflow-y-auto  overflow-y-auto fixed bg-[#0099cc] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out",
    {
        ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]:toggleCollapse,
        ["w-[20rem]"]:!toggleCollapse,
    }
    )
  return (
   <aside className={asideStyle}>
    <div className="bg-white  flex  items-center py-0.5 px-0.5 ">
    <Image
            width={75}
            height={30}
            src={"/botswana_logo.png"}
            alt="Logo"
            priority
           
          />
          {/* <p className="text-2xl font-bold">e-CSRM</p> */}

        {/* <Image alt="" src="/eCSRMLogo.png" 
        className="w-12 mx-3.5 min-h-fit" 
        width={35} 
        height={35}></Image> */}
        {!toggleCollapse &&<h3 className="pl-2 font-bold text-3xl text-[#000000] min-w-max">e-CSRM</h3>}
        </div>
        <nav className="my-5 flex flex-col gap-2 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-2 px-4 transition duration-300 ease-in-out">
             {
                SIDENAV_ITEMS.map((item,index)=>{
                    return <SideBarMenuItem key={index} item ={item} toggleCollapse={toggleCollapse}></SideBarMenuItem>
                })
             }
             </div>
        </nav>
   </aside>
  )
}





// 'use client';
// import NavLinks from "./nav-links";
// import Link from "next/link";
// import BCMSLogo from "@/app/bcms-logo";
// import { ArrowsRightLeftIcon, BanknotesIcon, BellAlertIcon, ChevronDownIcon, ChevronRightIcon, DocumentDuplicateIcon, HomeIcon, PowerIcon, ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline";

// export default function SideNav(){
//     return (
//         <div className="flex h-full flex-col px-0 py-0 md:px-0">
//             <Link
//                 className="mb-0 flex h-20 items-end justify-start bg-blue-600 p-4 md:h-20"
//                 href="/"
//             >
//                 <div className="w-32 text-white md:w-40">
//                     <BCMSLogo />
//                 </div>
//             </Link>
//             <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1 bg-blue-600 border-t border-black-700">
//                 <NavLinks />
//                 <div className="hidden h-auto w-full grow rounded-none bg-blue-600 md:block border-b border-black-700"></div>
//                 {/* {<form action={async () => {
//                     'use server';
//                     //await signOut();
//                 }}>
//                 <button className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-blue-600 text-white p-3 text-sm font-medium hover:bg-black-600 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3">
//                     <PowerIcon className="w-6" />
//                     <div className="hidden md:block">Sign Out</div>
//                 </button>
//             </form>} */}
//             </div>
//         </div>
//     );

// };



// import React, { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import SidebarLinkGroup from "./SidebarLinkGroup";

// interface SidebarProps {
//   sidebarOpen: boolean;
//   setSidebarOpen: (arg: boolean) => void;
// }

// const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
//   const pathname = usePathname();

//   const trigger = useRef<any>(null);
//   const sidebar = useRef<any>(null);

//   let storedSidebarExpanded = "true";

//   const [sidebarExpanded, setSidebarExpanded] = useState(
//     storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
//   );

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = ({ target }: MouseEvent) => {
//       if (!sidebar.current || !trigger.current) return;
//       if (
//         !sidebarOpen ||
//         sidebar.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   });

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = ({ key }: KeyboardEvent) => {
//       if (!sidebarOpen || key !== "Escape") return;
//       setSidebarOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   });

//   useEffect(() => {
//     localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
//     if (sidebarExpanded) {
//       document.querySelector("body")?.classList.add("sidebar-expanded");
//     } else {
//       document.querySelector("body")?.classList.remove("sidebar-expanded");
//     }
//   }, [sidebarExpanded]);

//   return (
//     <aside
//       ref={sidebar}
//       className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col  overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
//         sidebarOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       {/* <!-- SIDEBAR HEADER --> */}
//       <div className=" flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        
//           <Image
//             width={100}
//             height={35}
//             src={"/botswana_logo-removebg-preview.png"}
//             alt="Logo"
//             priority
//           />
//           <p className="text-2xl font-bold">e-CSRM</p>
//         {/* <button
//           ref={trigger}
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           aria-controls="sidebar"
//           aria-expanded={sidebarOpen}
//           className="block lg:hidden"
//         >
//           <svg
//             className="fill-current"
//             width="20"
//             height="18"
//             viewBox="0 0 20 18"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
//               fill=""
//             />
//           </svg>
//         </button> */}
//       </div>
//       {/* <!-- SIDEBAR HEADER --> */}

//       <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear bg-[#0099cc]">
//         {/* <!-- Sidebar Menu --> */}
//         <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
//           {/* <!-- Menu Group --> */}
//           <div>
//             <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
//               MENU
//             </h3>

//             <ul className="mb-6 flex flex-col gap-1.5">
              

//               {/* <!-- Menu Item Dashboard --> */}
//               <li>
//                 <Link
//                   href="/home"
//                   className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                     pathname.includes("home") &&
//                     "bg-graydark dark:bg-meta-4"
//                   }`}
//                 >
//                     {/* add icon */}
//                     <HomeIcon className="w-5 h-5" />
//                   Dashboard
//                 </Link>
//               </li>
//               {/* <!-- Menu Item Dashboard --> */}
//               {/* <!-- Menu Item Task Tray --> */}
//               <li>
//                 <Link
//                   href="home/taskTray"
//                   className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                     pathname.includes("home/taskTray") &&
//                     "bg-graydark dark:bg-meta-4"
//                   }`}
//                 >
//                     {/* add icon */}
//                     <ArrowsRightLeftIcon className="w-5 h-5" />
//                   Task Tray
//                 </Link>
//               </li>
//               {/* <!-- Menu Item Task Tray --> */}

//               {/* <!-- Menu Item Notifications --> */}
//               <li>
//                 <Link
//                   href="/home"
//                   className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                     pathname.includes("home") &&
//                     "bg-graydark dark:bg-meta-4"
//                   }`}
//                 >
//                     {/* add icon */}
//                     <BellAlertIcon className="w-5 h-5" />
//                   Notifications
//                 </Link>
//               </li>
//               {/* <!-- Menu Item Notifications --> */}



//               {/* <!-- Menu Item Contracts --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/contracts" || pathname.includes("home/contracts")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/contracts" ||
//                             pathname.includes("home/contracts")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <DocumentDuplicateIcon className="w-5 h-5" />
//                         Contracts
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/contracts/contract-drafting"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/forms/form-elements" &&
//                                 "text-white"
//                               }`}
//                             >
//                               Contract Drafting
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/contracts/contract-register"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/forms/form-layout" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Contract Register
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Contracts --> */}

//               {/* <!-- Menu Item LOC --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/loc" || pathname.includes("home/loc")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/loc" ||
//                             pathname.includes("home/loc")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <BanknotesIcon className="w-5 h-5" />
//                         LOC
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/loc"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/loc" &&
//                                 "text-white"
//                               }`}
//                             >
//                               TBA
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/loc"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/loc" &&
//                                 "text-white"
//                               } `}
//                             >
//                              TBA
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item LOC --> */}


//                {/* <!-- Menu Item Suppliers --> */}
//                <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/suppliers" || pathname.includes("home/suppliers")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/suppliers" ||
//                             pathname.includes("home/loc")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <UserGroupIcon className="w-5 h-5" />
//                         Suppliers
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/suppliers/supplier-register"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/suppliers/supplier-register" &&
//                                 "text-white"
//                               }`}
//                             >
//                               Supplier Register
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/suppliers/supplier-register"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/suppliers/supplier-register" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Create Suppliers
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/suppliers/supplier-review"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/suppliers/supplier-review" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Supplier Review
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Suppliers --> */}

//               {/* <!-- Menu Item Deliveries --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/deliveries" || pathname.includes("/home/deliveries")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/deliveries" ||
//                             pathname.includes("/home/deliveries")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <ShoppingBagIcon className="w-5 h-5" />
//                     Deliveries
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/deliveries"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/deliveries" &&
//                                 "text-white"
//                               }`}
//                             >
//                               TBA
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/deliveries"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/deliveries" &&
//                                 "text-white"
//                               } `}
//                             >
//                              TBA
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Deliveries --> */}

//               {/* <!-- Menu Item Producst --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/products" || pathname.includes("/home/products")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/products" ||
//                             pathname.includes("/home/products")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <UserGroupIcon className="w-5 h-5" />
//                         Products
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/products/products-clause"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/products/products-clause" &&
//                                 "text-white"
//                               }`}
//                             >
//                               Product Clause
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/products/products-category"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/products/supplier-category" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Product Category
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/products/units-of-issue"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/products/units-of-issue" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Units of Issue
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Producst --> */}

//               {/* <!-- Menu Item Services --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/services" || pathname.includes("home/services")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/services" ||
//                             pathname.includes("home/services")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <BanknotesIcon className="w-5 h-5" />
//                         Services
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/services"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/services" &&
//                                 "text-white"
//                               }`}
//                             >
//                               TBA
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/services"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/services" &&
//                                 "text-white"
//                               } `}
//                             >
//                              TBA
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Services --> */}

//               {/* <!-- Menu Item Reports --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/reports" || pathname.includes("home/reports")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/reports" ||
//                             pathname.includes("home/reports")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <BanknotesIcon className="w-5 h-5" />
//                         Reports
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/reports"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/reports" &&
//                                 "text-white"
//                               }`}
//                             >
//                               TBA
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/reports"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/reports" &&
//                                 "text-white"
//                               } `}
//                             >
//                              TBA
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item Reports --> */}
//               <h5 className="text-sm mt-10 font-bold ">USER MANAGEMENT</h5>

//               {/* <!-- Menu Item User Management --> */}
//               <SidebarLinkGroup
//                 activeCondition={
//                   pathname === "/home/user-management" || pathname.includes("home/user-management")
//                 }
//               >
//                 {(handleClick, open) => {
//                   return (
//                     <React.Fragment>
//                       <Link
//                         href="#"
//                         className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
//                           (pathname === "/home/user-management" ||
//                             pathname.includes("home/user-management")) &&
//                           "bg-graydark dark:bg-meta-4"
//                         }`}
//                         onClick={(e) => {
//                           e.preventDefault();
//                           sidebarExpanded
//                             ? handleClick()
//                             : setSidebarExpanded(true);
//                         }}
//                       >
//                         {/* add icon */}
//                     <PowerIcon className="w-5 h-5" />
//                     <p className="mr-10">User Management</p>
                        
//                         <ChevronRightIcon
//                             className={`absolute right-4 top-1/2 -translate-y-1/2 ${
//                                 open && "rotate-90"
//                             }`}
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             />
                        
//                       </Link>
//                       {/* <!-- Dropdown Menu Start --> */}
//                       <div
//                         className={`translate transform overflow-hidden ${
//                           !open && "hidden"
//                         }`}
//                       >
//                         <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
//                           <li>
//                             <Link
//                               href="/home/user-management"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/user-management" &&
//                                 "text-white"
//                               }`}
//                             >
//                               Users
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/user-management"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/user-management" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Roles
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/user-management"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/user-management" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Departments
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               href="/home/user-management"
//                               className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
//                                 pathname === "/home/user-management" &&
//                                 "text-white"
//                               } `}
//                             >
//                              Permissions
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                       {/* <!-- Dropdown Menu End --> */}
//                     </React.Fragment>
//                   );
//                 }}
//               </SidebarLinkGroup>
//               {/* <!-- Menu Item User Management --> */}

//             </ul>
//           </div>
//         </nav>
//         {/* <!-- Sidebar Menu --> */}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
