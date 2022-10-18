const SET_CART = "cart/setCartItems"

const setCart=(item)=>{
    return{
        type: SET_CART,
        payload: item
    }
}

export const getCartItemsThunk=()=>async dispatch =>{
    const response = await fetch("/api/cart", {
        method: "GET"
    });
    if(response.ok){
        const data = await response.json();
        dispatch(setCart(data));
        return response
    }
} 
const initialState = {};

const cartReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_CART:
        newState = {...state};
        newState.shoppingCart = action.payload;
        return newState;     
      default:
        return state;
    }
  };

  export default cartReducer;