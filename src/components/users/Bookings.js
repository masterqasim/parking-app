import React, { Component } from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import * as firebase from 'firebase'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import {getPosts} from '../store/actions/userAction';
import {deletePost} from '../store/actions/userAction'

export class Bookings extends Component {
    state={
        arr:[],
        
    }
    componentDidMount(){
        this.props.getPosts()
    }
    btnStyle = {
        border:'none',
        borderRadius : '50%',
        cursor:'pointer',
        float:'right',
        color: '#4f4f4f', 
    }

    render() {
        console.log(this.props.userPost)
        return (
            <Container style={{backgroundColor:'white'}}>
                <div >
                <h3>Bookings</h3>
                {this.props.userPost?
                <div style={{height:'400px',overflow:'scroll'}}>
                    
                    {this.props.userPost.map((data,index)=>{
                        return<div key={index} style={{border:'1px solid pink',padding:'2px',backgroundColor:'white',width:'50%'}}>
                            
                    <DeleteIcon
                    style={this.btnStyle}
                    onClick={()=>this.props.deletePost(data.id,data.area)}
                    />     
                    <p><b>Area :</b> {data.area}</p>
                    <p><b>Date :</b> {data.date}</p>
                    <p><b>month :</b> {data.month}</p>
                    <p><b>Year :</b> {data.year}</p>
                    <p></p>
                    </div>
                        
                    })

                    }
                </div>
                :
                <div></div>
                }
               
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userPost:state.userPost.userPosts
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        getPosts:()=>dispatch(getPosts()),
        deletePost:(id,area)=>dispatch(deletePost(id,area))
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps) (Bookings)
