import * as types from "./ActionTypes";


const initailState = {
  Doctordata: [],
  isLoading: false,
  isError: false,
};

const Reducer = (state = initailState, action) => {
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

    default:
      return state;
  }
};

export default Reducer;
