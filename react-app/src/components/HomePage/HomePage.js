import { useSelector } from "react-redux";
import LandingPage from './LandingPage'
import LoggedInPage from './LoggedInPage'
import './HomePage.css'
import './LoggedInPage.css'

/* TODO:
if user is not logged in, render <LandingPage />
else render all components for homepage
*/
const HomePage=()=>{
    const sessionUser = useSelector((state) => state.session.user);
    if(sessionUser){
       return <LoggedInPage/>
    }
    else{
        //if the user is not logged in,
        //the code forces them
        //to be in the "/login" route
        //even if I try to go to "/" manually
        //it would redirect me back to "/login"
        //need some thinking here
        return <LandingPage/>
    }

}
export default HomePage
