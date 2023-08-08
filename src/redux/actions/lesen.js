import { ActionTypes } from "../contants/action-types";

// export const  fetchLesen = () =>  async (dispatch) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(response)
   
//     dispatch({type:ActionTypes.FETCH__LESEN, payload:response.data})
    
//    };

export function fetchLesen() {
    return async dispatch => {
        const response = fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
    }
}

   export const  setLesen = (setLesen) => {
    return{
      type:ActionTypes.SET__LESEN,
      payload:setLesen,
    };
      
  };