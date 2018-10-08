const base_ip = 'http://192.168.0.100:3000/api';

const request = function ( option ) {
  option.url = base_ip + option.url;

  return new Promise((resolve, reject) => {
    wx.request(Object.assign({}, option, {
      success: function ( res ) {
        resolve( res.data );
      },
      fail: function ( err ) {
        reject( err )
      }
    }))
  })
};

export default request;
