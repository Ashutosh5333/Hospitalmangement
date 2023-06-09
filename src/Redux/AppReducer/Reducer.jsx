import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  Doctordata: [],
  RoomData:[],
  SpecilityData:[],
  CartItem:[],
  BookAppointmentData :[]
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

        case types.GETCARTSUCESS:
          return {
            ...state,
            isLoading: false,
            CartItem: payload,
          };

          case types.GETAPPOINTDATASUCESS:
            return {
              ...state,
              isLoading: false,
              BookAppointmentData: payload,
            };


    default:
      return state;
  }
};


