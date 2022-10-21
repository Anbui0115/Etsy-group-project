import {  useState } from "react"
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css"
import { editShoppingCartThunk, removeCartItemsThunk } from "../../store/session";
import { useHistory } from "react-router-dom";

export default function CartItem({item}){
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    const history = useHistory();

    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormmatter = new Intl.NumberFormat("en-US", formatting_options);

    function handleRemove(id){
        dispatch(removeCartItemsThunk(id)).catch(async (res) => {
        })
    }
    function handleItemCount(count){

       if(parseInt(count) < 1 || isNaN(parseInt(count))) {
            count = 1
            alert ("Quantity should be greater than 0")
       }
        setQuantity(count)
        dispatch(editShoppingCartThunk(item.id,count)).catch(async (res) => {})
    }
    if (!item) return null
    return (
        <div className={styles.itemCard}>
            <div className={styles.shoppingImageContainer}><img src={item.item.images[0].image_url} className={styles.image} onClick={()=> history.push(`/items/${item.item.id}`)}></img></div>

            <div className={styles.descDiv}>
                <div className={styles.descText} onClick={()=> history.push(`/items/${item.item.id}`)}>{item.item.title}</div>
                <div className={styles.remove} key={item.id} value={item.id} onClick={()=>{handleRemove(item.id)}}><b>Remove</b></div>

            </div>

            <form>
                <input type="number" min="1" value={item.quantity} className={styles.itemCount} onChange={(e)=> handleItemCount(e.target.value)} />
            </form>

            <div className={styles.price}>
                <div ><b> {dollarFormmatter.format(item.quantity * item.item.price)}</b></div>
                <div>({dollarFormmatter.format(item.item.price)}&nbsp;each)</div>
            </div>



        </div>
    )
}
