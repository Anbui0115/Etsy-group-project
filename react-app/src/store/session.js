// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_SHOPPINGCARTS = 'shoppingCarts/GET_SHOPPINGCARTS';
const CREATE_SHOPPINGCART = 'shoppingCarts/CREATE_SHOPPINGCART';
const EDIT_SHOPPINGCART = 'shoppingCarts/EDIT_SHOPPINGCART';
const DELETE_SHOPPINGCART = 'shoppingCarts/DELETE_SHOPPINGCART';
const CLEAR_SHOPPINGCART = 'shoppingCarts/CLEAR_SHOPPINGCART';
const GET_PURCHASES = "items/GET_PURCHASES";
const SET_CART = "cart/setCartItems"
const REMOVE_CART_ITEM = "cart/removeCartItem"
const UPDATE_CART_ITEM = "cart/addCartItem"

// Action Creators
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});


const setCart=(item)=>{
  return{
      type: SET_CART,
      payload: item
  }
}


const removeUser = () => ({
  type: REMOVE_USER,
})

const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
})

const updateCartItem = (id) => ({
  type: UPDATE_CART_ITEM,
  payload: id

})

export const addToShoppingCartThunk = (item_id,quantity)=> async dispatch=>{
  const response = await fetch(`/api/cart`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id,
      quantity,      
    })
  })
  if(response.ok){
    const data = await response.json()
    if(data.errors){
      return data.errors
    } 
    return response   
  }


}
export const editShoppingCartThunk =(id,quantity)=>async dispatch => {
  console.log("item id is in thunk ....",id, "quantity is .....", quantity)
  const response = await fetch(`/api/cart/${id}`,{
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quantity,
      
    })
  })
  if (response.ok){
    const data = await response.json()
    console.log("response after update is .....",data)
    if(data.errors){
      return data.errors
    }
    dispatch(updateCartItem(data))
    return response
  }
}



export const getCartItemsThunk=()=>async dispatch =>{
  const response = await fetch("/api/cart", {
      method: "GET"
  });
  if(response.ok){
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
      dispatch(setCart(data));
      return response
  }
} 

export const removeCartItemsThunk=(id)=>async dispatch =>{
  const response = await fetch(`/api/cart/${id}`, {
      method: "DELETE"
  });
  if(response.ok){
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
      dispatch(removeCartItem(id));
      // dispatch(removeCartItem(data));
      return response
  }
} 
// const createShoppingCartAction = (shoppingCart) => {
//   return {
//       type: CREATE_SHOPPINGCART,
//       shoppingCart
//   }
// }


// export const deleteShoppingCartAction = (shoppingCartId) => {
//   return {
//       type: DELETE_SHOPPINGCART,
//       shoppingCartId
//   }
// }

// export const clearShoppingCartAction = () => {
//   return {
//       type: CLEAR_SHOPPINGCART
//   }
// }

const getPurchases = (purchases) => {
  return {
      type: GET_PURCHASES,
      purchases
  }
}

// Thunks
export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

// export const getAllShoppingCarts = () => async dispatch => {
//   const res = await fetch('/api/shoppingCarts');

//   if (res.ok) {
//       const shoppingCarts = await res.json();
//       dispatch(getShoppingCartsAction(shoppingCarts.shoppingCarts));
//   }
// };

// export const createShoppingCart = (shoppingCartData) => async dispatch => {
//   const res = await fetch(`/api/shoppingCarts`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(shoppingCartData)
//   });

//   if (res.ok) {
//       const shoppingCart = await res.json();
//       dispatch(createShoppingCartAction(shoppingCart));
//       return shoppingCart;
//   }
// };

// export const editShoppingCart = (shoppingCartId, editShoppingCartData) => async dispatch => {
//   const res = await fetch(`/api/shoppingCarts/${shoppingCartId}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(editShoppingCartData)
//   });

//   if (res.ok) {
//       const shoppingCart = await res.json();
//       dispatch(editShoppingCartAction(shoppingCart));
//       return shoppingCart;
//   }
// };

// export const deleteShoppingCart = (shoppingCartId) => async dispatch => {
//   const res = await fetch(`/api/shoppingCarts/${shoppingCartId}`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' }
//   });

//   if (res.ok) {
//       const shoppingCart = `${shoppingCartId}`
//       dispatch(deleteShoppingCartAction(shoppingCart))
//   }
// }

export const getPurchasesAction = (id) => async dispatch => {
  // console.log("fadsfadsfdsafsa", id)
  const res = await fetch(`/api/purchases/${id}`)

  if (res.ok) {
    const purchases = await res.json()
    // console.log(purchases)
    dispatch(getPurchases(purchases))
  }
}

const initialState = { user: null };

//Reducer
export default function reducer(state = initialState, action) {
  const newState = {...state}
  switch (action.type) {    
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    // case GET_SHOPPINGCARTS:
    //     action.shoppingCarts.forEach(shoppingCart => newState[shoppingCart.id] = shoppingCart)
    //     return newState;
    // // case CREATE_SHOPPINGCART:
    //     newState[action.shoppingCart.id] = action.shoppingCart
    //     return newState;
    // case EDIT_SHOPPINGCART:
    //     newState[action.shoppingCart.id] = action.shoppingCart
    //     return newState;
    // case DELETE_SHOPPINGCART:
    //     delete newState[action.shoppingCartId]
    //     return newState;
    // case CLEAR_SHOPPINGCART:
    //     return {}
    case GET_PURCHASES:
        // console.log(action.purchases.purchases)
        newState["purchases"] = action.purchases.purchases
        return newState
    case SET_CART:
          newState.shopping_cart = action.payload.shopping_cart;
          return newState;   
    case UPDATE_CART_ITEM:
        newState.shopping_cart = [...newState.shopping_cart]
        let cartItem = newState.shopping_cart.find(i => i.id === action.payload.id);
        cartItem.quantity = action.payload.quantity
        return newState

    case REMOVE_CART_ITEM:
          const shopping_cart = newState.shopping_cart.filter(i => i.id !== action.payload);
          return {...state, shopping_cart}
    default:
      return state;
  }
}
