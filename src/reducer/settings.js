import { SITE_SETTINGS } from '../constant';
const initialState = {
  	settings: {}
};

export const settingReducer = (state = initialState, { type, settings, links }) => {
    switch (type) {
    	case SITE_SETTINGS: {
      		return { ...state, settings, links };
    	}
    	default:
      		return state;
  	}
};