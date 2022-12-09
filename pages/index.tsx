

import type { NextPage } from 'next'
import { LandingPage } from '../components/LandingPage/LandingPage';
import { MainLayout } from '../components/Layouts/MainLayout'

import Category from '../components/Category'

const Home: NextPage = () => {
  return (
    <>
       <MainLayout>

      </MainLayout>
      {/* <LandingPage />   */}
      <Category/>

    </>
  )
}


export default Home;
