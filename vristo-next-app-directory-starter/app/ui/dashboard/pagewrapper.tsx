import classNames from "classnames";
import { ReactNode } from "react";

//  render the children inside the page wrapper 
export default function PageWrapper  ({children,toggleCollapse}:{children:ReactNode,toggleCollapse:boolean}) {
    const pageStyle = classNames("bg-slate-50 flex-grow text-block p-2 mt-20 ml-4",
    {
        ["sm:pl-[20rem]"]:!toggleCollapse,
        ["sm:pl-[5.6rem]"]:toggleCollapse,
    })
    return (
      <div className={pageStyle}>
        <h3>{children}</h3>
      </div>
    )
  }
  
  
  