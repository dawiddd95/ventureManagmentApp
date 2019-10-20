import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
   visible: true,
}

const menuVisibility = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case types.ASIDE_MENU_VISIBILITY: 
         return produce(state, draftState => {
            draftState.visible = !draftState.visible;
         })
      default:
         return state;
   }
}

export default menuVisibility;