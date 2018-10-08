import ApiUser from '../api/user';

const login = function ( data ) {
  return ApiUser.login( data );
};

const register = function ( data ) {
  return ApiUser.register( data );
}

export default {
  login,
  register
}
