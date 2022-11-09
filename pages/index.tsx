
import type { NextPage } from 'next'
import { LandingPage } from '../components/LandingPage/LandingPage';
import { MainLayout } from '../components/Layouts/MainLayout'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Example to add an icon in your component
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
      </MainLayout>
      <LandingPage /> 
    </>
  )
}

export default Home;
