import React, { Component } from 'react';
import SwitchToLogin from "./Components/SwitchToLogin";
import Login from './Components/Login'
import ShowPost from './Components/ShowPost'
import Home from './Components/Home'
import Users from './Components/Users'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
class LoadingProject extends Component{
  constructor(props){
    super(props)
    this.state={
      users:'null',
      posts:'null',
      selectedPost:'null',
      loggedInUser:'null',
      filterUser:'null',
    }
  }
  componentDidMount(){
    var users='', posts='';
    let url1='https://jsonplaceholder.typicode.com/users'
    axios.get(url1).then((response)=>{
      this.setState({'users':response.data})
      console.log(response.data)
    })
    let url2='https://jsonplaceholder.typicode.com/posts'
    axios.get(url2).then((response)=>{
      this.setState({'posts':response.data})
      console.log(response.data)
    })
    console.log(users, posts)
  }
  loginUser=(email, index)=>{
    console.log(email)
    this.setState({'loggedInUser':{'email':email, 'id':index}})
  }
  filterSearch=(username)=>{
    this.setState({"filterUser": username})
  }
  render(){
    return(
        <Router>
          <Route exact path='/' render={()=><SwitchToLogin data={this.state}/>}></Route>
          <Route exact path='/login' render={()=><Login data={this.state} loginUser={this.loginUser}/>}></Route>
          <Route exact path='/blogs' render={()=><ShowPost/>}/>
          <Route exact path='/home' render={()=><Home data={this.state}/>}/>
          <Route exact path='/users' render={()=><Users data={this.state} filter={this.filterSearch}/>}/>
        </Router>
      );
  }
}

export default LoadingProject;
