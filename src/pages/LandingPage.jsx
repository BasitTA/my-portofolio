import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import Project from "../components/Project"

function LandingPage(){

   return(
      <>
         <Navbar/>
         <Hero/>
         <Project/>
         <Profile/>
      </>
   )
}

export default LandingPage