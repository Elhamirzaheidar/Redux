import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

const initialState={
    loading:false,
    data:[],
    error:"",
}
export default function useReducer(state=initialState,action){
   switch(action.type){
    case FETCH_USER_REQUEST:return{
        ...state,
        loading:true,
    }
    case FETCH_USER_SUCCESS:return {
      ...state,
      loading: false,
      data:action.payload,
      error:"",
    };
    case FETCH_USER_ERROR:return {
      ...state,
      loading: false,
      data: [],
      error:action.payload,
    };
    default:
        return state;
   }
}