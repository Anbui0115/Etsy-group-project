import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ItemById = () => {
    const { itemId } = useParams();
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews);
    const itemsStateObj = useSelector(state => state.items);
    const items = Object.values(itemsStateObj);
    const currentUserId = sessionState.user.id;

    if (!itemId) return null;
    if (!reviewsState) return null;
    if (!itemsStateObj) return null;

    const filteredItem = items.filter(item => item.id === +itemId)


    return (
        <div className="outer-div">
            <div className="items">
                {filteredItem.map((item) => {
                    return (
                        <div className="item-by-id" key={item.id}>
                            <div className="picture-and-reviews">
                                <div className="pictures">
                                    <div className="picture-list">
                                        {/* Display carosel here with {item.images} */}
                                    </div>
                                    <div className="display-picture">
                                        <img src={item.images[0].image_url} />
                                        </div>
                                </div>
                                <div className="reviews"></div>
                            </div>
                            <div className="item-info-and-cart-button">
                                <div className="store-name">From {item.owner.username}'s shop</div>
                                <div className="item-title-and-price">
                                    <div className="individual-item-title"></div>
                                    <div className="individual-item-price"></div>
                                </div>
                                <div className="add-to-cart-button">{/* render "add to cart"*/}</div>
                                <div className="item-description"></div>
                            </div>
                        </div>

                    )
                })}
            </div>



        </div>
    )
}

export default ItemById;
