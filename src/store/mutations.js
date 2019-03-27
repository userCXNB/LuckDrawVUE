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
        state.switchStatus.banner = payload.banner
        state.switchStatus.menu = payload.menu
       }else{
        state.switchStatus.banner = !state.switchStatus.banner
       }
    },
    [types.SET_ORGANIZATION]:(state,payload)=>{
       state.organization = payload
   }

};

export default mutations;