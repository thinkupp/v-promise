const base_ip = 'http://192.168.8.249:3000/api';

const request = function ( option ) {
  option.url = base_ip + option.url;

  return new Promise((resolve, reject) => {
    wx.request(Object.assign({}, option, {
      success: function ( res ) {
        const data = res.data;
        console.log("request", data, typeof data);
        if (typeof data === 'object') {
          resolve( data );
        } else {
          reject( data );
        }
      },
      fail: function ( err ) {
        reject( err )
      }
    }))
  })
};

export default request;
