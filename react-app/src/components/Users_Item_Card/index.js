import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
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

// console.log('item owner !!!!!!!!',item.owner.username)

  const onClickDelete = async (e, itemId) => {
    console.log('itemID inside on click ~~~~~~',itemId)//undefined
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
