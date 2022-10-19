import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartItemsThunk } from "../../store/session";

export default function Cart(){
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])

    const cartItems = useSelector(state=> state.session.shopping_cart)
    useEffect(()=>{
        dispatch(getCartItemsThunk()).catch(async (res)=>{
            console.log("res is ...", res)
            
        })
    },[])
    if (!cartItems) return null
    console.log("cartItems are ... ",cartItems)
    return (
        <div>           
                {
                    Object.values(cartItems).map((item,indx)=>{
                       return(
                            <>
                                <div >{item.quantity}</div>
                                <div >{item.item_id}</div>
                            </>
                       ) 
                
                        
                    })
                }
            
        </div>
    )
}