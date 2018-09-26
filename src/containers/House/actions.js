import axios from 'axios';
import _ from 'lodash';
import globalConstants from './../../constants';

export const getSwornMembers = (dispatch, members) => {
  let promises = [];
  members.forEach(url => {
    promises.push(getMember(url));
  });
  
  Promise.all(promises).then(membersList => {
    dispatch({ type: 'GET_MEMBERS_SUCCESS', payload: membersList });
  }); 
}

function getMember(apiURL) {
  return axios.get(apiURL)
    .then(({ data: response, status }) => {
      if(status === 200) {
        return response;
      }
    })
    .catch(console.log);
}

export const loading = () => {
  return {
    type: globalConstants.LOADING,
    payload: true,
  }
}