import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
const defineStyle=makeStyles((theme)=>({
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
        padding:'0.2% 1%',
    },
    postDetail:{
        width:'95%',
        backgroundColor:'lightgray',
        padding:'0.01% 1%',
        marginTop:'1%',
        cursor:'default'
    },
    postTitle:{
        fontWeight:'bolder',
        color:'red',
        textTransform:'capitalize'
    },
    dataOverflow:{
        wordBreak:'break-word'
    },
    highLight:{
        fontWeight:'bolder'
    },
    Link:{
        textDecoration:'none'
    }
}))
export default function BlogPost(props){
    const style=defineStyle()
    const loadPost=(data)=>{
        let selectedBlog=data.selectedPost
        let selectedBlogData=selectedBlog.split("+")
        let author;
        if(data.loggedInUser !=='null'){
            data.users.map((user)=>{
                if(user.id.toString().toLowerCase()===selectedBlogData[1].toLowerCase())
                    {   
                        author=user.name
                    }
            })
            return (
                data.posts.map((post)=>{
                    if(post.userId.toString()===selectedBlogData[1] && post.id.toString()===selectedBlogData[2])
                        return(
                            <Paper style={{cursor:'pointer'}} key={`blog+${post.userId}+${post.id}`} id={`blog+${post.userId}+${post.id}`} className={style.postDetail}>
                                <p className={style.dataOverflow}><span className={style.postTitle}>{post.title}</span></p>
                                <p className={style.dataOverflow}>{post.body}</p>
                                <p className={style.dataOverflow}><span className={style.highLight}>Author</span> : {author}</p>
                            </Paper>
                        )
                })
            )
        }
    }
    return(
        <div>
            <header className={style.header}>By Ashutosh Choudhary</header>
            <div className={style.container}>
                <Link to={`${props.data.previous}`} className={style.Link}><Button variant='contained' color='secondary'>Back</Button></Link>
                {
                    loadPost(props.data)
                }
            </div>
        </div>
    )
}