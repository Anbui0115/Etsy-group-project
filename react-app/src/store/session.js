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
const ADD_PURCHASE_ORDER = "order/addPurchase"
const CLEAR_CART = "cart/clearCart"

// Action Creators
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});


const setCart = (item) => {
  return {
    type: SET_CART,
    payload: item
  }
}


const removeUser = () => ({
  type: REMOVE_USER,
})

const addPurchase = () =>({
  type: ADD_PURCHASE_ORDER
})

const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
})

const updateCartItem = (id) => ({
  type: UPDATE_CART_ITEM,
  payload: id

})

const clearCart = () => ({
  type: CLEAR_CART,
})

// Thunks

export const addPurchaseThunk = (cart) => async dispatch => {
  // console.log("cart is ",cart)

  const response = await fetch('/api/cart/checkout',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if(response.ok){
    const data = await response.json()
    if (data.errors)
      return data.errors
    dispatch(clearCart())
    return response
  }
}

export const addToShoppingCartThunk = (item_id, quantity, onHandleAddToCartSuccess) => async dispatch => {
  const response = await fetch(`/api/cart`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id,
      quantity,
    })
  })
  if (response.ok) {
    const data = await response.json()
    if (data.errors) {
      return data.errors
    }
    // await dispatch(updateCartItem(data));
    onHandleAddToCartSuccess();
    return response
  }
}
export const editShoppingCartThunk = (id, quantity) => async dispatch => {
  // console.log("item id is in thunk ....", id, "quantity is .....", quantity)
  const response = await fetch(`/api/cart/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quantity,

    })
  })
  if (response.ok) {
    const data = await response.json()
    // console.log("response after update is .....", data)
    if (data.errors) {
      return data.errors
    }
    dispatch(updateCartItem(data))
    return response
  }
}



export const getCartItemsThunk = () => async dispatch => {
  const response = await fetch("/api/cart", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(setCart(data));
    return response
  }
}

export const removeCartItemsThunk = (id) => async dispatch => {
  const response = await fetch(`/api/cart/${id}`, {
    method: "DELETE"
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(removeCartItem(id));
    return response
  }
}

const getPurchases = (purchases) => {
  return {
    type: GET_PURCHASES,
    purchases
  }
}


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



export const getPurchasesAction = (id) => async dispatch => {
  // console.log("fadsfadsfdsafsa", id)
  const res = await fetch(`/api/purchases/${id}`)

  if (res.ok) {
    const purchases = await res.json()
    // console.log(purchases)
    dispatch(getPurchases(purchases))
  }
}

export const searchAction = (terms) => async dispatch => {
  const res = await fetch('/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q : terms
    }),
  });

  if (res.ok) {
    const results = await res.json()
    return results
  }
}

const initialState = { user: null };

//Reducer
export default function reducer(state = initialState, action) {
  const newState = { ...state }
  let shopping_cart;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case GET_PURCHASES:
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
      let shopping_cart = newState.shopping_cart.filter(i => i.id !== action.payload);
      return { ...state, shopping_cart }
    case CLEAR_CART:
      return {...state,shopping_cart:null}

    default:
      return state;
  }
}
