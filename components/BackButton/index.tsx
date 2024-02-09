import React from 'react';
import Link from "next/link";

type BackButtonProps = {
    title: string;
    href: string
}

 export const BackButton: React.FC<BackButtonProps> = ({title, href}) => {
     return (
             <Link href={href}>
                 <div className='d-flex  mb-30 cup'>
                     <svg className='mr-10'  width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                         <path
                             d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                             stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                     <h3>{title}</h3>
                 </div>
             </Link>

     );
 };