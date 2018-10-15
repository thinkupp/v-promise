import ApiUser from '../api/user';
import ApiAppoint from '../api/appoint'

const login = function ( data ) {
  return ApiUser.login( data );
};

const register = function ( data ) {
  return ApiUser.register( data );
};

const createAppoint = function ( data ) {
  return ApiAppoint.createAppoint( data )
};

const fetchCreateAppoint = function ( params ) {
  return ApiAppoint.fetchCreateAppoint( ...params )
}

export default {
  login,
  register,
  createAppoint,
  fetchCreateAppoint
}
