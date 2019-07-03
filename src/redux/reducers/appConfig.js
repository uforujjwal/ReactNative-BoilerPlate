import {SET_DEVICE_TYPE} from '../actions/types';

const initialValue = {
  device: { }
};

const appConfig = (state = initialValue, action) => {
  const deviceInfo = {
    isTabPortrait: action.device === 'TAB_PORTRAIT',
    isTabLandscape: action.device === 'TAB_LANDSCAPE',
    isMobile: action.device === 'MOBILE'
  };
  switch (action.type) {
  case SET_DEVICE_TYPE:
    return {...state, device: deviceInfo};
  default:
    return state;
  }
};
  
export default appConfig; 