import request from './request';

const login = function ( data ) {
  return request({
    url: '/users/login',
    data,
    method: 'post'
  })
};

const register = function ( data ) {
  return request({
    url: '/users/register',
    data,
    method: 'post'
  })
};

const accessRecord = function ( data ) {
  return request({
    url: '/users/access-record',
    data,
    method: 'POST'
  })
}

export default {
  login,
  register,
  accessRecord
}
