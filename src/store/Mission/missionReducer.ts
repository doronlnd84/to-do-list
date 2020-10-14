import Mission from '../../Mission';
import * as Actions from './missionActionTypes';


export interface missions  {
    list: Array<Mission> ;
}
let lastId:number=0;
const initialState: missions  = {list: Array<Mission>()};

const missionReducer = (state =initialState , action: Actions.missionAction) : missions  => {
    switch (action.type) {
        case Actions.SET_MISSION: {

            let newList = Array<Mission>();
            const newMission:Mission = {
              id:   ++lastId,
              description: action.payload.description,
              done: false
            }
            newList.push(newMission);
            newList.push(...state.list);
            newList.sort((a) => (a.done) ? 1 : -1);
            return {
                ...state,
                list: newList
            };
        }

        case Actions.SET_MISSION_CHECK: {

            let newList = Array<Mission>();
            newList = state.list.map(x=>x.id ===action.payload.id ? { ...x,done: !x.done  } : x );
            newList.sort((a) => (a.done) ? 1 : -1);
            return {
                ...state,
                list: newList
            };
        }
        case Actions.DELETE_MISSION: {

            let newList = Array<Mission>();
            newList = state.list.filter(x=>x.id !== action.payload.id);
            
            return {
                ...state,
                list: newList
            };
        }
          
       
        default:  return state;
    }
}

export default missionReducer;
