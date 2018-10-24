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
};

const commentLike = function ( data ) {
  return request({
    url: '/comment/like',
    data,
    method: 'POST'
  })
}

export default {
  publishComment,
  fetchAppointComments,
  commentLike
}
