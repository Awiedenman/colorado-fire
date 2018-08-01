
export const currentFireReducer = (state=[], action) => {
  switch (action.type) {
    case 'STORE_CURRENT_FIRE_DATA':
    console.log(action.firesFromDb);
      return [...action.cleanedCurrentFireData, ...action.firesFromDb];
    case 'ADD_UNVERIFIED_FIRE':
      return [...state, action.unverifiedFiresFromDb];
    default:
      return state;
  }
};