export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.index);
    case 'RESET_LIST':
      return [];
    default:
      return state;
  }
};
