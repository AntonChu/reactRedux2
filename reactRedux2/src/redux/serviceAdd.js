import { CHANGE_SERVICE_FIELD, FIX_SERVICE_FIELD } from "./action";

const initialState = { name: "", price: "" };

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case FIX_SERVICE_FIELD:
      const { id } = action.payload;
      return { ...state, id }
    default:
      return state;
  }
}

export default serviceAddReducer;