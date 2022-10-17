// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const GET_SHOPPINGCARTS = 'shoppingCarts/GET_SHOPPINGCARTS';
const CREATE_SHOPPINGCART = 'shoppingCarts/CREATE_SHOPPINGCART';
const EDIT_SHOPPINGCART = 'shoppingCarts/EDIT_SHOPPINGCART';
const DELETE_SHOPPINGCART = 'shoppingCarts/DELETE_SHOPPINGCART';
const CLEAR_SHOPPINGCART = 'shoppingCarts/CLEAR_SHOPPINGCART';

// Action Creators
const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const getShoppingCartsAction = (shoppingCarts) => {
  return {
      type: GET_SHOPPINGCARTS,
      shoppingCarts
  }
}

const createShoppingCartAction = (shoppingCart) => {
  return {
      type: CREATE_SHOPPINGCART,
      shoppingCart
  }
}

const editShoppingCartAction = (shoppingCart) => {
  return {
      type: EDIT_SHOPPINGCART,
      shoppingCart
  }
}

export const deleteShoppingCartAction = (shoppingCartId) => {
  return {
      type: DELETE_SHOPPINGCART,
      shoppingCartId
  }
}

export const clearShoppingCartAction = () => {
  return {
      type: CLEAR_SHOPPINGCART
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

export const getAllShoppingCarts = () => async dispatch => {
  const res = await fetch('/api/shoppingCarts');

  if (res.ok) {
      const shoppingCarts = await res.json();
      dispatch(getShoppingCartsAction(shoppingCarts.shoppingCarts));
  }
};

export const createShoppingCart = (shoppingCartData) => async dispatch => {
  const res = await fetch(`/api/shoppingCarts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shoppingCartData)
  });

  if (res.ok) {
      const shoppingCart = await res.json();
      dispatch(createShoppingCartAction(shoppingCart));
      return shoppingCart;
  }
};

export const editShoppingCart = (shoppingCartId, editShoppingCartData) => async dispatch => {
  const res = await fetch(`/api/shoppingCarts/${shoppingCartId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editShoppingCartData)
  });

  if (res.ok) {
      const shoppingCart = await res.json();
      dispatch(editShoppingCartAction(shoppingCart));
      return shoppingCart;
  }
};

export const deleteShoppingCart = (shoppingCartId) => async dispatch => {
  const res = await fetch(`/api/shoppingCarts/${shoppingCartId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
      const shoppingCart = `${shoppingCartId}`
      dispatch(deleteShoppingCartAction(shoppingCart))
  }
}

const initialState = { user: null };

//Reducer
export default function reducer(state = initialState, action) {
  const newState = { ...state }
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case GET_SHOPPINGCARTS:
        action.shoppingCarts.forEach(shoppingCart => newState[shoppingCart.id] = shoppingCart)
        return newState;
    case CREATE_SHOPPINGCART:
        newState[action.shoppingCart.id] = action.shoppingCart
        return newState;
    case EDIT_SHOPPINGCART:
        newState[action.shoppingCart.id] = action.shoppingCart
        return newState;
    case DELETE_SHOPPINGCART:
        delete newState[action.shoppingCartId]
        return newState;
    case CLEAR_SHOPPINGCART:
        return {}
    default:
      return state;
  }
}
