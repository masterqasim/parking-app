const initState ={
    userPosts:[]
}
const userPost = (state = initState, action) => {
    console.log(action.data)  
    switch(action.type){ 
        case 'GET_POSTS':
          return {
            userPosts : action.arr
          };
          case 'DELETE_POST':
            return {
              userPosts: [...state.userPosts.filter(userPosts=>
                userPosts.id !== action.id
                )]
            };  
        default :
        return state
      }
      
    };
    
    export default userPost;