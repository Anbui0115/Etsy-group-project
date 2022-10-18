import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { spotDetailsThunk } from "../../store/spots";

// import { deleteAReview } from "../../store/reviews";
// import reviewAvatar from "./review-avatar.jpeg";
import "./EachItemCard.css";

const ItemCard = ({ item }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  //   let { spotId } = useParams();
  //   spotId = Number(spotId);
  //   const deleteYourReview = (e, reviewId) => {
  //     e.preventDefault();
  //     dispatch(deleteAReview(reviewId, spotId));
  //     dispatch(spotDetailsThunk(spotId));
  //   };
  //   let reviewDate;
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //   };
  //   if (review.createdAt) {
  //     reviewDate = new Date(review.createdAt).toLocaleDateString(
  //       undefined,
  //       options
  //     );
  //   }
  // console.log("REVIEW DATE", reviewDate);
  //   return (
  //     <div>
  //       <div className="each-review-container">
  //         {/* <div>review Id:{review.id}</div> */}

  //         <div className="review-card-bar">
  //           <div className="review-avatar-container">
  //             <img src={reviewAvatar} />
  //           </div>
  //           <div>
  //             <div className="review-firstName">{review.User.firstName}</div>
  //             <div className="review-date">{reviewDate}</div>
  //           </div>
  //         </div>

  //         <div className="spotDetails-review-star">&#9733; {review.stars}</div>
  //         <div className="spotDetails-review-info">{review.review}</div>

  //         {/* {sessionUser && (
  //           <button
  //             hidden={sessionUser.id !== review.User.firstName}
  //             onClick={(e) => deleteYourReview(e, review.id)}
  //           >
  //             Delete your review
  //           </button>
  //         )} */}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="owner-each-item">
      <div className="owner-item-img">
        <img src={item.image_urls} alt="owner-item" />
      </div>

      <div>
        <div className="owner-item-info">
          <div className="owner-spot-price">
            {item.title}, {item.description}, ${item.price}
          </div>
        </div>
      </div>

      <div>
        <button className="onwer-edit-button">
                      {/* <NavLink
                        to={`/spots/${spot.id}/edit`}
                        style={{ textDecoration: "none", color: "white" }}
                      > */}
                        Edit Spot
                      {/* </NavLink> */}
                    </button>

        <button
                      className="onwer-delete-button"
                      // onClick={(e) => onClickDelete(e, spot.id)}
                    >
                      Delete your spot
                    </button>
      </div>
    </div>
  );
};
export default ItemCard;
