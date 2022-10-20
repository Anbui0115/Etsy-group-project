import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { editReview, deleteReview } from "../../store/reviews";
// import { getAllItems } from "../../store/items";


const ManageReviewForm = ({item, review, purchaseId, setShowModal}) => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [confirmDelete, setConfirmDelete] = useState(false)

    // console.log(review)
    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState(review.title);
    const [stars, setStars] = useState(review.stars);
    const [description, setDescription] = useState(review.description);

    const item_id = item.id
    const purchase_id = purchaseId
    const user_id = user.id
    // console.log(purchaseId)
    // also need to plug in item_id, user_id, purchase_id

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateStars = (e) => {
        // console.log(e)
        setStars(e.target.value);
    };

    const clickStars = (n) => {
        setStars(n)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    const onSubmitReview = async (e) => {
        // console.log("afdsfsd")
        e.preventDefault();
        let verrors = []
        if (title.length <= 3) {
            verrors.push("Title must be greater than 3 characters")
        }
        if (description.length <= 10) {
            verrors.push("Description must be greater than 10 characters")
        }
        if (description.length >= 250) {
            verrors.push("Description must be less than 250 characters")
        }
        if (!verrors.length) {
            const data = await dispatch(editReview(review.id, {title, stars, description}, user_id))
            setShowModal(false)
            history.push('/purchases-and-reviews')
        }
        else setErrors(verrors)
      };

    const onDeleteReview = async (e) => {
        // e.preventDefault();
        const data = await dispatch(deleteReview(review.id, user_id))
        setShowModal(false)
        history.push('/purchases-and-reviews')
    };

    const starField = () => {
        // const blankStar = "☆"
        // const whiteStar = "★"
        let starItems = [];

        for (let i = 0; i < stars; i++) {
            starItems.push(
                <div className='star-button' onClick={() => clickStars(i+1)}> ★ </div>
            )
        }
        for (let i = 0; i < 5-stars; i++){
            // console.log("render")
            starItems.push(
                <div className='star-button' onClick={() => clickStars(i + 1 + stars)}> ☆ </div>
            )
        }

        return (
            <div className="starfield">
                {starItems}
            </div>
        )

    }

    return (
        <form className="make-review-form" onSubmit={onSubmitReview} >
        <div className="create-account create-review">
            <div className="create-acct-text create-review-text">Share Your Thoughts!</div>
        </div>

        <div className="signup-container review-container">
            {!errors.length ? "" :
                            <div className="review-signup-errors">
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                            </div>
            }

            <div className="signup-body" id="review-body">
                <div className="review-field">
                    <label className="review-label">Title of your review</label>
                    <input
                    className=""
                    type="text"
                    name="title"
                    onChange={updateTitle}
                    value={title}
                    required
                    ></input>
                </div>
                <div className="review-field">
                    <label className="review-label">Description</label>
                    <textarea
                    type="text"
                    name="description"
                    onChange={updateDescription}
                    value={description}
                    required
                    ></textarea>
                </div>
                {starField()}
                <button className="signup-button" type="submit">
                    Save Changes
                </button>{" "}
                {
                    !confirmDelete ?
                        <div className="signup-button delete-review-button" type="delete" onClick={() => {setConfirmDelete(true)}}>
                        Delete Review
                        </div>
                        :
                        <div className="signup-button delete-review-button" type="delete" onClick={()=> {onDeleteReview()}}>
                        Click Again To Confirm Delete
                        </div>
                }{" "}
            </div>
        </div>
        </form>
    )
}

export default ManageReviewForm;
