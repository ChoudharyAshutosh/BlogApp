import React from 'react'
import { Paper } from '@material-ui/core'
import TextField from "@material-ui/core/TextField"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
const containerStyle=makeStyles((theme)=>({
    box:{
        padding: '0% 0% 0% 0%',
        overflow:'hidden',
        marginBottom:'0%',
        height:'98vh'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        height:'98vh',
        justifyContent:'center'
    },
    listContainer:{
        margin:'0.5% 0%',
        padding:'0% 2% 1% 2%',
        width:'64%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'80vh',
        overflowY:'scroll'
    },
    userDetail:{
        width:'100%',
        backgroundColor:'lightgray',
        marginBottom:'1%',
        padding:"0% 1%",
        wordBreak:'break-word',
    },
    backButton:{
        marginLeft:'1%',
    },
    highLight:{
        fontWeight:'bolder'
    },
    textDecoratoin:{
        textDecoration:'none'
    },
    filter:{
        width:'28%',
        marginTop:'0.7%',
        height:'fit-content',
        backgroundColor:'lightgray',
        padding: '1% 1%',
        borderRadius:'5px'
    },
    inputController:{
        width:'100%',
        margin:'1% 0% 1% 0%',
        backgroundColor:'whitesmoke'
    },
    header:{
        fontStyle:"italic",
        backgroundColor:'black',
        fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
        color:'white',
        fontWeight:'bolder',
        fontSize:'150%',
        padding:'1%',
        textTransform:'uppercase',
        marginBottom:'0.5%'
    },
    dataOverflow:{
        wordBreak:'break-word'
    },
    filerButton:{
        width:'100%',
        margin:'1% 0% 1% 0%',
    }
}))
function Users(props){
    const style=containerStyle()
    const displayUsers=(data)=>{
        if(data.loggedInUser !=='null'){
            return (
                data.users.map((user)=>{
                    if(user.id !== data.loggedInUser.id)
                        return(
                            <Paper key={`user${user.id}`} id={`user${user.id}`} className={style.userDetail}>
                                <p className={style.dataOverflow}><span className={style.highLight}>Name</span> : {user.name}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Email</span> : {user.email}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Website</span> : {user.website}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Phone</span> : {user.phone}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Company</span> : {user.company.name}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>CatchPhrase</span> : {user.company.catchPhrase}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Address</span> : {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}</p>
                            </Paper>
                        )
                })
            )
        }
    }
    const displayFilteredUsers=(data)=>{
        if(data.loggedInUser !=='null'){
            return (
                data.users.map((user)=>{
                    if(user.id !== data.loggedInUser.id && user.name===data.filterUser)
                        return(
                            <Paper key={`user${user.id}`} id={`user${user.id}`} className={style.userDetail}>
                                <p className={style.dataOverflow}><span className={style.highLight}>Name</span> : {user.name}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Email</span> : {user.email}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Website</span> : {user.website}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Phone</span> : {user.phone}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Company</span> : {user.company.name}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>CatchPhrase</span> : {user.company.catchPhrase}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Address</span> : {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}</p>
                            </Paper>
                        )
                })
            )
        }
    }
    const display=(data)=>{
        if(data.filterUser === 'null')
        return displayUsers(data)
    else
        return displayFilteredUsers(data)
    }
    const setFilter=(id, task)=>{
        let searchBox=document.querySelector(`#${id}`);
        if(task==='clear'){
            props.filter("null")
            searchBox.value=''
            return
        }
        if(searchBox.value==='')
        return 
        props.filter(searchBox.value)
        searchBox.value=''
    }
    return(
        <div className={style.box}>
            <header className={style.header}>By Ashutosh Choudhary</header>
            <Link className={style.textDecoratoin} to="/home"><Button className={style.backButton} color="primary" variant='contained' onClick={setFilter.bind(this,"name","clear")}>Back</Button></Link>
            <div className={style.container}>
                <div className={style.filter}>
                    <TextField className={style.inputController} inputProps={{ 'type': 'text' }} variant='outlined' id='name' label='Name' size='small'></TextField>
                    <Button className={style.filerButton} variant='contained' color='secondary' size='medium' onClick={setFilter.bind(this,"name","search")}>Search</Button>
                    <Button className={style.filerButton} variant='contained' size='medium' onClick={setFilter.bind(this,"name","clear")}>Clear</Button>
                </div>
                <div id="list" className={style.listContainer}>
                    {
                        display(props.data)
                    }
                </div>
            </div>
        </div>
    )
}
export default Users