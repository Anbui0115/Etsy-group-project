import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartItemsThunk } from "../../store/session";
import styles from "../Cart/Cart.module.css"
import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";

export default function Cart() {
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.session.shopping_cart)
    useEffect(() => {
        dispatch(getCartItemsThunk()).catch(async (res) => {
            console.log("res is ...", res)

        })
    }, [dispatch])
    if (!cartItems) return null
    return (
        <div className={styles.mainDiv}>
            <div>
                {

                    Object.values(cartItems).map((item, indx) => {
                        return <CartItem item={item} />
                    })
                }
            </div>
            <div>
                <CartSummary shoppingCart={cartItems}/>
            </div>
            {/* <div>
                    Total: {Object.values(cartItems).reduce((accum, val)=>val.quantity*val.item.price+accum,0)}
                </div> */}
            {/* <div className={styles.rightCard}>
                <tbody className={styles.table}>
                    <tr className={styles.row}>
                        <th>
                            Item(s) total
                        </th>
                        
                    </tr>
                    <tr>
                        <hr></hr>
                    </tr>
                    <tr>
                        <button className={styles.proceedButton}> Proceed to checkout</button>
                    </tr>
                </tbody>
            </div> */}
        </div>

    )
}