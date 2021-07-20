import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    actions:{
        display: 'flex',
        justifyContent:'space-between',
        width:'100px',
        cursor:'pointer'
    },
    heading:{
        marginTop: '5%',
        textAlign:'center',
        color:'#061147'
    },
    hrStyle:{
        marginBottom: '5%',
        width: '50%',
        border:'1px dashed #061147'
    },
    card:{
         boxShadow: "2px 8px 10px 10px rgba(32, 101 , 105, 0.2)"
    },
    loader:{
        textAlign:'center',
        marginTop: '12%'

    }

}));
