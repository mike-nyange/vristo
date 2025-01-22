import React from 'react';
import { HomeIcon } from '@heroicons/react/24/outline';

interface Breadcrumb {
    text: string;
    active: boolean;
    link?: string; // optional link
}

interface Props {
    breadcrumbs: Breadcrumb[];
}

// interface BreadCrumbProps {
//     title: string;
//     pageTitle : string;
// }

const Breadcrumb: React.FC<Props> = ({ breadcrumbs }) => {
    return (
        <div className="mb-5">
            <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
                {/* <li>
                    <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        <HomeIcon className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                </li> */}
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className={index > 0 ? "before:px-1.5 before:content-['/']" : ""}>
                        {breadcrumb.link ? (
                            <a href={breadcrumb.link} className={breadcrumb.active ? "text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70" : ""}>
                                {breadcrumb.text}
                            </a>
                        ) : (
                            <span className={breadcrumb.active ? "text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70" : ""}>
                                {breadcrumb.text}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Breadcrumb;

// const BreadCrumb = ({ title, pageTitle } : BreadCrumbProps) => {
//     return (
//         <React.Fragment>
//             <Row>
//                 <Col xs={12}>
//                     <div className="page-title-box d-sm-flex align-items-center justify-content-between">
//                         <h4 className="mb-sm-0">{title}</h4>

//                         <div className="page-title-right">
//                             <ol className="breadcrumb m-0">
//                                 <li className="breadcrumb-item"><Link to="#">{pageTitle}</Link></li>
//                                 <li className="breadcrumb-item active">{title}</li>
//                             </ol>
//                         </div>

//                     </div>
//                 </Col>
//             </Row>
//         </React.Fragment>
//     );
// };

// export default BreadCrumb;