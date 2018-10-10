import request from './request';

const createAppoint = function ( data ) {
  return request({
    url: '/appoint',
    data,
    method: 'POST'
  })
}

export default {
  createAppoint
}
