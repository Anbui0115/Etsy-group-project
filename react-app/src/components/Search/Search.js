import React, { useEffect} from "react";
import { Link, withRouter, useLocation } from 'react-router-dom'
import { useSelector, useDispatch, connect} from 'react-redux';
import { makeProperPrice } from '../../utils/properPrice';
import {getAllItems} from '../../store/items'

function useQuery() {
    const {search} = useLocation();
    // return useMemo(() => new URLSearchParams(search), [search]);
    return new URLSearchParams(search)
}

const Search = (props) => {
    const sessionUser = useSelector((state) => state.session.user);
    const query = useQuery();

    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            dispatch(getAllItems(query.get("q")));
        })();
    }, [dispatch,props.match.params]);

    const itemsObj = useSelector(state => state.search)
    let items = Object.values(itemsObj)
    // items.reverse()

    let blankitems = [];
    for (let i = 0; i < Math.abs(items.length % 5 - 5); i++) {
        blankitems.push(
            <div className='splash-item-card'>
            </div>
        )
    }

    return (
        <div className="Outer-container">
            <div className="colored-header">
                <div className="header-color-bar">
                    <div className='header-text'>
                        <h1 className='header-text'>Welcome to Eatsy!</h1>
                    </div>

                </div>
                <div className="header-bar"></div>
            </div>

            <div className='preview-text'>
                    Search Results
            </div>
            <div className="basic-preview">

                {items.map(item => {
                    // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
                    return (
                        <Link to={"/items/"+item.id} alt={item.title} className='splash-item-card' style={{ backgroundImage: `url(${item.images[0]["image_url"]})` }}>
                            <div className='item-card-price'>${String(item.price).length === 5 ? item.price : String(item.price)+"0"}</div>
                        </Link>
                    )
                })}
                {blankitems}
            </div>

        </div>
    )

}

//  export default Search
export default withRouter(connect()(Search));
