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

// change to arrow function
// meaningful name to the parameter
function isEmptyOrSpaces(str:string){
    // why the space in the regex? if you want any white space you can use \s in order to do so
    // you can also do the regex syntax in JS, /^ *$/.test(strToTest) returns a boolean if strToTest is like the regex
    return str === null || str.match(/^ *$/) !== null;
}
const Missions: React.FC = (): JSX.Element => {
 

    const classes = useStyles();
    // add type to useState
    const [inputValue, setInputValue] = React.useState<string>('');
    // dont need the ref
    const textRef = React.useRef();
    const allMissions = useSelector<StoreStateType,missions>(s=>s.missions);
    
    // JS blockes are just like java, not C#/C
    // const func = () => {
    //    function content.....
    // }

    return (
        <div >
            {/* Look at the fixed indentation */}
            <TextField  
                id="outlined-basic" 
                autoFocus
                label='to do..' 
                variant="outlined"
                className={classes.editStype} 
                value={inputValue}
                inputRef={textRef}
                // in a function of one line you can do the following
                onChange={e => setInputValue(e.target.value)}
                onBlur={e => {
                    if(!isEmptyOrSpaces(inputValue))
                        setNewMission(inputValue)
                    setInputValue('');
                }}
                onKeyUp={e => {
                    if(e.key==='Enter') {
                        if(!isEmptyOrSpaces(inputValue)) {
                            setNewMission(inputValue);
                            setInputValue('');
                        }
                    }
                }}
            />
            {/* Change to arrow function */}
            {allMissions.list.map(function(object, i){
                return <div className={object.done ? classes.Done : classes.ToDo} key={i}> 
                            <Grid container justify="flex-start" className={classes.gridAlign} >
                                <Checkbox 
                                    color="primary"
                                    checked={object.done===true}
                                    onChange={e => {
                                        // remove console.log
                                        console.log('object',object);
                                        if(object.id)
                                            setMissionChecked(object.id)
                                    }}
                                />
                                {object.description}
                            </Grid>
                            <Grid container justify="flex-end">
                                <Button 
                                    disabled= {object.done === true}
                                    onClick={() => {
                                        if(object.id) {
                                            setInputValue(object.description);
                                            deleteMission(object.id);
                                            // can remove the comment    
                                            //  textRef.current?.focus();
                                        }
                                    }}
                                >
                                    edit
                                </Button>
                                <Button 
                                    // the syntax of boolean && expression means that if the boolean is true then do the expression other wise do nothing
                                    onClick={() => object.id && deleteMission(object.id)}
                                >
                                    delete
                                </Button>
                          </Grid>
                      </div>
                })
            }
        </div>
  )

}

export default Missions;