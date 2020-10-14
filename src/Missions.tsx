import React from 'react';
import { useSelector } from 'react-redux';
import {missions} from './store/Mission/missionReducer'
import StoreStateType from './store/storeStateType';
import TextField from '@material-ui/core/TextField';
import useStyles from './common/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {setNewMission,setMissionChecked,deleteMission} from './store/Mission/missionActionCreators';

function isEmptyOrSpaces(str:string){
    return str === null || str.match(/^ *$/) !== null;
}
const Missions: React.FC = (): JSX.Element => {
 

    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('');
    const textRef = React.useRef();
    const allMissions = useSelector<StoreStateType,missions>(s=>s.missions);
    
    return (
        <div >
            <TextField  id="outlined-basic" 
                         autoFocus
                        label='to do..' 
                        variant="outlined"
                        className={classes.editStype} 
                        value={inputValue}
                        inputRef={textRef}
                        onChange={e => 
                            {
                                setInputValue(e.target.value);      
                           }
                                }
                        onBlur={e => 
                         {
                             if(!isEmptyOrSpaces(inputValue))
                                    setNewMission(inputValue)
                              setInputValue('');
                        }
                             }
                        onKeyUp=   
                            {e => {
                                if(e.key==='Enter')
                                {
                                    if(!isEmptyOrSpaces(inputValue)){
                                        setNewMission(inputValue);
                                        setInputValue('');

                                           
                                    }
                                    
                                }
                            }
                                
                           }
                             />
             {allMissions.list.map(function(object, i){
               return <div   className={object.done ? classes.Done : classes.ToDo} key={i}> 
                          <Grid container justify="flex-start"  className={classes.gridAlign} >
                          <Checkbox 
                             color="primary"
                            checked={object.done===true}
                            onChange={e => {
                            
                                            console.log('object',object);
                                            if(object.id)
                                                setMissionChecked(object.id)
                                            
                            }}

                        />
                          {object.description }
                          </Grid>
                          <Grid container justify="flex-end" 
                          >
                          <Button 
                          disabled= {object.done===true}
                          onClick={()=>{
                            if(object.id) 
                            {
                                
                                setInputValue(object.description);
                                deleteMission(object.id);
                              //  textRef.current?.focus();
                                
                            }
                            }
                        }
                          >edit</Button>
                          <Button 
                           onClick={()=>{
                            if(object.id) 
                                deleteMission(object.id)

 
                            }
                        }
                          >delete</Button>
                          </Grid>
                      </div>
                      
                      ; 
             })}
        </div>
  )

}

export default Missions;