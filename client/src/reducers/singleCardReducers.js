const initialState = []

export default (state = initialState,action) =>{
    if(action.type === 'SINGLE CARD' || action.type === 'CLEAR'){
      return action.payload
    }
    else{
      return state
    }
}