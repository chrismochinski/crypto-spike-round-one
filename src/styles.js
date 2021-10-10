import { makeStyles } from '@material-ui/core/styles'
import { StylesContext } from '@material-ui/styles'

const useStyles = makeStyles((them) => ({
    title: {
        fontFamily: 'Montserrat',
    },
    subtitle: {
        padding: '10px 0',
        margin: '10px 0',
        marginLeft: '20px',
        marginRight: '20px',
        color: "yellow",
        fontFamily: 'Montserrat',
    },
    AppBar: {
    },

   iconLinks:{
       justifyContent: 'flex-start',
   },
   iconWords:{
       justifyContent: "flex-end",
   },
   main: {
       padding: '20px',
   }




}))

export default useStyles;