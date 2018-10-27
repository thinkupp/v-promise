const base_ip = 'http://192.168.0.100:3000/api';
// const base_ip = 'http://192.168.8.101:3000/api';

const request = function ( option ) {
  return new Promise((resolve, reject) => {
    option.url = base_ip + option.url;
    const userId = getApp().globalData.userId;
    if ( !option.header ) option.header = {};
    if ( userId ) option.header.uid = userId;

    wx.showNavigationBarLoading();
    wx.request(Object.assign({}, option, {
      success: function ( res ) {
        const data = res.data;
        if ( res.statusCode >= 200 && res.statusCode < 400 ) {
          resolve( data );
        } else {
          let message = data;
          if (typeof data) {
            message = data.message || data.toString();
          }
          if (res.statusCode === 400) {
            wx.showModal({
              title: '提示',
              content: message,
              showCancel: false
            });
          }

          reject( data );
        }
      },

      fail: function ( err ) {
        reject( err )
      },

      complete: function () {
        wx.hideNavigationBarLoading();
      }
    }))
  })
};

export default request;
