import React,{Component} from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import './SwitchToLogin.css'
class SwitchToLogin extends Component{
    loginPage=()=>{
        if(this.props.data!='null')
        window.location.replace("/login");
      }
      render(){
        return(
            <div className='progress-bar'>
                <CircularProgress/>
                {this.loginPage()}
            </div>
          );
      }
}
export default SwitchToLogin;