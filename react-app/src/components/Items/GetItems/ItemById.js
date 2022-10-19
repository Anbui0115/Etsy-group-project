import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ImageGallery from 'react-image-gallery';
import {ItemReviews} from './ItemReviews'
import "../Items.css"
import AddToCart from "../../AddToCart/AddToCart";

const ItemById = () => {
    const { itemId } = useParams();
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews);
    const itemsStateObj = useSelector(state => state.items);
    const items = Object.values(itemsStateObj);
    // const currentUserId = sessionState.user.id;

    if (!itemId) return null;
    if (!reviewsState) return null;
    if (!itemsStateObj) return null;

    const filteredItem = items.filter(item => item.id === +itemId)
    let reviews = {}
    try {
        reviews = filteredItem[0].reviews
    }
    catch {
        reviews = {}
    }
    // const reviews = filteredItem[0].reviews
    const carrousel = (item) => {
        let images = item.images.map(image => {
            return { original: image.image_url,
                     originalClass: "carrouselBig",
                     thumbnail: image.image_url,
                     thumbnailClass: "carrouselSmall",}
        });
        return images
    }

    return (
        <div className="outer-div">
            <div className="items">
                {filteredItem.map((item) => {
                    return (
                        <div className="item-by-id" key={item.id}>
                            <div className="picture-and-reviews">
                                <div className="pictures">
                                        <ImageGallery
                                        items={carrousel(item)}
                                        thumbnailPosition="left"
                                        showFullscreenButton="false"
                                        showPlayButton={false}
                                        />
                                    {/* <div className="picture-list">
                                    </div>
                                    <div className="display-picture">
                                    </div> */}
                                </div>
                            </div>
                            <div className="item-info-and-cart-button">
                                <div className="store-name">From {item.owner.username}'s shop</div>
                                <div className="item-title-and-price">
                                    <div className="individual-item-title">{item.title}</div>
                                    <div className="individual-item-price">${item.price}</div>
                                </div>
                                <div className="add-to-cart-button"><AddToCart item={item.id}/></div>
                                <div className="description-title-and-description">
                                    <div className="item-description-title">Description</div>
                                    <div className="item-description">{item.description}</div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
            <ItemReviews reviews={reviews} />
        </div>
    )
}

export default ItemById;
