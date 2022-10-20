const GET_SEARCHITEMS = "items/GET_SEARCHITEMS";


export const getSearchAction = (items) => {
    return {
      type: GET_SEARCHITEMS,
      items,
    };
  };

const initialState = {};

  // Reducer
export default function searchReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_SEARCHITEMS:
            newState = { };
            action.items.forEach((item) => (newState[item.id] = item));
            return newState
        default:
            return state;
    }
}
