import Mission from '../../Mission';
export const SET_MISSION = 'SET_MISSION';
export const SET_MISSION_CHECK = 'SET_MISSION_CHECK';
export const DELETE_MISSION = 'DELETE_MISSION';



interface SetNewMission {
    type: typeof SET_MISSION;
    payload: { description: string };

}


interface SetMissionCheck {
    type: typeof SET_MISSION_CHECK;
    payload: { id:number };
}


interface DeleteMission {
    type: typeof DELETE_MISSION;
    payload: { id:number };
}


export type missionAction = SetNewMission | SetMissionCheck | DeleteMission;
