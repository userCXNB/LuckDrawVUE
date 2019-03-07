import * as types from "./types"
let mutations = {
    [types.SET_STATE]:(state,payload)=>{
      console.log(payload)
      console.log("mutations",state)
      state.demoData.a = payload.b
    },
    [types.SET_SWITCH_STATUS]:(state,payload)=>{
       //解决banner导航现隐
       if(payload){
        state.switchStatus = payload
       }else{
        state.switchStatus = !state.switchStatus
       }
    }

};

export default mutations;