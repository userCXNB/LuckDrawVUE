import * as types from "./types"
let mutations = {
    [types.SET_STATE]:(state,payload)=>{
      console.log(payload)
      console.log("mutations",state)
      state.demoData.a = payload.b
    }
};

export default mutations;