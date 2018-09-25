export const houses = (state = [], action) => { 
  switch(action.type) {
    case 'GET_HOUSES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
