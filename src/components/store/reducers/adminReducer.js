const initState = {
    allPosts:[]
}
const allPosts = (state = initState, action) => {
    switch(action.type){
      case 'ALL_POSTS':  
      console.log('data=>>',action.arr)
      return {
        allPosts: action.arr
      };
      case 'DELETE':
        return{
            allPosts: action.data
        };
      default :
      return state
    }
    
  };
  
  export default allPosts;