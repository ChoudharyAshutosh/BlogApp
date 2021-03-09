import TextField from "@material-ui/core/TextField"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import './Login.css'
const loginStyles=makeStyles((theme)=>({
    inputController:{
        margin:'0.5%',
        width:'70%'
    }
}))

function Login(props){
    const login=loginStyles()
    function validateEmail(mail, password){
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailContainer=document.querySelector(`#${mail}`);
        let user=document.querySelector(`#${password}`)
        if(!(emailContainer.value.match(validRegex)))
        {   alert("Please enter valid email")
            emailContainer.value='';
            user.value='';
        }
        let present=false;
        props.data.users.forEach(userData=>{
            if(userData.username===user.value && userData.email===emailContainer.value)
            present=true
        })
        if(present===true)
            window.location.href="/home";
        else    
            {   alert("Please enter valid email or password")
            emailContainer.value='';
            user.value='';
        }
    }
        return(
            <div className='login-container'>
                <form className="login-form" action='#'>
                <TextField className={login.inputController} inputProps={{ 'type': 'email' }} variant='outlined' id='email' label='Email' size='small'></TextField>
                <TextField className={login.inputController} inputProps={{ 'type': 'password' }} variant='outlined' id='password' label='Password' size='small'></TextField>
                <Button className={login.inputController} onClick={validateEmail.bind(this,"email","password")} variant='contained' color='primary' size='medium'>Login</Button>
                </form>{console.log(props.data)}
            </div>
        )
    }
export default Login;