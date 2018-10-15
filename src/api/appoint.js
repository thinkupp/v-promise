import request from './request';

const createAppoint = function ( data ) {
  return request({
    url: '/appoint/create',
    data,
    method: 'POST'
  })
};

const fetchCreateAppoint = function ( startIndex = 0, count = 20 ) {
  return request({
    url: '/appoint/create?startIndex=' + startIndex + '&count=' + count
  })
};

const fetchAppointDetail = function ( id ) {
  return request({
    url: '/appoint/' + id
  })
}

export default {
  createAppoint,
  fetchCreateAppoint,
  fetchAppointDetail
}
