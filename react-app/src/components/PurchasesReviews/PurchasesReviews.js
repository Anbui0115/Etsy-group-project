import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { getPurchasesAction } from "../../store/session";
import { makeProperPrice } from "../../utils/properPrice";
import './PurchasesReviews.css'
import ReviewModal from "../ReviewModals"

/* TODO:
if user is not logged in, render <LandingPage />
else render all components for homepage
*/
const PurchasesReviews= ()=>{
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(getPurchasesAction(sessionUser.id))
    }, [dispatch]);

    const purchases = useSelector((state) => state.session.purchases);
    const itemsObj = useSelector(state => state.items)
    const items = Object.values(itemsObj)

    let purchaseCards = ( <></>)
    try {
        purchaseCards =
            purchases.map(purchase => {
                const item = itemsObj[purchase.itemId]

                let reviewPreview = <></>
                let hasReview = false
                if (purchase.review.length !== 0) {
                    const itemReview = purchase.review[0]
                    reviewPreview = (
                        <div className="review-preview">
                            {/* <div>{itemReview["title"]}</div> */}
                            <div>Your Rating: {"★".repeat(parseInt(itemReview["stars"]))}</div>
                            {/* <div>{itemReview["description"]}</div> */}
                        </div>
                    )
                    hasReview = true
                }
                return (
                    <div key={item.id} className="purchase-card">
                        <div className="purchase-card-image-container">
                            <div className="purchase-card-image">
                                <img src={item["images"][0]["image_url"]}></img>
                            </div>
                        </div>
                        <div className="purchase-card-mid">
                            <div className="purchase-card-title">{item.title} ({purchase.quantity})</div>
                            {/* <div className="purchase-card-description">{item.description}</div> */}
                            <div className="purchase-card-price">${makeProperPrice(purchase.price)} ea</div>
                            {reviewPreview}
                        </div>
                        <div className="purchase-card-right">
                            <ReviewModal hasReview={hasReview} review={purchase.review[0]} item={item} />
                        </div>
                    </div>
                )
            })
    }
    catch {
        purchaseCards = (<></>)
    }


    if(!sessionUser){ history.push(`/`); }
    return (
        <div className="purchases-container">
            {purchaseCards}
        </div>
    )

}
export default PurchasesReviews
