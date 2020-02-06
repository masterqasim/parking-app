const initState = {
    profile:[]
}
const profileReducer = (state = initState, action) => {
    switch(action.type){
      case 'PROFILE':  
      console.log('data=>>',action.arr)
      return {
        profile: action.arr
      };
      default :
      return state
    }
    
  };
  
  export default profileReducer;