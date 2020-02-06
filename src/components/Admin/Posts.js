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
import {allPosts} from '../store/actions/userAction'

export class Bookings extends Component {
    state={
        arr:[],
    }
    componentDidMount(){
       this.props.allPosts()
    }
    render() {
        console.log(this.props.Posts)
        return (
            <Container>
                <p>All Posts</p>
                {this.props.Posts?
                <Paper style={{height:'400px' ,overflow:'scroll'}}>
                    {this.props.Posts.map((data,index)=>{
                        return<div key={index} style={{borderBottom:'1px solid orange',padding:'10px'}}>
                            <span><b>Area :</b> {data.area}</span> <br/>
                            <span><b>Date :</b> {data.date+':'+data.month+':'+data.year}</span>
                            <p>{}</p>
                        </div>
                        
                    })

                    } 
                </Paper>
                :
                <div></div>
                }
               
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        Posts:state.adminReducer.allPosts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        allPosts:()=>dispatch(allPosts())
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(Bookings)
