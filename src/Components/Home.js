import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
const containStyle=makeStyles((theme)=>({
    dataContainer:{
        margin:'1% 2% 0% 2%',
        height:'86vh',
        backgroundColor:'#d9e6f2',
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
    container:{
        width:'100%',
        margin: "0% 0.1%",
    },
    block:{
        overflow:'hidden'
    },
    userData:{
        margin:'0% 4% 4% 3.7%',
        overflowX:'hidden',
        padding:'0% 2%'
    },
    postData:{
        margin:'0% 2% 2% 2%',
        overflowX:'hidden',
        padding:'0% 1.5%'
    },
    dataHeader1:{
        fontSize:'140%',
        backgroundColor:'#0000cc',
        color:'white',
        margin:'-3% -3% 1% -3%',
        textAlign:'center',
        textTransform:'capitalize',
        padding:'1% 0%'
    },
    dataHeader2:{
        fontSize:'140%',
        backgroundColor:'#0000cc',
        color:'white',
        margin:'-1.5% -1.5% 1% -1.5%',
        textAlign:'center',
        textTransform:'capitalize',
        padding:'0.5% 0%'
    },
    userList:{
        height:'88%',
        overflowY:'scroll',
        margin:'0.5% -3% 2% -3%'
    },
    postList:{
        height:'87.5%',
        overflowY:'scroll',
        margin:'0.5% -1.5% 1% -1.5%'
    },
    dataOverflow:{
        wordBreak:'break-word'
    },
    highLight:{
        fontWeight:'bolder',
    },
    postTitle:{
        fontWeight:'bolder',
        color:'red',
        textTransform:'capitalize'
    },
    showUsers:{
        display:'flex',
        flexDirection:'row-reverse',
        marginRight:'4.5%'
    },
    showPosts:{
        display:'flex',
        flexDirection:'row-reverse',
        marginRight:'2.5%',
    },
    changeDecoration:{
        textDecoration:'none'
    }
}))
function Home(props){
    const style=containStyle()
    const displayUsers=(data)=>{
        if(data.loggedInUser !=='null'){
            return (
                data.users.map((user)=>{
                    if(user.id !== data.loggedInUser.id)
                        return(
                            <Paper key={`user${user.id}`} id={`user${user.id}`} className={style.userData}>
                                <p className={style.dataOverflow}><span className={style.highLight}>Name</span> : {user.name}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Email</span> : {user.email}</p>
                            </Paper>
                        )
                })
            )
        }
    }
    const displayPosts=(data)=>{
        let userId;
        if(data.loggedInUser !== 'null'){
            userId=data.loggedInUser.id;
            return(
                data.posts.map((post)=>{
                    if(post.userId===userId)
                        return(
                            <Paper key={`post${post.userId}${post.id}`} id={`post${post.userId}${post.id}`} className={style.postData}>
                                <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                <p className={style.dataOverflow}>{post.body}</p>
                            </Paper>
                        )
                })
            )
        }
    }
    return(
        <div className={style.block}>
            <header className={style.header}>By Ashutosh Choudhary</header>
            <Grid className={style.container} container spacing={3}>
                <Grid className={style.dataContainer} item xs={4}>
                    <header className={style.dataHeader1}>
                        other users
                    </header>
                    <Grid className={style.userList}>
                        {
                            displayUsers(props.data)   
                        }
                    </Grid>
                    <div className={style.showUsers}>
                        <Link className={style.changeDecoration} to="/users"><Button variant="contained" color="secondary">All Details</Button></Link>
                    </div>
                </Grid>
                <Grid className={style.dataContainer} item xs={7}>
                <header className={style.dataHeader2}>
                        your posts
                    </header>
                    <Grid className={style.postList}>
                        {
                            displayPosts(props.data)
                        }
                    </Grid>
                    <div className={style.showPosts}>
                        <Link className={style.changeDecoration} to="/blogs"><Button variant="contained" color="secondary">All Posts</Button></Link>
                    </div>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default Home