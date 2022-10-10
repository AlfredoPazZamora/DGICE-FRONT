import React from 'react'
import { DashboardLayout } from '../../components/Layouts'


const index = ({user}) => {

    console.log(user)

    return (
        <DashboardLayout title='Panel colaborador' user={user}>

            <h1>Panel colaborador</h1>

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