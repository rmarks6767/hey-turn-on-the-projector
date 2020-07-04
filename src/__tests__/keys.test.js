const keys = require('../keys');

describe('Different keys to access the projector functions', () => {
  [
    'POWER',
    'SOURCE_SEARCH',
    'AV_MUTE',
    'FREEZE',
    'VOLUME_UP',
    'VOLUME_DOWN',
    'PAGE_UP',
    'PAGE_DOWN',
    'HDMI_ONE',
    'HDMI_TWO',
    'COMPUTER',
    'VIDEO',
    'USB_DISPLAY',
    'USB',
    'LAN',
    'CCAP',
    'QRCODE',
  ].forEach((command) => {
    it(`Should return the ${command} query parameter`, () => {
      const key = keys[command];

      expect(key).toBeDefined();
    });
  });
});
