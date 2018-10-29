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
<<<<<<< HEAD
  wx.reLaunch({
	url: '/pages/index/main'
=======
  wx.switchTab({
    url: '/pages/index/main'
>>>>>>> b277e4b5dc464556857103ed9858f406e86049b7
  })
}

export default {
  toCreate,
  toAppointDetail,
  toIndex
};
