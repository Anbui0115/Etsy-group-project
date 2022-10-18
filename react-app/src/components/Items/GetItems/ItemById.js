import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ItemById = () => {
    const {itemId} = useParams();
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews);
    const itemsStateObj = useSelector(state => state.items);
    const items = Object.values(itemsStateObj);

    

    return (
        <div>

        </div>
    )
}

export default ItemById;
