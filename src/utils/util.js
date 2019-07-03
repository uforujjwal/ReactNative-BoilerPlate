import DetectDevice from './detectDevice';

const getDevice = () => {
  let deviceType, deviceInfo = new DetectDevice();
  if (deviceInfo.isPhone) {
    deviceType = 'MOBILE';
  } else {
    if (deviceInfo.isPortrait) {
      return 'TAB_PORTRAIT';
    } else {
      return 'TAB_LANDSCAPE';
    }
  }
  return deviceType || 'MOBILE';
};
const util = {
  getDevice
};
export default util;
