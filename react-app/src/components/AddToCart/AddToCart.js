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

    function handleAddToCart(){

        dispatch(addToShoppingCartThunk(item,1,onHandleAddToCartSuccess ))
        .then(()=>{
            // history.push("/cart")
        }).catch(async (res)=>{
            // console.log("res is ....", res)

        })
    }
    return (
        <div>
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add To Cart</button>
        </div>
    )
}
