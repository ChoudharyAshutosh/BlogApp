import React, { Component } from 'react';
import SwitchToLogin from "./Components/SwitchToLogin";
import Login from './Components/Login'
import ShowPost from './Components/ShowPost'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
class LoadingProject extends Component{
  constructor(props){
    super(props)
    this.state={
      users:'null',
      posts:'null',
      selectedPost:'null'
    }
  }
  componentDidMount(){
    var users='', posts='';
    let url1='https://jsonplaceholder.typicode.com/users'
    axios.get(url1).then((response)=>{
      this.setState({'users':response.data})
      console.log(response.data)
    })
    let url2='https://jsonplaceholder.typicode.com/users'
    axios.get(url2).then((response)=>{
      this.setState({'posts':response.data})
      console.log(response.data)
    })
    console.log(users, posts)
  }
  render(){
    return(
        <Router>
          <Route exact path='/' render={()=><SwitchToLogin data={this.state.users}/>}></Route>
          <Route exact path='/login' render={()=><Login data={this.state}/>}></Route>
          <Route exact path='/blogs' render={()=><ShowPost/>}/>
          <Route exact path='/home' render={()=><Home/>}/>
        </Router>
      );
  }
}

export default LoadingProject;