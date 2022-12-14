import { getPurchasesAction } from "./session"

// Types
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';
// const CLEAR_REVIEWS = 'reviews/CLEAR_REVIEW';

// Action Creators
const getReviewsAction = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}

// const createReviewAction = (review) => {
//     return {
//         type: CREATE_REVIEW,
//         review
//     }
// }

// const editReviewAction = (review) => {
//     return {
//         type: EDIT_REVIEW,
//         review
//     }
// }

export const deleteReviewAction = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

// export const clearReviewAction = () => {
//     return {
//         type: CLEAR_REVIEWS
//     }
// }


// Thunks
export const getAllReviews = () => async dispatch => {
    const res = await fetch('/api/reviews');

    if (res.ok) {
        const reviews = await res.json();
        dispatch(getReviewsAction(reviews.reviews));
    }
};

export const createReview = (reviewData) => async dispatch => {
    const res = await fetch(`/api/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(getPurchasesAction(reviewData.user_id));
        return review;
    }
};

export const editReview = (reviewId, editReviewData, uid) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editReviewData)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(getPurchasesAction(uid));
        return review;
    }
};

export const deleteReview = (reviewId, uid) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        dispatch(getPurchasesAction(uid));
    }
}

const initialState = {}

// Reducer
export default function reviewsReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_REVIEWS:
            action.reviews.forEach(review => newState[review.id] = review)
            return newState;
        case CREATE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        case EDIT_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        case DELETE_REVIEW:
            delete newState[action.reviewId]
            return newState;
        // case CLEAR_REVIEWS:
        //     return {}
        default:
            return state;
    }
}
