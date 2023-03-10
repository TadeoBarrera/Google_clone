import SearchIcon from '@material-ui/icons/Search';
//import {GoogleInput} from './GoogleInput';
import { GoogleButtons } from './GoogleButtons';
import { useState } from 'react';
import { setTextstring } from '../features/textSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const Search = ({hideButtons = false, searchBar = false}) => {

const classes = useStyles()

const [input,setInput] = useState("")
const navigate = useNavigate()
const dispatch = useDispatch()

const search = (e) => {
    e.preventDefault()
    dispatch(setTextstring(input));
    navigate("/search")
}

  return (
    <>
     <form className={classes.search}>
        <div className={searchBar ? classes.googleMin :classes.googleInput }>
            <SearchIcon className={classes.searchIcon}/>
            <input className={classes.input} value={input} onChange={e=>setInput(e.target.value)}/>
        </div>
        <div className={classes.searchButton}>
            <GoogleButtons type="submit" onClick={search} className={hideButtons ? classes.search_hideButtons : ""}>
                Buscar con Google
            </GoogleButtons>
            <GoogleButtons className={hideButtons ? classes.search_hideButtons : ""}>
                Voy a tener suerte
            </GoogleButtons>
        </div>
     </form>
        
    </>
  )
}
const useStyles = makeStyles((theme) => ({
    
    search:{
        width:"auto",
        height:"92",
        [theme.breakpoints.down("xs")]:{
            width:"100vw"
        }
    },
    searchButton: {
        marginTop: "30px",
        display:"flex" ,
        justifyContent: "center",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"50px"
        }
    },
    search_hideButtons: {
        display: "none"
    },
    googleInput:{
        display:"flex",
        alignItems: "center",
        border: "1px solid lightgray",
        height: "20px",
        padding: "10px 20px",
        borderRadius: "999px",
        width: "65vw",
        maxWidth:"560px",
        margin:"0 auto",
        marginTop: "20px",
        "&:hover":{
            boxShadow: "2px 2px 4px 3px rgba(232, 232, 232, 0.7)"
        },
        [theme.breakpoints.down("xs")]:{
            marginRight:"20px"
        }

    },
    googleMin:{
        display:"flex",
        alignItems: "center",
        border: "1px solid lightgray",
        height: "20px",
        padding: "10px 20px",
        borderRadius: "999px",
        width: "65vw",
        maxWidth:"560px",
        margin:"0 auto",
        marginTop: "20px",
        "&:hover":{
            boxShadow: "2px 2px 4px 3px rgba(232, 232, 232, 0.7)"
        },
        
        [theme.breakpoints.down("xs")]:{
            display:"flex",
            alignItems: "center",
            border: "1px solid lightgray",
            height: "20px",
            padding: "10px 20px",
            borderRadius: "999px",
            width: "40vw",
            maxWidth:"560px",
            margin:"0 auto",
            marginLeft:"20vw",
            marginTop: "20px",
            "&:hover":{
                boxShadow: "2px 2px 4px 3px rgba(232, 232, 232, 0.7)"
            },
            [theme.breakpoints.down("xs")]:{
                marginRight:"20px"
            } 
        }
    },
    searchIcon:{
        color: "gray"
    },
    input:{
        flex: "1",
        fontSize: "medium",
        border: "none",
        "&:focus":{
            outlineWidth:"0"
        }
    }
    

  }))
export default Search