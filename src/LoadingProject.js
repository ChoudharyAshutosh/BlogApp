import React, { Component } from 'react';
import SwitchToLogin from "./Components/SwitchToLogin";
import Login from './Components/Login'
import Blogs from './Components/Blogs'
import Home from './Components/Home'
import Users from './Components/Users'
import BlogPost from './Components/BlogPost'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
      filterPost:'null',
      previous:'null',
      redirect:'null'
    }
  }
  componentDidMount(){
    var users='', posts='';
    let url1='https://jsonplaceholder.typicode.com/users'
    axios.get(url1).then((response)=>{
      this.setState({'users':response.data})
    })
    let url2='https://jsonplaceholder.typicode.com/posts'
    axios.get(url2).then((response)=>{
      this.setState({'posts':response.data})
    })
  }
  loginUser=(email, index)=>{
    this.setState({'loggedInUser':{'email':email, 'id':index}})
  }
  filterUser=(username)=>{
    this.setState({"filterUser": username})
  }
  filterPost=(userId, title)=>{
    if(userId==='null' && title==='null'){
      this.setState({'filterPost':'null'})
      return
    }
    this.setState({"filterPost":{'userId':userId, 'title':title}})
  }
  selectPost=(post)=>{
    this.setState({selectedPost:post})
  }
  setPrevious=(url)=>{
    this.setState({'previous':url})
  }
  setRouting=(path)=>{
    this.setState({'redirect':path})
    return <Redirect push to='/home'/>
  }
  routing=()=>{
    if(this.state.redirect !== 'null'){
      return <Redirect to='/home'></Redirect>}
  }
  render(){
    return(
        <Router>
          {
            this.routing()
          }
          <Route exact path='/' render={()=><SwitchToLogin data={this.state}/>}></Route>
          <Route exact path='/login' render={()=><Login data={this.state} setRedirection={this.setRouting} loginUser={this.loginUser}/>}></Route>
          <Route exact path='/blogs' render={()=><Blogs data={this.state} setPrevious={this.setPrevious} filter={this.filterPost} selectPost={this.selectPost}/>}/>
          <Route exact path='/home' render={()=><Home data={this.state} setPrevious={this.setPrevious} selectPost={this.selectPost}/>}/>
          <Route exact path='/blogs/:blog' render={()=><BlogPost data={this.state}/>}/>
          <Route exact path='/users' render={()=><Users data={this.state} filter={this.filterUser}/>}/>
        </Router>
      );
  }
}

export default LoadingProject;