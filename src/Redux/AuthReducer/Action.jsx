import * as types  from "./ActionTypes"
import axios from "axios"


 const getsignreq = () =>{
     return {
        type:types.SINGUPUSERREQ 
     }
 }
 
 const getsignsuccess = (payload) =>{
    return {
       type:types.SINGUPUSERSUCESS,
       payload 
    }
}

const getsignfailure = () =>{
    return {
       type:types.SINGUPUSERFAILURE 
    }
}

     // ---------------

const getLogindatareq = () =>{
    return {
       type:types.LOGINUSERREQ 
    }
}

const getLogindatasuccess = (payload) =>{
   return {
      type:types.LOGINUSERSUCESS,
      payload 
   }
}

const geLogindatafailure = () =>{
   return {
      type:types.LOGINUSERFAILURE
   }
}


 export const GetSignup = (dispatch) =>{
     dispatch(getsignreq())
    return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/signup`)
     .then((r) =>{
 return        dispatch(getsignsuccess(r.data))
     })
     .catch((err) =>{
         dispatch(getsignfailure())
     })

 } 
