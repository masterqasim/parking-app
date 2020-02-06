import * as firebase from "firebase"

export const searchSlots = (data)=>{
    return(dispatch,getState)=>{
        // console.log(getState().searchReducer.searchData)
        console.log(getState().searchthis)
        let arr=[];
        let obj={
            slot1:false,
            slot2:false,
            slot3:false,
            slot4:false,
            slot5:false,
            slot6:false
        }
        firebase.database().ref(data.area+'/').on("value",(d)=>{
           let result =d.val();
           let b= getState().searchthis.searchData
           console.log(b,'=============')
            for(var key in result){
                arr.push(result[key])
                let a=result[key];
                if(data.area===a.area &&a.slotNO===1 && data.date===a.date && data.month===a.month&&data.year===a.year &&(data.stime>a.stime&&data.stime<a.etime ||data.etime>a.stime &&data.etime<a.etime ||data.stime<a.stime&&data.etime>a.etime)){
                console.log('allah',data.slotNO)
                    obj.slot1=true;
                console.log(obj.slot1)
                }else if(data.area===a.area &&a.slotNO===2 && data.date===a.date && data.month===a.month&&data.year===a.year &&(data.stime>a.stime&&data.stime<a.etime ||data.etime>a.stime &&data.etime<a.etime ||data.stime<a.stime&&data.etime>a.etime)){
                    obj.slot2=true;
                    console.log(obj.slot2)
                }else if(data.area===a.area &&a.slotNO===3 && data.date===a.date && data.month===a.month&&data.year===a.year &&(data.stime>a.stime&&data.stime<a.etime ||data.etime>a.stime &&data.etime<a.etime ||data.stime<a.stime&&data.etime>a.etime)){
                    obj.slot3=true;
                    console.log(obj.slot3)
                }
          
                // else if(data.area===b.area &&b.slotNO===1 && data.date===b.date && data.month===b.month&&data.year===b.year &&(data.stime>b.stime&&data.stime<b.etime ||data.etime>b.stime &&data.etime<b.etime ||data.stime<b.stime&&data.etime>b.etime)){
                //     obj.slot1=true;
                //     console.log(b)
                // }
                //else if(data.area===a.area &&a.slotNO===5 && data.date===a.date && data.month===a.month&&data.year===a.year &&(data.stime>a.stime&&data.stime<a.etime ||data.etime>a.stime &&data.etime<a.etime ||data.stime<a.stime&&data.etime>a.etime)){
                //     obj.slot5=true;
                // }else if(data.area===a.area &&a.slotNO===6 && data.date===a.date && data.month===a.month&&data.year===a.year &&(data.stime>a.stime&&data.stime<a.etime ||data.etime>a.stime &&data.etime<a.etime ||data.stime<a.stime&&data.etime>a.etime)){
                //     obj.slot6=true;
                // }
                else{
                    console.log('nothing',a)
                }
                console.log(obj)
            }
            dispatch({ type: 'SEARCH_SLOT', obj })
            
        })
        setTimeout(()=>{
            dispatch({ type: 'SEARCH_SLOT', obj })
            obj={
            slot1:false,
            slot2:false,
            slot3:false
            }
        },1000)
    }
}
export const reserveSlot=(data)=>{
    return(dispatch,getState)=>{
        console.log(data)
        dispatch({type:'RESERVE_SLOT',data})
    }
}
export const profile=(data)=>{
    return(dispatch,getState)=>{
        firebase.database().ref('users/').on("value",(data)=>{
            let a= data.val()
            let arr=[]
            for(var key in a){
                // console.log(a[key])
                let obj={
                    name:a[key].fName,
                    lname:a[key].lName,
                    email:a[key].email,
                    uid:key
                }
                arr.push(obj)
            }
            dispatch({type:'PROFILE',arr})
            arr=[]
        })
    }
}
export const allPosts=()=>{
    return(dispatch,getState)=>{
        let arr=[]
        firebase.database().ref('/Area A/').on("value",(d)=>{
          let a=d.val();
            for(var key in a){
                    console.log(a[key])
                    let obj={
                        stime:a[key].stime,
                        etime:a[key].etime,
                        date:a[key].date,
                        month:a[key].month,
                        year:a[key].year,
                        area : a[key].area,
                        uid : a[key].uid,
                        slotNO:a[key].data ,
                        id:a
                      }
                      arr.push(obj)
            }
        })
        firebase.database().ref('/Area B/').on("value",(d)=>{
           let a=d.val();
            for(var key in a){
                let obj={
                    stime:a[key].stime,
                    etime:a[key].etime,
                    date:a[key].date,
                    month:a[key].month,
                    year:a[key].year,
                    area : a[key].area,
                    uid : a[key].uid,
                    slotNO:a[key].data ,
                    id:a
                  }
                  arr.push(obj)
            }
        })
        firebase.database().ref('/Area C/').on("value",(d)=>{
           let a=d.val();
            for(var key in a){
                    let obj={
                        stime:a[key].stime,
                        etime:a[key].etime,
                        date:a[key].date,
                        month:a[key].month,
                        year:a[key].year,
                        area : a[key].area,
                        uid : a[key].uid,
                        slotNO:a[key].data,
                        id:a 
                      }
                      arr.push(obj)
            }
        })
        setTimeout(()=>{
            dispatch({type:'ALL_POSTS',arr})
        },1000)
        
    }
}
export const searchable=(data)=>{
    return(dispatch,getState)=>{
        dispatch({type:'SEARCH_THIS',data})
    }
}
export const deletePost=(id,area)=>{
    console.log(id,area)
    return(dispatch,getState)=>{
        firebase.database().ref(area+'/'+id).remove().then(()=>{
            dispatch({type:'DELETE_POST',id})   
        })
    }
}
export const adminFeedback =()=>{
    return(dispatch,getState)=>{
        firebase.database().ref("feedback/").on("value",(data)=>{
            let a= data.val()
            let b=[]
            for(var key in a){
                let obj={
                    data:a[key].value,
                    reply:a[key].reply,
                    id:key
                }
                b.push(obj)
            }
            dispatch({type:'ADMIN_FEEDBACK',b})
        })
        
    }
}

export const getPosts=(data)=>{
    return(dispatch,getState)=>{
        let arr=[]
        firebase.database().ref('/Area A/').on("value",(d)=>{
            // console.log(d.val())
          let a=d.val();
          let uid=localStorage.getItem("userUid");
            for(var key in a){
                if(a[key].uid===uid){
                    let obj={
                        stime:a[key].stime,
                        etime:a[key].etime,
                        date:a[key].date,
                        month:a[key].month,
                        year:a[key].year,
                        area : a[key].area,
                        uid : a[key].uid,
                        slotNO:a[key].data,
                        id:key
                      }
                      arr.push(obj)
                }
            }
        })
        firebase.database().ref('/Area B/').on("value",(d)=>{
            // console.log(d.val())
           let a=d.val();
           let uid=localStorage.getItem("userUid");
            for(var key in a){
                if(a[key].uid===uid){
                    let obj={
                        stime:a[key].stime,
                        etime:a[key].etime,
                        date:a[key].date,
                        month:a[key].month,
                        year:a[key].year,
                        area : a[key].area,
                        uid : a[key].uid,
                        slotNO:a[key].data,
                        id:key 
                      }
                      arr.push(obj)
                }
            }
        })
        firebase.database().ref('/Area C/').on("value",(d)=>{
            // console.log(d.val())
           let a=d.val();
           let uid=localStorage.getItem("userUid");
            for(var key in a){
                if(a[key].uid===uid){
                    let obj={
                        stime:a[key].stime,
                        etime:a[key].etime,
                        date:a[key].date,
                        month:a[key].month,
                        year:a[key].year,
                        area : a[key].area,
                        uid : a[key].uid,
                        slotNO:a[key].data,
                        id:key 
                      }
                      arr.push(obj)
                }
            }
        })
        dispatch({type:'GET_POSTS',arr})
        console.log(arr)
    }
}