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
        dispatch(getCartItemsThunk())
    }, [dispatch])
    if (!cartItems) return null

    return (
        <div className={styles.mainDiv}>
            <div className={styles.itemsContainer}>
                {
                    Object.values(cartItems).map((item, indx) => {
                        return <CartItem item={item} />
                    })
                }


                <div className={styles.rightContainer}>

                    {
                        cartItems.length != 0 && (
                            <CartSummary shoppingCart={cartItems} />
                        )

                    }

                </div>
                <div>
                    {
                        cartItems.length == 0 && (
                            <div className={styles.emptyCart}>Your cart is empty.</div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}
