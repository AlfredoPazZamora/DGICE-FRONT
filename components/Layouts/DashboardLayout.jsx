import React from 'react'
import Head from "next/head";
import Link from 'next/link';
import { NavbarDashboard } from '../Global';

export const DashboardLayout = ({children, title, user:{fullName, email, profileImg}}) => {
    return (
        <>
            <Head>
                <title>{title || "DGICE Academy"}</title>
            </Head>

            <div className='flex box-border '>
                <NavbarDashboard username={fullName} image={profileImg}/>
                <main className='p-5 lg:p-10 w-full '>
                    {children}
                </main>
            </div>




        </>
    )
}
