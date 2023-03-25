import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  Doctordata: [],
  RoomData:[],
  SpecilityData:[],
  CartItem:[]
};



export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETDOCTORREQ:
      return {
        ...state,
        isLoading: true,
      };
      
    case types.GETDOCTORSUCESS:
      return {
        ...state,
        isLoading: false,
        Doctordata: payload,
      };

      case types.GETDOCTORFAILURE:
      return {
        ...state,
        isLoading: true,
        Doctordata: [],
      };

      case types.GETROOMSUCESS:
      return {
        ...state,
        isLoading: false,
        RoomData: payload,
      };
      case types.GETSPECILITYDATASUCESS:
        return {
          ...state,
          isLoading: false,
          SpecilityData: payload,
        };

        // case types.ADDTOCARTSUCESS:
        //   return {
        //     ...state,
        //     isLoading: false,
        //     CartItem: payload,
        //   };


    default:
      return state;
  }
};


