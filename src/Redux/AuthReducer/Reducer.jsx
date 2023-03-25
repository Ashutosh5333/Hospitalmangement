import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  token:"",
  Userdetail:[]
};


export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SINGUPUSERREQ:
      return {
        ...state,
        isLoading: true,
      };
      
    case types.SINGUPUSERSUCESS:
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
          token:payload,
      }

      case  types.GETDETAILSUCESS : 
      return {
          ...state,
          isLoading:false,
          isError:false,
          Userdetail:payload,
      }


    default:
      return state;
  }
};

