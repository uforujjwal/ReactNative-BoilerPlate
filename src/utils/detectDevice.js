import React, {
  PixelRatio,
  Platform,
  Dimensions
} from 'react-native';
      
const windowSize = Dimensions.get('window');
      
class DetectDevice {
  constructor () {
    this.pixelDensity = PixelRatio.get();
    this.width = windowSize.width;
    this.height = windowSize.height;
    this.adjustedWidth = this.width * this.pixelDensity;
    this.adjustedHeight = this.height * this.pixelDensity;
          
    this.isPhoneOrTablet();
    this.isIosOrAndroid();
    this.detectIphoneX();
    this.getOrientation();
    this.getTablet();
  }
        
  isPhoneOrTablet () {
    if (this.pixelDensity < 2 && (this.adjustedWidth >= 1000 || this.adjustedHeight >= 1000)) {
      this.isTablet = true;
      this.isPhone = false;
    } else if (this.pixelDensity === 2 && (this.adjustedWidth >= 1920 || this.adjustedHeight >= 1920)) {
      this.isTablet = true;
      this.isPhone = false;
    } else {
      this.isTablet = false;
      this.isPhone = true;
    }
  }
        
  isIosOrAndroid () {
    if (Platform.OS === 'ios') {
      this.isIos = true;
      this.isAndroid = false;
    } else {
      this.isIos = false;
      this.isAndroid = true;
    }
  }
      
  detectIphoneX () {
    if (Platform.OS === 'ios' &&
               !Platform.isTVOS &&
               !Platform.isTVOS &&
               (windowSize.height === 812 || windowSize.width === 812)) {
      this.isIphoneX = true;
    } else {
      this.isIphoneX = false;
    }
      
  }
  
    getOrientation = () =>   {
      if (Dimensions.get('window').width < Dimensions.get('window').height) {
        this.isPortrait = true;
      } else {
        this.isPortrait = false;
      }
    }
    getTablet () {
      // var wInches = Dimensions.get('screen').width * (this.pixelDensity);
      // var hInches = Dimensions.get('screen').height *  (this.pixelDensity);
      // let  screenDiagonal = Math.sqrt(Math.pow(wInches, 2) + Math.pow(hInches, 2));
      // // console.log(wInches, hInches, 'screenDiagonal', screenDiagonal, screenDiagonal / (160 * this.pixelDensity));
      // return (screenDiagonal >= 7.0);
      const {width, height} = Dimensions.get('screen');
      const ratio = Math.max(width, height) / Math.min(width, height);
      return (ratio > 1.6);
    }
}
      
module.exports =  DetectDevice;