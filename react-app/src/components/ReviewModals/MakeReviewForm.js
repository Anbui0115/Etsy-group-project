import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { createReview } from "../../store/reviews";
// import { getAllItems } from "../../store/items";


const MakeReviewForm = ({item, purchaseId, setShowModal}) => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const [title, setTitle] = useState("");
    const [stars, setStars] = useState("");
    const [description, setDescription] = useState("");

    const item_id = item.id
    const purchase_id = purchaseId
    const user_id = user.id
    // console.log(purchaseId)
    // also need to plug in item_id, user_id, purchase_id

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateStars = (e) => {
        setStars(e.target.value);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
    };

    const onSubmitReview = async (e) => {
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
            const data = await dispatch(createReview({title, stars, description, item_id, purchase_id, user_id}))
            setShowModal(false)
            history.push('/purchases-and-reviews')
        }
        else setErrors(verrors)
      };

    return (
        <form className="make-review-form" onSubmit={onSubmitReview} >
        <div className="create-account">
            <div className="create-acct-text">Share Your Thoughts!</div>
        </div>

        <div className="signup-container">
            <div className="signup-errors">
            {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
            ))}
            </div>

            <div className="signup-body">
            <div className="input-field">
                <label>Title</label>
                <input
                className="credential"
                type="text"
                name="title"
                onChange={updateTitle}
                value={title}
                required
                ></input>
            </div>
            <div className="input-field">
                <label>Stars</label>
                <input
                className="credential"
                type="text"
                name="stars"
                onChange={updateStars}
                value={stars}
                required
                ></input>
            </div>
            <div className="input-field">
                <label className="input">Description</label>
                <textarea
                type="text"
                name="description"
                onChange={updateDescription}
                value={description}
                required
                ></textarea>
            </div>
            <button className="signup-button" type="submit">
                Submit Review
            </button>{" "}
            </div>
        </div>
        </form>
    )
}

export default MakeReviewForm;
