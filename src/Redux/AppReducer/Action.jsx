import * as types  from "./ActionTypes"
import axios from "axios"

 const token = JSON.parse(localStorage.getItem("token"))

//  ----------  Doctor  Data ------------- 

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


//  ---------- Single Doctor  Data ------------- 

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

// --------- Room data ---------- //


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


// --------- Specility data ---------- //


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

// ----------------- Add to cart --------------- 

const AddtocartReq = () =>{
    return {
      type :types.ADDTOCARTREQ
    }
}

const AddtocartFailure = () =>{
   return {
     type :types.ADDTOCARTFAILURE
   }
}


 const AddTocartsucess = (payload) =>{
      return {
         type :types.ADDTOCARTSUCESS,
         payload
      }
}

       // -------- get cart data ----------- //

const GettocartReq = () =>{
   return {
     type :types.GETCARTREQ
   }
}

const GettocartFailure = () =>{
  return {
    type :types.GETCARTFAILURE
  }
}

const GetTocartsucess = (payload) =>{
     return {
        type :types.GETCARTSUCESS,
        payload
     }
}

// ------------- Delete cart ------------- //


const DeletecartReq = () =>{
   return {
     type :types.GETCARTREQ
   }
}

const DeletecartFailure = () =>{
  return {
    type :types.GETCARTFAILURE
  }
}

const Deletecartsucess = () =>{
     return {
        type :types.GETCARTSUCESS,
     }
}

   // ----------- book Appoinmet  --------------- //
   
const bookappointReq = () =>{
   return {
     type :types.BOOKAPPOINMETREQ
   }
}

const bookappointmentFailure = () =>{
  return {
    type :types.BOOKAPPOINMETFAILURE
  }
}

const bookappointmentsucess = (payload) =>{
     return {
        type :types.BOOKAPPOINMETUCESS,
        payload
     }
}

      // ---------- get Appointment data ------------- //
      
const getappointReq = () =>{
   return {
     type :types.GETAPPOINTDATAREQ
   }
}

const getappointmentFailure = () =>{
  return {
    type :types.GETAPPOINTDATAFAILURE
  }
}

const getappointmentsucess = (payload) =>{
     return {
        type :types.GETAPPOINTDATASUCESS,
        payload
     }
}




   // ------------- All Crud Request -----------  //


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

   // --------- Single Docter ----------- //
 
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

 // --------- Room ----------- //

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

   //  ----------------   Cart  --------------- //

   
export const AddToCartData =(payload) =>  (dispatch) =>{
   dispatch(AddtocartReq())
  return axios.post(`https://tame-plum-narwhal-kilt.cyclic.app/cart/create`, payload,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((r) =>{
return        dispatch(AddTocartsucess(r.data))
   })
   .catch((err) =>{
       dispatch(AddtocartFailure())
   })

} 


   
export const GetCartData = (dispatch) =>{
   dispatch(GettocartReq())
  return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app/cart`,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((r) =>{
return        dispatch(GetTocartsucess(r.data))
   })
   .catch((err) =>{
       dispatch(GettocartFailure())
   })

} 

        //  ------------------- Delete Cart Item -------------------   //  
   
   
export const DeleteCartData = (_id) => (dispatch) =>{
   dispatch(DeletecartReq())
  return axios.delete(`https://tame-plum-narwhal-kilt.cyclic.app/cart/${_id}`,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((r) =>{
return        dispatch(Deletecartsucess())
   })
   .catch((err) =>{
 return      dispatch(DeletecartFailure())
   })

} 


   // ---------- Book Appointment data ----------- //

export const BookAppointment =(payload) =>  (dispatch) =>{
   dispatch(bookappointReq())
  return axios.post(`https://tame-plum-narwhal-kilt.cyclic.app//bookApoint/create`, payload,{
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((r) =>{
return        dispatch(bookappointmentsucess(r.data))
   })
   .catch((err) =>{
       dispatch(bookappointmentFailure())
   })

} 

   // -----------  get Appointment data  ------------  //

export const getAppointmentdata = (dispatch) =>{
   dispatch(getappointReq())
  return axios.get(`https://tame-plum-narwhal-kilt.cyclic.app//bookApoint`, {
   headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
  })
   .then((r) =>{
return        dispatch(getappointmentsucess(r.data))
   })
   .catch((err) =>{
       dispatch(getappointmentFailure())
   })

} 
