import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import * as firebase from 'firebase'
import { light } from '@material-ui/core/styles/createPalette';
import { orange } from '@material-ui/core/colors';
import { borderRadius } from '@material-ui/system';
export class Feedback extends Component {
    state={
        value:'',
        reply:'',
        uid:localStorage.getItem("userUid"),
        isreply:false
    }
    componentDidMount(){
        {firebase.database().ref('feedback/'+this.state.uid).on("value",(data)=>{
            let a=data.val()
            if(data.val()){
                let b=a.value
                this.setState({
                    value:b,
                    reply:a.reply,
                    isreply:true
                })
            }
            
        })}
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }
    submit=()=>{
      
        if(this.state.value==='' || this.state.value===' '){
            alert('write some thing')
            // this.setState({isreply:false})
        }else{     
               console.log(this.state.value)
               let userUid = localStorage.getItem("userUid");
               let obj={
                   value:this.state.value,
                   reply:''
             }
               firebase.database().ref('feedback/'+userUid).set(obj).then(()=>{
                   this.setState({isreply:true})
               })
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <Paper>
                <h3 style={{margin:'15px'}}>Feedback</h3>
                <div style={{ margin:'20px' , height:'200px' }}>
                    <p style={{textAlign:"right"}}>
                        <span style={{ backgroundColor:' #ffd596 ',padding:'3px' ,borderRadius:'50px 50px 0px 50px'}}>
                            {this.state.value}
                        </span>
                    </p>
                    <p style={{}}>
                        <span style={{ backgroundColor:' #ffd596 ',padding:'3px' ,borderRadius:'0px 50px 50px 50px'}}>
                            {this.state.reply}
                        </span>
                    </p>
                </div>
               {!this.state.isreply? <div style={{ margin:'20px' , height:'200px' }}>
                <TextField
                    id="standard-textarea"
                    label="Your feedback"
                    placeholder="Feedback"
                    multiline
                    value={this.state.value}
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
                </div>:<div></div>}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
