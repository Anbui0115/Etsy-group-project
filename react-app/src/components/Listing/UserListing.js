import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllItems } from "../../store/items"

import "./UserListing.css";
// import CreateUserItem from "../CreateItem/CreateItemForm";
import ItemCard from "../Users_Item_Card";

function UserListing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const items = useSelector((state) => state.items);
  const itemsArray = Object.values(items);
  const sessionUser = useSelector((state) => state.session.user);
  const listingByOwner = itemsArray.filter(
    (item) => item?.owner_id === sessionUser.id
  );

  const onClickAddListing = (e) => {
    e.preventDefault();
    history.push("/listings/create");
  };

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  if (!items) return null;
  if (!listingByOwner) return null;
  if (!sessionUser) return <Redirect to="/" />;

  let blankitems = [];
  for (let i = 1; i < Math.abs((listingByOwner.length % 5) - 5); i++) {
    blankitems.push(<div className="owner-individual-card oidbc"></div>);
  }

  return (
    { listingByOwner } && (
      <>
        <div className="owner-items-outer-container">
          <div className="owner-listing">Stock your shop</div>
          <div className="owner-listing-subtitle">
            Add the rest of your items or try starting with five. Keep in mind:
            The more you have, the more likely you'll be discovered.
          </div>

          <div className="owner-all-items-wrapper">
            <div className="owner-all-items-inner-wrapper">
              <div className="add-listing">
                {/* <NavLink to="/listings/create">Add listing</NavLink> */}
                <img
                  className="add-listing-image-clicker"
                  src="https://i.imgur.com/LCd0uJx.png"
                  alt="add-a-listing"
                  onClick={onClickAddListing}
                ></img>
              </div>
              {listingByOwner.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
              {blankitems}
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default UserListing;
