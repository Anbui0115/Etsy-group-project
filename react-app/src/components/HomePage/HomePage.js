import { connect, useDispatch, useSelector } from "react-redux";
import LandingPage from './LandingPage'
import LoggedInPage from './LoggedInPage'
import './HomePage.css'
import './LoggedInPage.css'
import { useLocation, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { getAllItems } from "../../store/items";

/* TODO:
if user is not logged in, render <LandingPage />
else render all components for homepage
*/

function useQuery() {
    const {search} = useLocation();
    // return useMemo(() => new URLSearchParams(search), [search]);
    return new URLSearchParams(search)
}

const HomePage=(props)=>{
    const sessionUser = useSelector((state) => state.session.user);
    // const query = useQuery();

    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            dispatch(getAllItems());
        })();
    }, [dispatch,props.match.params]);

    if(sessionUser){
       return <LoggedInPage/>
    }
    else{
        return <LandingPage/>
    }

}


//https://stackoverflow.com/questions/50667609/react-router-component-not-updating-on-url-search-param-change
export default withRouter(connect()(HomePage));
