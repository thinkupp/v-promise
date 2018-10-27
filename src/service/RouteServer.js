const to = function ( url ) {
  wx.navigateTo({ url })
};

const toCreate = function () {
  to('/pages/create/main')
};

const toAppointDetail = function ( id ) {
  to('/pages/appoint/main?id=' + id);
}

const toIndex = function () {
  wx.switchTab({
    url: '/pages/index/main'
  })
}

export default {
  toCreate,
  toAppointDetail,
  toIndex
};
