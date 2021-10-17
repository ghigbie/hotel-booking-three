const defaultState =  { name: "Billy", role: "Seller"};
const authReducer = (state = defaultState, action) => {
  switch(action.type){
    case "LOGGED_IN_USER":
      return {...state, ...action.payload};
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;