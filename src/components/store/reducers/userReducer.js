const initState = {
    availableSpace:[]
}
const searchSlot = (state = initState, action) => {
    switch(action.type){
      case 'SEARCH_SLOT':  
      console.log('data=>>',action.obj)
      return {
        availableSpace: action.obj
      };
      case 'RESERVE_SLOT':
        return{
          availableSpace: action.data
        };
      default :
      return state
    }
    
  };
  
  export default searchSlot;