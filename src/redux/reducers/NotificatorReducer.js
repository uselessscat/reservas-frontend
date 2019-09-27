import actionsType from '../constants';
export default (state = {}, action)=>{
    switch (action.type) {
        case actionsType.notification.SHOW_SUCCESS:{
            state  = {...state, show_message:true, type:'success', message:action.payload};
            break;
        }
        case actionsType.notification.SHOW_ERROR:{
            state  = {...state, show_message:true, type:'error', message:action.payload};
            break;
        }
        case actionsType.notification.SHOW_INFO:{
            state  = {...state, show_message:true, type:'info', message:action.payload};
            break;
        }
        case actionsType.notification.SHOW_WARNING:{
            state  = {...state, show_message:true, type:'warning', message:action.payload};
            break;
        }
        case actionsType.notification.HIDE_MESSAGE:{
            state  = {...state, show_message:false, type:null, message:null};
            break;
        }
    }
    return state;
}