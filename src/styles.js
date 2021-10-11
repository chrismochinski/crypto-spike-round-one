import { makeStyles } from '@material-ui/core/styles'
// import { StylesContext } from '@material-ui/styles'


const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Montserrat',
    },
    subtitle: {
        padding: '5px 0',
        margin: '5px 0',
        marginLeft: '30px',
        marginRight: '30px',
        color: "yellow",
        fontFamily: 'Montserrat',
        fontSize: '15px',
    },
    AppBar: {

    },

    iconLinks: {
        textAlign: 'left',

    },
    iconWords: {
        textAlign: 'right',
    },

    main: {
        padding: '20px',
    },


    coinIcon: {
        width: '40px',
    },

    assetHeader: {
        padding: '30px',
        margin: '20px',
        backgroundColor: 'paper',
    },

    tableRow: {
        cursor: 'pointer',
        paddingTop: '50px',
        textAlign: 'center',
    },

    // assetHeadline: {
    //     textAlign: 'left',
    //     paddingLeft: '40px',
    // },

    addButton: {
        textAlign: 'right',
    },


    footer: {
        paddingTop: '10px',
    },

    tableCell: {
        textAlign: 'center',
        padding: '0',
    },
 
    searchPaper: {
        
        paddingTop: '20px',
        paddingBottom: '200px',
        width: '90%',
        margin: 'auto',
    },

    floatLeft: {
        width: '100%',
        margin: 'auto',
    },

    floatRight: {
        width: '100%',
        margin: 'auto',
    },

}))

export default useStyles;