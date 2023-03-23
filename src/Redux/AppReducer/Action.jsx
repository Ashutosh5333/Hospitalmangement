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