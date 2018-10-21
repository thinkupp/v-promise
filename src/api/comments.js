import request from './request';

const publishComment = function ( data ) {
  return request({
    url: '/comment',
    data,
    method: 'POST'
  })
};

const fetchAppointComments = function ({appointId, startId, size}) {
  return request({
    url: `/comment/${appointId}?startId=${startId}&size=${size}`
  })
}

export default {
  publishComment,
  fetchAppointComments
}
