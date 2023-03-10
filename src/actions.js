import * as actions from './actionTypes'
import store from './store'


export function bugAdded(description){
    return store.dispatch({
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    })
}
export function bugResolved(id){
    return store.dispatch({
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    })
}