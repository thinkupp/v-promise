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
}

export default {
  createAppoint,
  fetchCreateAppoint
}
