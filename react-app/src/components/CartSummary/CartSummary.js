import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPurchaseThunk, removeCartItemsThunk } from "../../store/session";
import styles from "../CartSummary/CartSummary.module.css"

export default function CartSummary({ shoppingCart }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };
    const dollarFormmatter = new Intl.NumberFormat("en-US", formatting_options);
    function handleCheckout() {

        dispatch(addPurchaseThunk()).then((res) => {
            history.push("/purchases-and-reviews")
        });


    }
    return (
        <div className={styles.rightCard}>
            <tbody className={styles.table}>
                <tr className={styles.row}>
                    <th>
                        Item(s) total
                    </th>

                </tr>
                <tr>
                    <hr></hr>
                    <div>
                        Total: {dollarFormmatter.format(Object.values(shoppingCart).reduce((accum, val) => val.quantity * val.item.price + accum, 0))}
                    </div>
                </tr>
                <tr>
                    <button className={styles.proceedButton} onClick={handleCheckout}>Proceed to checkout</button>
                </tr>
            </tbody>
        </div>
    )
}