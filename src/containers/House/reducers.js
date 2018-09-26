export const members = (state = [], action) => { 
  switch(action.type) {
    case 'GET_MEMBERS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
