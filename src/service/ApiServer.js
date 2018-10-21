import ApiUser from '../api/user';
import ApiAppoint from '../api/appoint'
import ApiComments from '../api/comments'

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
  return ApiAppoint.fetchCreateAppoint( params )
};

const fetchAppointDetail = function ( id ) {
  return ApiAppoint.fetchAppointDetail( id );
};

const publishComment = function ( data ) {
  return ApiComments.publishComment( data );
};

const fetchAppointComments = function ( params ) {
  return ApiComments.fetchAppointComments( params );
}

export default {
  login,
  register,
  createAppoint,
  fetchCreateAppoint,
  fetchAppointDetail,
  publishComment,
  fetchAppointComments
}
