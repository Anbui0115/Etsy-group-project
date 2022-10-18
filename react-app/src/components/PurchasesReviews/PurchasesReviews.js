import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPurchasesAction } from "../../store/session";

/* TODO:
if user is not logged in, render <LandingPage />
else render all components for homepage
*/
const PurchasesReviews=()=>{
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    let n = 1
    const data = dispatch(getPurchasesAction(n));


    if(sessionUser){
       return (
        <div className="purchases-container">

        </div>
       )
    }
    else{
        //if the user is not logged in,
        //the code forces them
        //to be in the "/login" route
        //even if I try to go to "/" manually
        //it would redirect me back to "/login"
        //need some thinking here
        history.push(`/`);
    }

}
export default PurchasesReviews
