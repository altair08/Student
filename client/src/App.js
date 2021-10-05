
import './App.css';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import Student from './components/showStudent/showStudent';
import CreateStudent from './components/createStudent/createStudent'
import useStyle from './styles'
import { MovieProvider } from './context/student';

function App() {
   const classes = useStyle();

  return (
    <div className={classes.container} >
    <div className="App"
   
    >
      <Container maxWidth="lg">
    
       <AppBar className={classes.appbar} 
       position="static" 
       style={{backgroundColor:"#1b4184"}}
       >
<Typography className={classes.heading}
               variant='h2'
               >Student Data Collection</Typography>

       </AppBar>

       <Grow in>
         <Container>
         <MovieProvider>
           <Grid container justify="space-between" alignItems="stretch">
             <Grid item xs={12} sm = {7}> 
                   <AppBar className={classes.appbar} position="static" color="inherit">
                     <Student/>
                   </AppBar>
             </Grid>

             <Grid item xs={12} sm = {4}> 
                   
             <AppBar className={classes.appbar} position="static" color="inherit">
                     <CreateStudent/>
                   </AppBar>
             </Grid>

           </Grid>
           </MovieProvider>
         </Container>
       </Grow>
      
      </Container>
     
    </div>
    </div>
  );
}

export default App;
