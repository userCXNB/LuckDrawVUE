let getters = {
    getWX:(state)=>{
      return state.WXcheck
    },
    getSwitchStatus:(state)=>{
      console.log('we')
      return state.switchStatus
    },
    getOrganization:(state)=>{
      return state.organization
    },
    getFrameData:(state)=>{
      return state.frameData
    },
    getUserName:(state)=>{
      return state.userName
    },
};

export default getters;