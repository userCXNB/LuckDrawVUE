import * as types from "./types"
let mutations = {
      [types.SET_WX]:(state,payload)=>{
         console.log(payload)
      state.WXcheck.name = payload
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
      },
      [types.SET_FRAMEDATA]:(state,payload)=>{
         console.log(payload)
         state.frameData.name = payload
      },
      [types.SET_USERNAME]:(state,payload)=>{
         if(payload){//payload为vue实例
            payload.$axios.get(
               '/api/user/getUserCommonInfo'
             ).then((res)=>{
                state.userName = res.data.data.userName
             })
         }else{
                state.userName = ''
         }

      },
};

export default mutations;