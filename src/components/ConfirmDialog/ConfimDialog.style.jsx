import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
   dialog: {
       padding: theme.spacing(2),
       position:'absolute',
       top: theme.spacing(5),
  
   },
   dialogContent:{
       textAlign:'center',
    //    color: 'red'
   },
   dialogActions:{
    //    textAlign:'center',
       marginLeft:'auto',
       marginRight:'auto'
   }
}));