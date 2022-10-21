import { useDispatch } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { addToShoppingCartThunk} from "../../store/session"
import styles from "../AddToCart/AddToCart.module.css"
export default function AddToCart({item}){
    const dispatch = useDispatch()
    const history = useHistory()

    function onHandleAddToCartSuccess(){
        history.push("/cart");
    }

    async function handleAddToCart(){

        await dispatch(addToShoppingCartThunk(item,1,onHandleAddToCartSuccess ));
       
    }
    return (
        <div>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add To Cart</button>
        </div>
    )
}
