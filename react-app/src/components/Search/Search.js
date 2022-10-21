import React, { useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { makeProperPrice } from "../../utils/properPrice";
import { getAllItems } from "../../store/items";
import SearchResultCard from "./SearchResultCard";

function useQuery() {
  const { search } = useLocation();
  // return useMemo(() => new URLSearchParams(search), [search]);
  return new URLSearchParams(search);
}

const Search = (props) => {
  const sessionUser = useSelector((state) => state.session.user);
  const query = useQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(getAllItems(query.get("q")));
    })();
  }, [dispatch, props.match.params]);

  const itemsObj = useSelector((state) => state.search);
  let items = Object.values(itemsObj);
  // items.reverse()

  let blankitems = [];
  for (let i = 0; i < Math.abs((items.length % 5) - 5); i++) {
    blankitems.push(<div className="splash-item-card"></div>);
  }

  return (
    <div className="Outer-container">
      <br />
      <div className="preview-text">
        {items.length ? "Search Results" : "No Results Found"}
      </div>
      <div className="basic-preview">
        {items.map((item) => {
          // let img = 'https://media.discordapp.net/attachments/1017492963720433868/1030624725350760448/pexels-klaus-nielsen-6294375.jpg'
          return (
            <div key={item.id}>
              <SearchResultCard item={item} />
            </div>
          );
        })}
        {blankitems}
      </div>
    </div>
  );
};

//  export default Search
export default withRouter(connect()(Search));
