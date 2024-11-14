import { configureStore } from '@reduxjs/toolkit'
// ...

const initialState = {
    educationList: [],
    selectedUser: {email:'naveedgul'},
    selectedEducation: null,
    curriculum:[
      'British','American ','International Baccalaureate (IB)',
      'CBSE','ICSC','SABIS','IGCSE','MOE','Pakistani',
      'Special Needs','French','Russian','Japanese','Filipino','Iranian',
      'CISCE','German','Italian','Islamic','Canadian','Indian','Other','Philippine','CISE','EYFS'
      ]
  };
  
  const EducationReducers = (state = initialState, action:any) => {
   // //debugger
    switch (action.type) {
        case "UserSuccess":
            debugger;
            return {...state, selectedUser: action.payload}
      case "GetData":
        return { ...state, educationList: [] };
        case "UpdateData":

            return {...state}
          
      default:
        return state;
    }
  };



const store = configureStore({
  reducer: {
    posts: EducationReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;