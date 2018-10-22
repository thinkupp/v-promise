import request from './request';

const createAppoint = function ( data ) {
  return request({
    url: '/appoint/create',
    data,
    method: 'POST'
  })
};

const fetchCreateAppoint = function ( { id, size } ) {
  return request({
    url: '/appoint/create?id=' + id + '&size=' + size
  })
};

const fetchAppointDetail = function ( id ) {
  return request({
    url: '/appoint/' + id
  })
};

const fetchJoinAppoint = function ( {startId, size} ) {
  return request({
    url: '/appoint/join?startId=' + startId + '&size=' + size
  })
}

export default {
  createAppoint,
  fetchCreateAppoint,
  fetchAppointDetail,
  fetchJoinAppoint
}
