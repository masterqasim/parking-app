const initialState={
    feedbacks:[]
}
const adminFeedbacks=(state=initialState,action)=>{
    switch(action.type){
        case 'ADMIN_FEEDBACK':
            console.log(action.b)
        return{
            feedbacks:action.b
        };
        default:
        return state
    }
}
export default adminFeedbacks