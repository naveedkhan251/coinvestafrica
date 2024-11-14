

// src/reducers/index.js
const initialState = {
    loggedInUser:{email:'naveed@g.com'},
    error:''
  };
  
  const AuthReducers = (state = initialState, action) => {
   // //debugger
    switch (action.type) {
      case "LoginSuccess":
        return { ...state, loggedInUser: {email:'nnnnn@gmail.com'} };
        case "RegisterSuccess": 
            return {...state, error: ''}
          
      default:
        return state;
    }
  };
  
  export default AuthReducers;