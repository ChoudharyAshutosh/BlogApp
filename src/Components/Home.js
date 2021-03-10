import React from 'react'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import './Home.css'
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
        overflowX:'hidden'
    },
    postData:{
        margin:'0% 2% 2% 2%',
        overflowX:'hidden'
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
        height:'95%',
        overflowY:'scroll',
        margin:'0.5% -3% 0% -3%'
    },
    postList:{
        height:'95%',
        overflowY:'scroll',
        margin:'0.5% -1.5% 0% -1.5%'
    }
}))
function Home(props){
    const style=containStyle()
    const displayLogged=(props)=>{
        if(props.loggedUser !=='null'){
            var a=[props.loggedUser]
    return (
        a.map((e)=>{
        return (<div className={style.userData}>{e}</div>)
        })
    )}
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
                            displayLogged(props)   
                        }
                        <Paper className={style.userData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        <div>{}</div>
                        </Paper>
                        <Paper className={style.userData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        </Paper>
                        <Paper className={style.userData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        </Paper>
                    </Grid>
                </Grid>
                <Grid className={style.dataContainer} item xs={7}>
                <header className={style.dataHeader2}>
                        your posts
                    </header>
                    <Grid className={style.postList}>
                        <Paper className={style.postData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        </Paper>
                        <Paper className={style.postData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        </Paper>
                        <Paper className={style.postData}>
                        ggggggggggggggggggggggbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbb
                        bbbbbbbbbbbbbbbbfgbcgb
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default Home