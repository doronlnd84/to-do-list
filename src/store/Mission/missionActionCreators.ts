import {store} from '../store';
import * as actionTypes from './missionActionTypes';


export const setNewMission = (description: string): void => {
    store.dispatch({
        type: actionTypes.SET_MISSION,
        payload: {description}
    })
}

export const setMissionChecked = (id: number): void => {
    store.dispatch({
        type: actionTypes.SET_MISSION_CHECK,
        payload: {id}
    })
}

export const deleteMission = (id: number): void => {
    store.dispatch({
        type: actionTypes.DELETE_MISSION,
        payload: {id}
    })
}
export const subscribeMission =(): void => {
    store.subscribe(()=>{
        console.log("Store changed",store.getState());
        
        });
} 
