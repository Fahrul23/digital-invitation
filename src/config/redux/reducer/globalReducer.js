
const initialState = {
    toogle:false,
    isInsert:false,
}

const globalReducer=(state=initialState,action)=>{
    if(action.type === 'UPDATE_TOOGLE'){
        return{
            ...state,
            toogle: !state.toogle
        }
    }
    if(action.type === 'UPDATE_ISINSERT'){
        return{
            ...state,
            isInsert:action.payload
        }
    }

    return state;
}
export default globalReducer;
