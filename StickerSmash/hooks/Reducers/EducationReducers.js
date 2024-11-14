

// src/reducers/index.js
const initialState = {
    educationList: [],
    selectedEducation: null,
    curriculum:[
      'British','American ','International Baccalaureate (IB)',
      'CBSE','ICSC','SABIS','IGCSE','MOE','Pakistani',
      'Special Needs','French','Russian','Japanese','Filipino','Iranian',
      'CISCE','German','Italian','Islamic','Canadian','Indian','Other','Philippine','CISE','EYFS'
      ]
  };
  
  const EducationReducers = (state = initialState, action) => {
   // //debugger
    switch (action.type) {
      case "GetData":
        return { ...state, educationList: action.payload };
        case "UpdateData":
          //debugger
          if(state.educationList[action.payload.index])
          {
            state.educationList[action.payload.index] = action.payload.educationList;
            let newList = [...state.educationList];
            return {...state, educationList: newList}
          } else
          {
            return {...state, educationList: state.educationList}
          }
      default:
        return state;
    }
  };
  
  export default EducationReducers;