
import type { NextPage } from 'next'
<<<<<<< HEAD
import NavBar from '../components/navBar'
import ErrorPage from '../components/errorPage'
=======
import { NavBar } from '../components/NavBar'


>>>>>>> 49e6c063a01ccb1c40a93e6c05cb53938d1e2c12
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Example to add an icon in your component
// import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <ErrorPage></ErrorPage>
    </>
  )
}

export default Home;
