const to = function ( url ) {
  wx.navigateTo({ url })
};

const toCreate = function () {
  to('/pages/create/main')
};

export default {
  toCreate
};
