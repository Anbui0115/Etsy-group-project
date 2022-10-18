import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ItemById = () => {
    const {itemId} = useParams();
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews);
    const itemsStateObj = useSelector(state => state.items);
    const items = Object.values(itemsStateObj);
    const currentUserId = session.user.id;

    if (!itemId) return null;
    if (!reviewsState) return null;
    if (!itemsStateObj) return null;



    return (
        <div className="outer-div">
            <h1> Hi there!</h1>
            <div className="picture-and-reviews">
                <div className="pictures">
                    <div className="picture-list"></div>
                    <div className="display-picture"></div>
                </div>
                <div className="reviews"></div>
            </div>
            <div className="item-info-and-cart-button">
                <div className="store-name">From </div>
                <div className="item-title-and-price">
                    <div className="individual-item-title"></div>
                    <div className="individual-item-price"></div>
                </div>
                <div className="add-to-cart-button">{/* render "add to cart"*/ }</div>
                <div className="item-description"></div>
            </div>


        </div>
    )
}

export default ItemById;
