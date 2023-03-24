import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  token:"",
};

const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SINGUPUSERREQ:
      return {
        ...state,
        isLoading: true,
      };
      
    case types.SINGUPUSERFAILURE:
      return {
        ...state,
        isLoading: false,
      };

      case types.SINGUPUSERFAILURE:
      return {
        ...state,
        isLoading: true,
      };
      case  types.LOGINUSERSUCESS : 
      return {
          ...state,
          isLoading:false,
          isError:false,
          token:payload
      }

    default:
      return state;
  }
};

export default Reducer;
