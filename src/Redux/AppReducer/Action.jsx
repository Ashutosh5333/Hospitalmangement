import * as types  from "./ActionTypes"
import axios from "axios"


 const getdatareq = () =>{
     return {
        type:types.GETDOCTORREQ 
     }
 }
 
 const getdatasuccess = (payload) =>{
    return {
       type:types.GETDOCTORSUCESS,
       payload 
    }
}

const getdatafailure = () =>{
    return {
       type:types.GETDOCTORFAILURE 
    }
}


const getsingledatareq = () =>{
    return {
       type:types.GETDOCTORREQ 
    }
}

const getsingledatasuccess = (payload) =>{
   return {
      type:types.GETDOCTORSUCESS,
      payload 
   }
}

const getsingledatafailure = () =>{
   return {
      type:types.GETDOCTORFAILURE 
   }
}

// --------- Room ---------- //


const getroomdatareq = () =>{
    return {
       type:types.GETROOMREQ 
    }
}

const getroomdatasuccess = (payload) =>{
   return {
      type:types.GETROOMSUCESS,
      payload 
   }
}

const geroomdatafailure = () =>{
   return {
      type:types.GETROOMFAILURE 
   }
}


// --------- Specility ---------- //


const getspecilitydatareq = () =>{
   return {
      type:types.GETSPECILITYDATAREQ 
   }
}

const getspecilitydatasuccess = (payload) =>{
  return {
     type:types.GETSPECILITYDATASUCESS,
     payload 
  }
}

const getspecilitydatafailure = () =>{
  return {
     type:types.GETSPECILITYDATAFAILURE 
  }
}


 export const GetDoctorData = (dispatch) =>{
     dispatch(getdatareq())
    return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/doctor`)
     .then((r) =>{
 return        dispatch(getdatasuccess(r.data))
     })
     .catch((err) =>{
         dispatch(getdatafailure())
     })

 } 

 
 export const GetSingleDoctorData = (_id) => (dispatch) =>{
    dispatch(getsingledatareq())
   return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/doctor/${_id}`)
    .then((r) =>{
return        dispatch(getsingledatasuccess(r.data))
    })
    .catch((err) =>{
        dispatch(getsingledatafailure())
    })

} 


export const GetRoomData =  (dispatch) =>{
    dispatch(getroomdatareq())
   return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/room`)
    .then((r) =>{
return        dispatch(getroomdatasuccess(r.data))
    })
    .catch((err) =>{
        dispatch(geroomdatafailure())
    })

} 

// ------------- Specility ------------ //


export const GetSpecilityData =  (dispatch) =>{
   dispatch(getspecilitydatareq())
  return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/specilty`)
   .then((r) =>{
return        dispatch(getspecilitydatasuccess(r.data))
   })
   .catch((err) =>{
       dispatch(getspecilitydatafailure())
   })

} 

