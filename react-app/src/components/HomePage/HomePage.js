import { useSelector } from "react-redux";
import LandingPage from './LandingPage'
import './HomePage.css'

/* TODO:
if user is not logged in, render <LandingPage />
else render all components for homepage
*/
const HomePage=()=>{
    const sessionUser = useSelector((state) => state.session.user);
    if(sessionUser){
       return (
       <h1>Welcome Logged in User</h1>
       )
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
