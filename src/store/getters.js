let getters = {
    getData:(state)=>{
      console.log('...')
      return state.demoData
    },
    getSwitchStatus:(state)=>{
      console.log('we')
      return state.switchStatus
    },
    getOrganization:(state)=>{
      return state.organization
    }
};

export default getters;