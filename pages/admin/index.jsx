import { useQuery } from '@apollo/client'
import { GET_USER_ACCOUNT, GET_USER } from '../../src/gpl/queryUser'

import React, { useEffect, useState } from 'react'
import { CreateCourse } from '../../components/Dashboard'
import { DashboardLayout } from '../../components/Layouts'



const index = () => {

    let userAccount;

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('uCuenta') === null) {
            window.location.href = '/'
        } else {
            userAccount = localStorage.getItem('uCuenta').toString();
        }
    }

    const {data, loading, error} = useQuery(GET_USER_ACCOUNT, {
        variables: {
            noAccount: "20164920"
        }
    }); 

    if (error) return <p>Error :(</p>
    if (loading) return <p>Loading...</p>



    console.log(data.getUserAccount);
    
    

    

    return (
        // <DashboardLayout title='Panel colaborador' user={data.getUserAccount} type={role.name}>
        //     <CreateCourse />
        // </DashboardLayout>
        <h1>Hola</h1>
    )
}

export default index