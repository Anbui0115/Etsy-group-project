import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

// import { cleanUpAllSpots, getSpotByOwnerThunk } from "../../store/spots";
// import { deleteASpotThunk } from "../../store/spots";

import "./UserListing.css";
import CreateUserItem from "../CreateItem/CreateItemForm";
import ItemCard from "../EachItemCard";

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

  useEffect(() => {
    // todo:create get item by owner thunk
    // and dispatch it here
    // dispatch(getItemsByOwnerThunk());
    return () => {
      //optional
      //   dispatch(cleanUpAllItems());
    };
  }, [dispatch]);

  const onClickDelete = async (e, spotId) => {
    e.preventDefault();
    // await dispatch(deleteASpotThunk(spotId));
    history.push(`/`);
  };

  if (!items) return null;
  if (!sessionUser) return <Redirect to="/" />;

  return (
    { itemsArray } && (
      <>
        <div className="owner-items-outer-container">
          <div className="onwer-listing">Your listings </div>
          <div className="owner-items-inner-container">
           <NavLink to='/listings/create'>Add listing</NavLink>
            <div className="owner-item-display">
              {listingByOwner.map((item) => (
                <div className="owner-each-item">

                    <ItemCard item={item}/>
                  {/* <div className="owner-item-img">
                    <img src={item.image_urls} alt="owner-item" />
                  </div>

                  <div>
                    <div className="owner-item-info">
                      <div className="owner-spot-price">
                        {item.title}, {item.description}, ${item.price}
                      </div>
                    </div>
                  </div>

                  <div> */}
                    {/* <button className="onwer-edit-button">
                      <NavLink
                        to={`/spots/${spot.id}/edit`}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Edit Spot
                      </NavLink>
                    </button> */}

                    {/* <button
                      className="onwer-delete-button"
                      onClick={(e) => onClickDelete(e, spot.id)}
                    >
                      Delete your spot
                    </button> */}
                  {/* </div> */}
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
