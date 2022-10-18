import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink, Redirect } from "react-router-dom";
// import { spotDetailsThunk } from "../../store/spots";
// import { deleteAReview } from "../../store/reviews";
// import reviewAvatar from "./review-avatar.jpeg";
import "./EachItemCard.css";

const ItemCard = ({ item }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const itemImg = item["images"][0]["image_url"];
  console.log("item---", itemImg);
  return (
    <div className="owner-each-item">
      {/* <div>
        <NavLink to="/listings/create">Add listing</NavLink>
      </div> */}

      <div className="owner-each-listing">
        <img
          className="owner-each-listing-img"
          src={itemImg}
          alt="owner-item"
        />
      </div>

      <div>
        <div className="owner-item-info">
          <div className="owner-item-title">{item.title}</div>
          <div className="owner-item-price-and-onwer">
            <div>owner name</div>
            <div className="owner-item-price">${item.price}</div>
          </div>
        </div>
      </div>

      <div className="listing-buttons">
        <div className="onwer-edit-button">
          {/* <NavLink
                        to={`/spots/${spot.id}/edit`}
                        style={{ textDecoration: "none", color: "white" }}
                      > */}
          Edit
          {/* </NavLink> */}
        </div>

        <div
          className="onwer-delete-button"
          // onClick={(e) => onClickDelete(e, spot.id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
