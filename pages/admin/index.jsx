import { useQuery } from '@apollo/client'
import { GET_USER_ACCOUNT, GET_USER } from '../../src/gpl/queryUser'

import React, { useEffect, useState } from 'react'
import { CreateCourse } from '../../components/Dashboard'
import { DashboardLayout } from '../../components/Layouts'
import { useRouter } from 'next/router'
import { MainFrame } from '../../components/admin'



const index = () => {
    const router = useRouter();
    let userAccount;

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('uCuenta') === null) {
            router.push('/')
        } else {
            userAccount = localStorage.getItem('uCuenta').toString();
        }
    }

    const {data, loading, error} = useQuery(GET_USER_ACCOUNT, {
        variables: {
            noAccount: userAccount
        }
    }); 

    if (error) return <p>Error :(</p>
    if (loading) return <p>Loading...</p>


    if (data.getUserAccount === null) {
        router.push('/')
    }


    const { role } = data.getUserAccount;
    
    console.log(role.name)

    if(role.name === 'ADMIN'){
        return (
            <DashboardLayout title='Panel administrador' user={data.getUserAccount} type={role.name}>
                
                <CreateCourse />

                <MainFrame/>

            </DashboardLayout>
        )
    } else {
        router.push('/')
    }
}

export default index