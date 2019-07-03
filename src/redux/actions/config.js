import {SET_DEVICE_TYPE} from './types';

export const setConfig = (device) => ({
  type: SET_DEVICE_TYPE,
  device
});