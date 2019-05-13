import * as types from "./types"; 

let action = {
    setWX({commit,state},payload){
         commit(types.SET_WX,payload)
    },
    setSwitchStatus({commit,state},payload){
         console.log(payload)
         commit(types.SET_SWITCH_STATUS,payload)
    },
    setOrganization({commit,state},payload){
          commit(types.SET_ORGANIZATION,payload)   
    },
    setFrameData({commit,state},payload){
         console.log(payload)
     commit(types.SET_FRAMEDATA,payload)   
    },
    setUserName({commit,state},payload){
     console.log(payload)
     commit(types.SET_USERNAME,payload)   
     }


}

export default action;