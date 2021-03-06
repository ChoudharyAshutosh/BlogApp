import TextField from "@material-ui/core/TextField"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link, Redirect} from 'react-router-dom'
import './Login.css'
const loginStyles=makeStyles((theme)=>({
    inputController:{
        margin:'0.5%',
        width:'70%'
    },
    button:{
        width:"100%"
    },
    forward:{
        margin:'0.5%',
        width:'70%',
        textDecoration:'none'
    }
}))

function Login(props){
    const login=loginStyles()
    function validateEmail(mail, password){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailContainer=document.querySelector(`#${mail}`);
        let email=emailContainer.value
        let user=document.querySelector(`#${password}`)
        let username=user.value
        if(!(emailContainer.value.match(validRegex)))
        {   alert("Please enter valid email")
            emailContainer.value='';
            user.value='';
        }
        let present=false;
        let indexToAdd=-1
        props.data.users.forEach((userData, index)=>{
            if(userData.username===username && userData.email===email)
            {
                present=true
                indexToAdd=index
                props.loginUser('*', '*')
            }
        })
        if(present===true)
            {   props.loginUser(email, indexToAdd+1)
                props.setRedirection("/home")
            }
        else    
            {   alert("Please enter valid email or password")
                emailContainer.value='';
                user.value='';
                props.loginUser('*', '*')
        }
    }
        return(
            <div>
                <header>By Ashutosh Choudhary</header>
                <div className='login-container'>
                    <form className="login-form" action='#'>
                    <TextField className={login.inputController} inputProps={{ 'type': 'email' }} variant='outlined' id='email' label='Email' size='small'></TextField>
                    <TextField className={login.inputController} inputProps={{ 'type': 'password' }} variant='outlined' id='password' label='Password' size='small'></TextField>
                    <Button className={login.inputController} onClick={validateEmail.bind(this,"email","password")} variant='contained' color='primary' size='medium'>Login</Button>
                    </form>
                </div>
            </div>
        )
    }
export default Login;