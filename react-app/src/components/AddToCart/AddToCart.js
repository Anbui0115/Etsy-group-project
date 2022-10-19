import styles from "../AddToCart/AddToCart.module.css"
export default function AddToCart({item}){
    function handleAddToCart(){
        alert("Add to cart Item ID ", item)
    }
    return (
        <div>
            <button className={styles.addToCartButton} onClick={()=>handleAddToCart}>Add To Cart</button>
        </div>
    )
}