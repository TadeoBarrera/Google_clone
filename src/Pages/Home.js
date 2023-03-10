import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import Google from '../Images/Google_2015_logo.svg.png'
import { Link } from 'react-router-dom';
import Search from '../Components/Search';

const Home = () => {

    const classes = useStyles()

  return (
    <div className={classes.home}>
        <div className={classes.home_header}>
            <div className={classes.headerRight}>
                <Link to="/about">Gmail</Link>
                <Link to="/about">Images</Link>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
        <div className={classes.home_body}>
            <img src={Google} alt='google'/>
            <Search/>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    home:{
        display:"flex",
        flexDirection:"column"
    },
    home_header:{
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        padding: theme.spacing(5),
        "& a":{
            marginRight: "20px",
            textDecoration: "none",
            color: "rgba(0,0,0,0.87)",
            fontSize: "13px",
        },
        "& a:hover":{
            textDecoration: "underline"
        }
    },
    headerRight:{
        display:"flex",
        justifyItems:"auto",
        alignItems: "center",
        minWidth: "13vw",
    },
    home_body:{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: "5rem",
        alignItems:"center",
        [theme.breakpoints.down("xs")]:{
            width: "60vw",            
            alignItems:"center",
            marginLeft:"10vw"
        },
        "& img":{
            height: "140px",
            objectFit: "contain",
            [theme.breakpoints.down("xs")]:{
                width: "60vw",
                marginLeft:"20vw"
                
            }
        }

    },
    
}))

export default Home