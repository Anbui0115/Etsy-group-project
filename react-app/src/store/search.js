// Types
const GET_SEARCHRESULTS = "items/GET_SEARCHRESULTS";

// Action Creators
const getSearchResultsAction = (items) => {
  return {
    type: GET_SEARCHRESULTS,
    items,
  };
};

// Thunks
export const getSearchResults = (q = undefined) => async (dispatch) => {
  const fetchUrl = !q ? `/api/items` : `/api/items?q=${q}`;
  console.log(fetchUrl)

  const res = await fetch(fetchUrl);
  // const res = await fetch(`/api/items`);

  if (res.ok) {
    const items = await res.json();
    if (q !== undefined) {
      //we're trying to search items, because we have q
      dispatch(getSearchResultsAction(items.items))
    }
    else {
      // we're trying to get all items, because there's not q
      dispatch(getItemsAction(items.items));
    }
  }
};

export const createItem = (itemData) => async (dispatch) => {
  // if (!itemData.imageUrl) itemData.imageUrl = "https://media.istockphoto.com/photos/scattered-crumbs-of-butter-cookies-on-white-background-picture-id1222390473?k=20&m=1222390473&s=612x612&w=0&h=6UXsl_v8Kp2aG6ykg3l4lSHjoB4biCndCx2OVIiHNSQ="
  console.log("item data inside create item thunk-----", itemData);
  const res = await fetch(`/api/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemData),
  });
  if (res.ok) {
    const item = await res.json();
    dispatch(createItemAction(item));
    return item;
  }
};

export const editItem = (itemId, editItemData) => async (dispatch) => {
  const res = await fetch(`/api/items/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editItemData),
  });

  if (res.ok) {
    const item = await res.json();
    dispatch(editItemAction(item));
    return item;
  }
};

export const deleteItem = (itemId) => async (dispatch) => {
console.log('itemID inside delete thunk!!!!!',itemId)//undefined
  const res = await fetch(`/api/items/${itemId}`, {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const item = `${itemId}`;
    dispatch(deleteItemAction(item));
  }
};

const initialState = {};

// Reducer
export default function itemsReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case GET_ITEMS:
      newState = { };
      action.items.forEach((item) => (newState[item.id] = item));
      return newState
    // case CLEAR_ITEMS:
    //     return {}
    default:
      return state;
  }
}
