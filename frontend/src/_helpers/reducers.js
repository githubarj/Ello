export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.some((existingItem) => {
        return existingItem.id === action.payload.id;
      });
      if (!exists) {
        return [...state, action.payload];
      } else {
        return state;
      }
    }
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.index);
    case 'RESET_LIST':
      return [];
    default:
      return state;
  }
};
