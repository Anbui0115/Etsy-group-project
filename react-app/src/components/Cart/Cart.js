import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartItemsThunk } from "../../store/cart";

export default function Cart(){
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])

    const cartItems = useSelector(state=> state.shoppingCart)
    useEffect(()=>{
        dispatch(getCartItemsThunk()).catch(async (res)=>{
            const data = await res.json();
            console.log(data)
            if(data && data.errors) setErrors(Object.values(data.errors))
        })
    },[dispatch])
    return cartItems && (
        <div>
            
        </div>
    )
}