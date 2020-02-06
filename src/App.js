import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Users from './components/users/Users'
import Admin from './components/Admin/Admin'
import logo from './logo.svg';
import './App.css';
import './config'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'

class App extends React.Component {
  state={
    type:''
  }
  componentWillMount(){
    let userUid = localStorage.getItem("userUid");
      if(userUid){
        firebase.database().ref('users/' + userUid).on("value",(data)=>{
            let userData = data.val()
          if(userData){
            console.log(userData.userType)
            this.setState({type:userData.userType})
          }
        })   
      }
   }
  render(){ 
    return (
    <Router>
      <Fragment>
          <Header/>
          {
            this.state.type==="user"?
            <Redirect to='/User'/>
            :this.state.type==="Admin"?
            <Redirect to='/Admin'/>
            :
            <Redirect to='/SignIn'/>  
          }
          <Route path="/SignUp" component={SignUp}></Route> 
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/User" component={Users}/>
          <Route path='/Admin' component={Admin}/>

      </Fragment>
    </Router>
  )
}
}

export default App;
