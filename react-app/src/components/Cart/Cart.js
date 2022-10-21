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

            {cartItems.length != 0 && (
                <div className={styles.numberOfItemsInCart}>
                    {cartItems.length} Item(s) in your cart
                </div>
            )}
            <div className={styles.itemsContainerOuter}>
                <div className={styles.itemsContainer}>
                    <div className={styles.cartItemsLeft}>
                        {Object.values(cartItems).map((item, indx) => {
                            return <CartItem item={item} />
                        })}
                    </div>

                    <div className={styles.rightContainer}>
                        {cartItems.length != 0 && (
                            <CartSummary shoppingCart={cartItems} />
                        )}
                    </div>
                </div>

                <div className={styles.emptyCartTextContainer}>
                    {cartItems.length == 0 && (
                        <div className={styles.emptyCart}>Your cart is empty.</div>
                    )}
                </div>
            </div>
        </div>

    )
}
