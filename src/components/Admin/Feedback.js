import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import * as firebase from 'firebase'
import {connect} from 'react-redux'
import {adminFeedback,profile} from '../store/actions/userAction'
import { Grid, Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export class Feedback extends Component {
   
    state={
        users:[],
        replyID:'',
        input:'',
        data:''
    }
    componentDidMount(){
        this.props.adminFeedback()
        this.props.profile()
    }

    reply = (id,data) => {
      console.log(id,data)
      this.setState({replyID:id,data})
    };
    submit=(e)=>{
      if(this.state.input!==''&&this.state.input!==' '){
        let obj={
          reply:this.state.input,
          value:this.state.data
        }
        // this.setState({replyID:'',input:'',value:''})
        firebase.database().ref('feedback/'+this.state.replyID).set(obj).then(()=>{
          this.setState({replyID:'',input:'',value:''})
      })
        console.log(obj)
      }
      else{
        alert('input is empty')
      }
    }
    handleChange=(e)=>{
      this.setState({input:e.target.value})
    }
    render() {
      
        console.log(this.props.feedback)
        return (
            <Paper>
                <h3>Feedback</h3>
                {
                    this.props.feedback.map((data)=>{
                       return this.props.userProfile.map((nested)=>{
                            if(nested.uid===data.id){
                                return<div key={data.id} style={{margin:'5px',padding:'5px',borderBottom:'2px solid orange'}}>
                                    <Grid container>
                                        <Grid item style={{marginTop:'10px'}}>
                                            <Avatar>Q</Avatar>
                                        </Grid>
                                        <Grid item style={{marginLeft:'10px '}}>
                                            <p>{nested.email}</p>
                                            <p>From :{nested.name}</p>
                                        </Grid>
                                    </Grid>
                                   
                                    <span 
                                        style={{ 
                                            backgroundColor:' #ffd596 ',
                                            padding:'5px' ,
                                            borderRadius:'0px 50px 50px 50px'
                                            }}>
                                        {data.data}
                                    </span>
                                   <p style={{textAlign:"right"}}>
                                   <span style={{ 
                                            backgroundColor:' #ffd596 ',
                                            padding:'5px' ,
                                            borderRadius:'50px 50px 0px 50px'
                                            }}>
                                      {data.reply}
                                    </span>
                                   </p>
                                   {!data.reply ?<p style={{textAlign:"right"}}>
                                    <Button
                                    onClick={()=>{this.reply(nested.uid,data.data)}}
                                    >
                                        Reply
                                    </Button>
                                    </p>:<p></p>}
                                            
                                </div>

                            }                           
                        })                        
                    })
                }
               {this.state.replyID?<Paper>
               <TextField
                    id="standard-textarea"
                    label="Your feedback"
                    placeholder="Feedback"
                    multiline
                    value={this.state.input}
                    onChange={this.handleChange}
                    style={{width:'100%'}}
                />
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    color="primary"
                    style={{ 
                    margin: '16px auto ',
                    textAlign:'left',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    }}
                    onClick={this.submit}
                >
                    submit
                </Button>
               </Paper>:<div></div>}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        feedback:state.adminFeedbacks.feedbacks,
        userProfile:state.profileReducer.profile
    }
}
const mapDispatchToProps = dispatch => {
    return {
        adminFeedback:()=>dispatch(adminFeedback()),
        profile:()=>dispatch(profile())
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps) (Feedback)
