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

export default {
  login,
  register
}
