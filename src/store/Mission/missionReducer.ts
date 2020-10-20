import Mission from '../../Mission';
import * as Actions from './missionActionTypes';


export interface missions  {
    list: Array<Mission> ;
}

type MissionsArray = Mission[];
let lastId:number=0;
const initialstateArray: Mission[] = [];

const missionReducer = (state =initialstateArray , action: Actions.missionAction) : MissionsArray  => {
    switch (action.type) {
        case Actions.SET_MISSION: {

            // let newList = Array<Mission>();
            const newMission:Mission = {
              id:   ++lastId,
              description: action.payload.description,
              done: false
            }
            // newList.push(newMission);
            // newList.push(...state.list);
            // newList.sort((a) => (a.done) ? 1 : -1);
            // return {
            //     ...state,
            //     list: newList
            // };
            return [...state, newMission].sort((a) => (a.done) ? 1 : -1);
        }

        case Actions.SET_MISSION_CHECK: {
            // let newList = Array<Mission>();
            // newList = state.list.map(x=>x.id ===action.payload.id ? { ...x,done: !x.done  } : x );
            // newList.sort((a) => (a.done) ? 1 : -1);
            // return {
            //     ...state,
            //     list: newList
            // };
            return state.map(x=>x.id ===action.payload.id ? { ...x,done: !x.done  } : x ).sort((a) => (a.done) ? 1 : -1);
        }
        case Actions.DELETE_MISSION: {

            // let newList = Array<Mission>();
            // newList = state.list.filter(x=>x.id !== action.payload.id);
            
            return state.filter(x => x.id !== action.payload.id);
        }
          
       
        default:  return state;
    }
}

export default missionReducer;
