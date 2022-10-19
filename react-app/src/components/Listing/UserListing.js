import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

// import { cleanUpAllSpots, getSpotByOwnerThunk } from "../../store/spots";
// import { deleteASpotThunk } from "../../store/spots";

import "./UserListing.css";
import CreateUserItem from "../CreateItem/CreateItemForm";
import ItemCard from "../Users_Item_Card";

function UserListing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const items = useSelector((state) => state.items);
  const itemsArray = Object.values(items);
  const sessionUser = useSelector((state) => state.session.user);
  //   const userId = sessionUser.id

  const listingByOwner = itemsArray.filter(
    (item) => item?.owner_id === sessionUser.id
  );
const onClickAddListing=(e)=>{
  e.preventDefault()
  history.push('/listings/create')

}
  console.log("LISTING BY OWNER", listingByOwner);

  // useEffect(() => {
  //   // todo:create get item by owner thunk
  //   // and dispatch it here
  //   // dispatch(getItemsByOwnerThunk());
  //   return () => {
  //     //optional
  //     //   dispatch(cleanUpAllItems());
  //   };
  // }, [dispatch]);


  if (!listingByOwner) return null;
  if (!sessionUser) return <Redirect to="/" />;

  let blankitems = [];
  for (let i = 1; i < Math.abs((listingByOwner.length % 5) - 5); i++) {
    blankitems.push(<div className="owner-each-item"></div>);
  }

  return (
    { listingByOwner } && (
      <>
        <div className="owner-items-outer-container">
          <div className="onwer-listing">Stock your shop</div>
          <div className="owner-listing-subtitle">
            Add the rest of your items or try starting with five. Keep in mind:
            The more you have, the more likely you'll be discovered.
          </div>
          <div className="owner-items-inner-container">
            <div className="owner-item-display">
              <div className="owner-all-items">
                <div className="add-listing">
                  {/* <NavLink to="/listings/create">Add listing</NavLink> */}
                  <img
                    className="owner-each-listing-img"
                    src="https://i.imgur.com/LCd0uJx.png"
                    alt="add-a-listing"
                    onClick={onClickAddListing}
                  ></img>
                </div>
                {listingByOwner.map((item) => (
                  <>
                    <div className="owner-each-item">
                      <ItemCard item={item} />
                    </div>
                  </>
                ))}
                {blankitems}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default UserListing;
