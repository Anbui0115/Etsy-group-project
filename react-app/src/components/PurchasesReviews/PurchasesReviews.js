import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { getPurchasesAction } from "../../store/session";
import './PurchasesReviews.css'
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
                return (
                    <div className="purchase-card">
                        <div className="purchase-card-image">
                            <img src={item["images"][0]["image_url"]}></img>
                        </div>
                        <div className="purchase-card-right">

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
