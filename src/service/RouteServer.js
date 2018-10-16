const to = function ( url ) {
  wx.navigateTo({ url })
};

const toCreate = function () {
  to('/pages/create/main')
};

const toAppointDetail = function ( id ) {
  to('/pages/appoint/main?id=' + id);
}

export default {
  toCreate,
  toAppointDetail
};
