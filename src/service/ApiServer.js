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
};

const fetchJoinAppoint = function ( params ) {
  return ApiAppoint.fetchJoinAppoint( params );
}

const watchAppoint = function ( appointId ) {
  return ApiAppoint.watchAppoint( appointId );
}

const supportAppoint = function ( params ) {
  return ApiAppoint.supportAppoint( params )
};

const clockIn = function ( appointId ) {
  return ApiAppoint.clockIn( appointId );
}

const supporters = function ( appointId ) {
  return ApiAppoint.supporters( appointId );
}

const unSupporters = function ( appointId ) {
  return ApiAppoint.unSupporters( appointId )
}

const commentLike = function ( data ) {
  return ApiComments.commentLike( data )
};

const accessRecord = function ( data ) {
  return ApiUser.accessRecord( data )
};

const updateAppoint = function ( data ) {
  return ApiAppoint.updateAppoint( data )
};

const fetchAllAppoint = function ( data ) {
	return ApiAppoint.allAppoint( data );
}

export default {
  login,
  register,
  createAppoint,
  fetchCreateAppoint,
  fetchAppointDetail,
  publishComment,
  fetchAppointComments,
  fetchJoinAppoint,
  watchAppoint,
  supportAppoint,
  clockIn,
  supporters,
  unSupporters,
  commentLike,
  accessRecord,
  updateAppoint,
	fetchAllAppoint
}
