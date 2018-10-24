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
    url: '/appoint/detail/' + id
  })
};

const fetchJoinAppoint = function ( {startId, size} ) {
  return request({
    url: '/appoint/join?startId=' + startId + '&size=' + size
  })
};

const watchAppoint = function ( appointId ) {
  return request({
    url: '/appoint/watch',
    method: 'POST',
    data: {
      appointId
    }
  })
};

const supportAppoint = function ( data ) {
  return request({
    url: '/appoint/support',
    method: 'POST',
    data
  })
};

const clockIn = function ( appointId ) {
  return request({
    url: '/appoint/clock-in',
    data: { appointId },
    method: 'POST'
  })
};

const supporters = function ( appointId ) {
  return request({
    url: '/appoint/supporters?appoint_id=' + appointId,
  })
};

const unSupporters = function ( appointId ) {
  return request({
    url: '/appoint/un-supporters?appoint_id=' + appointId
  })
}

export default {
  createAppoint,
  fetchCreateAppoint,
  fetchAppointDetail,
  fetchJoinAppoint,
  watchAppoint,
  supportAppoint,
  clockIn,
  supporters,
  unSupporters
}
