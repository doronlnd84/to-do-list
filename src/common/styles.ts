import  {makeStyles} from  '@material-ui/core/styles' ;  


const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
      },
  ToDo: {
     background: 'linear-gradient(315deg, #eec0c6 0%, #7ee8fa 24%)',
     border: 2,
     borderRadius: 16,
     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     color: 'black',
     textAlign: 'justify',
     padding: '10px 10px',
     margin: '10px 10px',
     display: 'flex',
     alignItems:'center'

  },
  Done: {
   background: 'linear-gradient(315deg, #bdd4e7 0%, #8693ab 4%)',
   border: 2,
   borderRadius: 16,
   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
   color: 'black',
   textAlign: 'justify',
   padding: '10px 10px',
   margin: '10px 10px',
   disabled: true,
   display: 'flex',
   alignItems:'center'

 },
 gridAlign:{
    alignItems:'center'
 },
 editStype:{
    width: '95%',
    height: '100%',
    border: 2,
    borderRadius: 16,
    color: 'black',
    textAlign: 'justify',
    padding: '10px 10px',
    margin: '10px 10px',
    display: 'flex'
    
 }
});


export default useStyles;