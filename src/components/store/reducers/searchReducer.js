const initState = {
    searchData:{}
}
const searchthis = (state = initState, action) => {
  console.log(action.data)  
  switch(action.type){ 
      case 'SEARCH_THIS':
        return {
            searchData : action.data
        };
      default :
      return state
    }
    
  };
  
  export default searchthis;