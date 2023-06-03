import {ActionTypes} from "../contants/action-types";

const initialState ={
    lesen:[],
    isLoaded: false,
    
};

 const lesenReduser = (state= initialState, {type, payload}) => {

    switch(type) {
        case ActionTypes.SET__LESEN:
            return {...state,setLesen:payload };
        case ActionTypes.FETCH__LESEN:
            return {...state,setLesen:payload, isLoaded: true, };

            default :
                return state
    } 
   

};
export default lesenReduser;