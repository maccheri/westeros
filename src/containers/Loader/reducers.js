export const loading = (state = false, action) => { 
  switch(action.type) {
    case 'LOADING':
      return true;
    default:
      return false;
  }
}
