
const initialState = {
    name: 'fahrul'
}

const profileReducer = (state=initialState,action) =>{
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name : 'Fahrul Ihsan'
        }
    }
    return state;
}
export default profileReducer;