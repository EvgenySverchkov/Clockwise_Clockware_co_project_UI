export default function main_adminPanel_reduser(state={}, action){
  switch(action.type){
    case "CHNG_CURR_ITEM_FOR_MODAL":
      return {
        ...state,
        currItemForModal: action.payload
      }
    default:
      return state;
  }
}