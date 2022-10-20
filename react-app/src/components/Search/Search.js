import { searchAction } from "../../store/session";
import React, { useState, useEffect, useMemo } from "react";
import { connect, useDispatch , mapStateToProps, mapDispatchToProps} from "react-redux";
import {useLocation, withRouter} from 'react-router-dom'
import LandingPage from "../HomePage/LandingPage";
import HomePage from "../HomePage/HomePage";
import { getAllItems } from "../../store/items";


// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    const {search} = useLocation();
    // return useMemo(() => new URLSearchParams(search), [search]);
    return new URLSearchParams(search)
}


const Search = (props) => {
    const [loaded, setLoaded] = useState(false);
    const query = useQuery();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            dispatch(getAllItems(query.get("q")));
            setLoaded(true);
        })();
    }, [dispatch,props.match.params]);



    return (
        <HomePage/>
            
        
    )
}

// export default Search
//https://stackoverflow.com/questions/50667609/react-router-component-not-updating-on-url-search-param-change
export default withRouter(connect()(Search));
