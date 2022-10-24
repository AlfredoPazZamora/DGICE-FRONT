import React from 'react'
import { CreateCourse } from '../../components/Dashboard'
import { DashboardLayout } from '../../components/Layouts'


const index = ({user}) => {

    return (
        <DashboardLayout title='Panel colaborador' user={user} type={'profesor'}>

            <CreateCourse />

        </DashboardLayout>
    )
}

export const getStaticProps = async (ctx) => {
    const user = {
        fullName: 'Alfredo Paz',
        email: 'example@example.com',
        profileImg: 'https://picsum.photos/200/300',
    }
    
    return {
        props: {
            user
        },
    };
}

export default index