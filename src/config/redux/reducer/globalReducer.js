
const initialState = {
    toogle:false
}

const globalReducer=(state=initialState,action)=>{
    if(action.type === 'UPDATE_TOOGLE'){
        return{
            ...state,
            toogle: !state.toogle
        }
    }
    return state;
}
export default globalReducer;
