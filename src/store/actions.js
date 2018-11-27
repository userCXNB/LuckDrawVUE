import * as types from "./types"; 

let action = {
    setState({commit,state},payload){
        console.log('actions',payload)
        let obj = Object.assign({},state.demoData,{'b':payload+'999'})
        console.log(obj)
         commit(types.SET_STATE,obj)
    }
}

export default action;