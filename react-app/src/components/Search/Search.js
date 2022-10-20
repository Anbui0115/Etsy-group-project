import { useHistory } from "react-router-dom"
import { useParams } from "react-router";
import { searchAction } from "../../store/session";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


const Search = () => {
    const [loaded, setLoaded] = useState(false);

    let history = useHistory()
    const params = useParams()
    const dispatch = useDispatch();
    const searchTerms = params.params.split("+")

    useEffect(() => {
        (async () => {
          await searchAction(searchTerms);
          setLoaded(true);
        })();
    }, [dispatch]);



    console.log(searchTerms)
    return (
        <div>
            hi
        </div>
    )
}

export default Search
