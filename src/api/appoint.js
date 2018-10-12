import request from './request';

const createAppoint = function ( data ) {
  return request({
    url: '/appoint/create',
    data,
    method: 'POST'
  })
}

export default {
  createAppoint
}
