import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "./back.png"

export default makeStyles(()=>(
    {

        appbar:{
            borderRadius: 15,
            margin:"30px 0",
            display:"flex",
            flexDirection:'column',
            justifyContent:'center',
            alignItems:"center",
            
        },

        container: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }
    }
))