import {  useState } from "react"
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css"
import { editShoppingCartThunk, removeCartItemsThunk } from "../../store/session";

export default function CartItem({item}){
    
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(item.quantity);
    
    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }; 
    const dollarFormmatter = new Intl.NumberFormat("en-US", formatting_options);
    
    function handleRemove(id){
        dispatch(removeCartItemsThunk(id)).catch(async (res) => {
            console.log("res is ...", res)
            
        })
    }
    function handleItemCount(count){
        setQuantity(count)
        dispatch(editShoppingCartThunk(item.id,count)).catch(async (res) => {
            console.log("res is ...", res)
        })
    }
    if (!item) return null
    return (
        <div className={styles.mainDiv}>           
                <div>
                    <div className={styles.itemCard}>
                        <div><img src={item.item.images[0].image_url+"?width=187&height=148"}></img></div>

                        <div className={styles.descDiv}>
                            <div className={styles.descText}>{item.item.title}</div>
                            <div className={styles.remove} key={item.id} value={item.id} onClick={()=>{handleRemove(item.id)}}><b>Remove</b></div>
                            
                        </div>
                        
                        <form>
                            
                            <input type="number" min="1" value={quantity} onChange={(e)=> handleItemCount(e.target.value)} />
                        </form>
                        <div className={styles.price}>
                            <div ><b> {dollarFormmatter.format(quantity * item.item.price)}</b></div> 
                            <div>(${item.item.price}&nbsp;each)</div>  
                        </div>
                        
                                                            
                        
                    </div>
                </div>
        </div>
    )
}