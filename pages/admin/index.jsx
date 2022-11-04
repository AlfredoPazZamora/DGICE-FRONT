import { useQuery } from '@apollo/client'
import { GET_USER } from '../../src/gpl/queryUser'

import React from 'react'
import { CreateCourse } from '../../components/Dashboard'
import { DashboardLayout } from '../../components/Layouts'


const index = () => {

    const {data, loading, error} = useQuery(GET_USER, {
        variables: {id: "6311a06ae3e14ea455875fca"}
    })

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error :(</p>

    const { id, role } = data.getUser

    return (
        <DashboardLayout title='Panel colaborador' user={data.getUser} type={role.name}>
            <CreateCourse />
        </DashboardLayout>
    )
}

export default index