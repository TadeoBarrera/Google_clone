import React from 'react'
import { Link } from 'react-router-dom'
import Google from '../Images/Google_2015_logo.svg.png'
import Search from '../Components/Search'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar, makeStyles } from '@material-ui/core'
import { selectTextString } from '../features/textSlice'
import { useSelector } from 'react-redux'
import useGoogleSearch from '../useGoogleSearch'
import Results from '../Components/Results'

const SearchPage = () => {
    const textString = useSelector(selectTextString)
    const {data} = useGoogleSearch(textString)
    console.log(data)



    const classes = useStyles()


  return (
    <div className={classes.searchPage}>
        <div className={classes.header}>
            <Link to="/">
                <img className={classes.searchPage_logo} src={Google} alt= "Google"/>
            </Link>
            <div className={classes.headerCenter}>
                <Search hideButtons searchBar/>
                <div className={classes.options}>
                    <div className={classes.optionsLeft}>
                        <div className={classes.option}>
                        <SearchIcon fontSize='small'/> 
                        <Link to="/all">All</Link>
                        </div>
                        <div className={classes.option}>
                        <DescriptionIcon fontSize='small'/> 
                        <Link to="/news">News</Link>
                        </div>
                        <div className={classes.option}>
                        <ImageIcon fontSize='small'/> 
                        <Link to="/images">Images</Link>
                        </div>
                        <div className={classes.option}>
                        <LocalOfferIcon fontSize='small'/> 
                        <Link to="/shoping">Shopping</Link>
                        </div>
                        <div className={classes.option}>
                        <RoomIcon fontSize='small'/> 
                        <Link to="/maps">Maps</Link>
                        </div>
                        <div className={classes.option}>
                        <MoreVertIcon fontSize='small'/> 
                        <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className={classes.optionsRight}>
                        <div className={classes.option}>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className={classes.option}>
                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.headerRigth}>
                <AppsIcon className={classes.appsIcon} fontSize='small'/>
                <Avatar className={classes.avatar}/>
            </div>
        </div>
       {textString && (
        <div className="results">
            <p className={classes.resultCount}>
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
            </p>
            {
                data?.items.map(item => (
                    <Results key={item.cacheId} data={item}/>
                ))
            }
        </div>
        )} 
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    searchPage:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100vh",
        width: "auto",
        [theme.breakpoints.down("xs")]:{
            width:"100vw",
        } 
    },
    header:{
        width: "100%",
        height: "110px",
        display: "flex",
        justifyContent: "space-between",
        position:"sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "white",
        borderBottom: "1px solid lightgray",
        [theme.breakpoints.down("xs")]:{
        }
             
    },
    searchPage_logo:{
        height: "30px",
        marginTop:"30px",
        marginLeft: "20px",
        objectFit: "contain",
        
    },
    headerCenter:{
        display: "flex",
        flexDirection: "column",
        width: "692px",
        marginLeft: "2rem",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"50vw",
            width:"auto",
            alignItems:"center"
        }
         
    },
    options:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop:"-0.7rem",
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    optionsLeft:{
        display: "flex",
        
    },
    optionsRight:{
        display: "flex",
        
    },
    option:{
        display: "flex",
        alignItems: "center",
        color:"gray",
        marginRight:"10px",
        "& a":{
            color:"gray",
            fontSize:"14px",
            textDecoration:"none"
        }
    },
    headerRigth:{
        display: "flex",
        marginTop:"30PX",
        
    },
    avatar:{
        width: "1.8rem",
        height: "1.8rem",
        marginLeft: "0.2rem",
        marginTop: "-0.3rem",
        [theme.breakpoints.down("sm")]:{
            marginRight:"8px"
        }
    },
    results:{
        maxWidth: "650px",
        marginTop: "20px",
        marginLeft: "160px",
        marginBottom:"100px",
        
    },
    resultCount:{
        marginTop: "20px",
        paddingLeft:"10vw",
        width:"80vw",
        
    },
    appsIcon:{
        [theme.breakpoints.down("xs")]:{
            display:"none"
        }
    },
    
}))

export default SearchPage