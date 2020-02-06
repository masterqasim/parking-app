import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Post from './Posts'
import {connect} from 'react-redux'
import {islogin} from '../store/actions/globalAction'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocalParking from '@material-ui/icons/LocalParking'
import History from '@material-ui/icons/History'
import Feedback from './Feedback'
export class Admin extends Component {
    componentDidMount(){
        this.props.islogin()
    }
    render() {
        return (
            
                <Container  style={{ margin:'1%',height:'550px', marginTop:'70px',backgroundColor:'#f5f5f5'}}>
                    <Grid container >
                        <Grid item xs={12} sm={12} lg={2} xl={2} style={{marginTop:'5%'}}>
                        <List>
                           <ListItem>
                               <Link to='/Admin/Posts' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <LocalParking />
                                        <h3>Posts</h3>
                                    </Button>
                                </Link>
                           </ListItem>
                           <ListItem>
                           <Link to='/Admin/Feedback' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <LocalParking />
                                        <h3>Feedback</h3>
                                    </Button>
                                </Link>
                           </ListItem>
                       </List>

                        </Grid>
                        <Grid item xs={12} sm={12} lg={10} xl={10}
                            style={{ 
                                marginTop:'50px',
                                padding:'3px'   
                            }}
                        >
                            <Route exact path="/Admin/Posts" component={Post}/>
                            <Route path="/Admin/Feedback" component={Feedback}/>
                          
                        </Grid>
                    </Grid>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        login:state.globalReducer.islogin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        islogin:()=>dispatch(islogin())
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(Admin)
