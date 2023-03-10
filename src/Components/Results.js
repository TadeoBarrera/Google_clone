import { Link, makeStyles } from '@material-ui/core'
//import '../CSS/Result.css'

const Results = ({data:{title, link, displayLink, snippet}}) => {
  const classes = useStyles()

  return (
    <div className={classes.result}>
        <p>
            <Link href={link}>{displayLink}</Link>
        </p>
        <Link href={link}><h3>{title}</h3></Link>
        <p>{snippet}</p>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  result: {
    marginTop:"1rem",
    paddingLeft:"10vw",
    width:"100vw",
    marginRight:"0",

    [theme.breakpoints.down("xs")]:{
      width:"70vw",
      paddingLeft:"10px",
      margin:"0",
      marginRigth:"0",
      padding:"20px"
    }
  }
}))
export default Results