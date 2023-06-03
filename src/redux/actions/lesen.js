import { ActionTypes } from "../contants/action-types";

export const  fetchLesen = () =>  async (dispatch) => {
    const response = await get("http://localhost:3001/lesen");
    console.log(response)
   
    dispatch({type:ActionTypes.FETCH__LESEN, payload:response.data})
    
   };