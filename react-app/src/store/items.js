// Types
const GET_ITEMS = 'items/GET_ITEMS';
const CREATE_ITEM = 'items/CREATE_ITEM';
const EDIT_ITEM = 'items/EDIT_ITEM';
const DELETE_ITEM = 'items/DELETE_ITEM';
// const CLEAR_ITEMS = 'items/CLEAR_ITEM';

// Action Creators
const getItemsAction = (items) => {
    return {
        type: GET_ITEMS,
        items
    }
}

const createItemAction = (item) => {
    return {
        type: CREATE_ITEM,
        item
    }
}

const editItemAction = (item) => {
    return {
        type: EDIT_ITEM,
        item
    }
}

export const deleteItemAction = (itemId) => {
    return {
        type: DELETE_ITEM,
        itemId
    }
}

// export const clearItemAction = () => {
//     return {
//         type: CLEAR_ITEMS
//     }
// }


// Thunks
export const getAllItems = () => async dispatch => {
    const res = await fetch('/api/items');

    if (res.ok) {
        const items = await res.json();
        dispatch(getItemsAction(items.items));
    }
};

export const createItem = (itemData) => async dispatch => {
    // if (!itemData.imageUrl) itemData.imageUrl = "https://media.istockphoto.com/photos/scattered-crumbs-of-butter-cookies-on-white-background-picture-id1222390473?k=20&m=1222390473&s=612x612&w=0&h=6UXsl_v8Kp2aG6ykg3l4lSHjoB4biCndCx2OVIiHNSQ="

    const res = await fetch(`/api/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
    });

    if (res.ok) {
        const item = await res.json();
        dispatch(createItemAction(item));
        return item;
    }
};

export const editItem = (itemId, editItemData) => async dispatch => {
    const res = await fetch(`/api/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editItemData)
    });

    if (res.ok) {
        const item = await res.json();
        dispatch(editItemAction(item));
        return item;
    }
};

export const deleteItem = (itemId) => async dispatch => {
    const res = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        const item = `${itemId}`
        dispatch(deleteItemAction(item))
    }
}

const initialState = {}

// Reducer
export default function itemsReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_ITEMS:
            action.items.forEach(item => newState[item.id] = item)
            return newState;
        case CREATE_ITEM:
            newState[action.item.id] = action.item
            return newState;
        case EDIT_ITEM:
            newState[action.item.id] = action.item
            return newState;
        case DELETE_ITEM:
            delete newState[action.itemId]
            return newState;
        // case CLEAR_ITEMS:
        //     return {}
        default:
            return state;
    }
}
