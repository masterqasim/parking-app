import React, { Component } from 'react'
import {islogin} from '../store/actions/globalAction'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LocalParking from '@material-ui/icons/LocalParking'
import History from '@material-ui/icons/History'
// import {Feedback as F} from '@material-ui/icons/Feedback'
import SupervisedUserCircleRounded from '@material-ui/icons/SupervisedUserCircleRounded'
import Button from '@material-ui/core/Button';
import MaterialUIPickers from './SearchForm'
import Space from './Space'
import BookingSpace from './BookingSpace'
import Bookings from './Bookings'
import * as firebase from "firebase";
import Feedback from './Feedback'

class Users extends Component {
    state={
        obj:''
    }
    componentDidMount(){
        this.props.islogin()
    }
    spaceCheak = (obj)=>{
        this.setState({obj})
    }
    render() {
        return (
            <Router>
                <Container  style={{ margin:'1%',height:'550px', marginTop:'70px',backgroundColor:'#f5f5f5'}}>
                    <Grid container >
                        <Grid item xs={12} sm={12} lg={2} xl={2} style={{marginTop:'5%'}}>
                        <List>
                           <ListItem>
                               <Link to='/User/Booking' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <LocalParking />
                                        <h3>book Space</h3>
                                    </Button>
                                </Link>
                           </ListItem>
                           <ListItem>
                            <Link to='/User/Bookings' style={{textDecoration:'none'}}>
                                    <Button fullWidth  size="small" >
                                        <History/>
                                        <h3>My Bookings</h3>
                                    </Button>
                                </Link>    
                           </ListItem>
                           <ListItem>
                           <Link to='/User/Feedback' style={{textDecoration:'none'}}>
                                <Button fullWidth  size="small" >
                                <History/>
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
                            <Route exact path="/User/Booking" component={BookingSpace}/>
                            <Route path="/User/Bookings" component={Bookings}/>
                            <Route path="/User/Feedback"  component={Feedback}/>
                          
                        </Grid>
                    </Grid>
                </Container>
            </Router>
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
export default  connect(mapStateToProps,mapDispatchToProps)(Users)
