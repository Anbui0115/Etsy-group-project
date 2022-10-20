import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { NavLink, Redirect } from "react-router-dom";

// import { deleteAReview } from "../../store/reviews";
// import reviewAvatar from "./review-avatar.jpeg";
import "./EachItemCard.css";
import { editItem, deleteItem } from "../../store/items";
import EditItemForm from "../EditItem";

const ItemCard = ({ item }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const itemImg = item["images"][0]["image_url"];
  const itemId = item.id;

  const onClickDelete = async (e, itemId) => {
    e.preventDefault();
    await dispatch(deleteItem(itemId));
    history.push(`/listings`);
  };

  const onClickEdit = async (e, itemId) => {
    e.preventDefault();
    // await dispatch(editItem(itemId));
    history.push(`/listing/${itemId}/edit`);
    // <EditItemForm itemId={itemId} />;
  };

  return (
    <div className="owner-individual-card">
      {/* <div>
          <NavLink to="/listings/create">Add listing</NavLink>
        </div> */}

      <div className="owner-each-img-wrapper">
        <Link to={`/items/${item.id}`} className="item-name-link">
          <img
            className="owner-each-listing-img"
            src={itemImg}
            alt="owner-item"
          />
        </Link>
      </div>

      <div>
        <div className="owner-item-info">
          <div className="owner-item-title">
            <Link to={`/items/${item.id}`} className="item-name-link">{item.title}</Link>
          </div>
          <div className="owner-item-price-and-owner">
            <div>From {item.owner.username}</div>
            <div className="owner-item-price">${item.price}</div>
          </div>
        </div>
      </div>

      <div className="listing-buttons">
        <div
          className="onwer-edit-button"
          onClick={(e) => onClickEdit(e, itemId)}
        >
          Edit
        </div>

        <div
          className="onwer-delete-button"
          onClick={(e) => onClickDelete(e, itemId)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
