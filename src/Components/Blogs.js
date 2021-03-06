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
        height:'90vh',
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
    postDetail:{
        cursor:'pointer !important',
        width:'100%',
        backgroundColor:'lightgray',
        marginBottom:'1%',
        padding:"1% 1%",
        wordBreak:'break-word',
    },
    Link:{
        width:'100%',
        textDecoration:'none'
    },
    postTitle:{
        fontWeight:'bolder',
        color:'red',
        textTransform:'capitalize'
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
    },
}))
function Blogs(props){
    const style=containerStyle()
    const displayBlogs=(data)=>{
        if(data.loggedInUser !=='null'){
            return (
                data.posts.map((post)=>{
                    return(
                        <Link className={style.Link} to={`/blogs/blog+${post.userId}+${post.id}`}  key={`blog${post.userId}${post.id}`}>
                            <Paper style={{cursor:'pointer'}} onClick={openPost.bind(this, `blog+${post.userId}+${post.id}`)} id={`blog${post.userId}${post.id}`} className={style.postDetail}>
                                <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                <p className={style.dataOverflow}>{post.body}</p>
                            </Paper>
                        </Link>
                    )
                })
            )
        }
    }
    const openPost=(data)=>{
        props.selectPost(data)
        props.setPrevious("/blogs")
    }
    const displayFilteredBlogs=(data)=>{
        if(data.loggedInUser !=='null'){
            return (
                data.posts.map((post)=>{
                    if(data.filterPost.userId!=='' && data.filterPost.title!==''){                        
                        if(post.userId.toString() === data.filterPost.userId && post.title===data.filterPost.title.toLowerCase())
                            return(
                                <Link className={style.Link} to={`/blogs/blog+${post.userId}+${post.id}`} key={`blog${post.userId}${post.id}`}>
                                    <Paper style={{cursor:'pointer'}} onClick={openPost.bind(this, `blog+${post.userId}+${post.id}`)} id={`blog${post.userId}${post.id}`} className={style.postDetail}>
                                        <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                        <p className={style.dataOverflow}>{post.body}</p>
                                    </Paper>
                                </Link>
                        )
                    }
                    else if(data.filterPost.title !==''){
                        if(post.title.toString()===data.filterPost.title.toLowerCase())
                        return(
                            <Link className={style.Link} to={`/blogs/blog+${post.userId}+${post.id}`} key={`blog${post.userId}${post.id}`}>
                                <Paper style={{cursor:'pointer'}} onClick={openPost.bind(this, `blog+${post.userId}+${post.id}`)} id={`blog${post.userId}${post.id}`} className={style.postDetail}>
                                    <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                    <p className={style.dataOverflow}>{post.body}</p>
                                </Paper>
                            </Link>
                        )
                    }
                    else if(data.filterPost.userId !==''){
                        if(post.userId.toString() === data.filterPost.userId)
                        return(
                            <Link className={style.Link} to={`/blogs/blog+${post.userId}+${post.id}`} key={`blog${post.userId}${post.id}`}>
                                <Paper style={{cursor:'pointer'}} onClick={openPost.bind(this, `blog+${post.userId}+${post.id}`)} id={`blog${post.userId}${post.id}`} className={style.postDetail}>
                                    <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                    <p className={style.dataOverflow}>{post.body}</p>
                                </Paper>
                            </Link>
                        )
                    }
                })
            )
        }
    }
    const display=(data)=>{
        if(data.filterPost === 'null')
            return displayBlogs(data)
        else
            return displayFilteredBlogs(data)
    }
    const setFilter=(userId, title, task)=>{
        let searchTitle=document.querySelector(`#${title}`);
        let searchUserId=document.querySelector(`#${userId}`);
        if(task==='clear'){
            props.filter("null", "null")
            searchTitle.value=''
            searchUserId.value=''
            return
        }
        if(searchTitle.value==='' && searchUserId.value==='')
            return 
        props.filter(searchUserId.value, searchTitle.value)
        searchTitle.value=''
        searchUserId.value=''
    }
    return(
        <div className={style.box}>
            <header className={style.header}>By Ashutosh Choudhary</header>
            <Link className={style.textDecoratoin} to="/home"><Button className={style.backButton} color="primary" variant='contained' onClick={setFilter.bind(this,"userId","Title","clear")}>Back</Button></Link>
            <div className={style.container}>
                <div className={style.filter}>
                    <TextField className={style.inputController} inputProps={{ 'type': 'text' }} variant='outlined' id='userId' label='userId' size='small'></TextField>
                    <TextField className={style.inputController} inputProps={{ 'type': 'text' }} variant='outlined' id='Title' label='Title' size='small'></TextField>
                    <Button className={style.filerButton} variant='contained' color='secondary' size='medium' onClick={setFilter.bind(this,"userId","Title","search")}>Search</Button>
                    <Button className={style.filerButton} variant='contained' size='medium' onClick={setFilter.bind(this,"userId","Title","clear")}>Clear</Button>
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
export default Blogs