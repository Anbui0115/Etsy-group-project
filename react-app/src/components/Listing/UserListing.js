import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

// import { cleanUpAllSpots, getSpotByOwnerThunk } from "../../store/spots";
// import { deleteASpotThunk } from "../../store/spots";

import "./UserListing.css";
import CreateUserItem from "../CreateItem/CreateItemForm";
import ItemCard from "../User's_Item_Card";

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

  // const onClickDelete = async (e, spotId) => {
  //   e.preventDefault();
  //   // await dispatch(deleteASpotThunk(spotId));
  //   history.push(`/`);
  // };

  if (!listingByOwner) return null;
  if (!sessionUser) return <Redirect to="/" />;

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
            {/* <NavLink to="/listings/create">Add listing</NavLink> */}
            <div className="owner-item-display">
              {listingByOwner.map((item) => (
                <div className="owner-each-item">
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default UserListing;
