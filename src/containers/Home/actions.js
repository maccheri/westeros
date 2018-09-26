import axios from 'axios';
import _ from 'lodash';
import globalConstants from './../../constants';

export const getHouses = (dispatch, name) => {
  // API nao esta filtrando como o esperado irei utilizar .filter na resposta
  // const queryString = (name) ? `?name=${name}` : '';
  axios.get(`https://www.anapioficeandfire.com/api/houses`)
    .then(({ data: response, status }) => {
      if(status === 200) {
        let promises = [];
        let data = response;
        
        if (name) {
          data = data.filter(house => _.includes(house.name.toLowerCase(), name.toLowerCase()))
        }

        data.forEach(house => {
          if (house.currentLord) {
            promises.push(getCurrentLord(house.currentLord));
          }
        });
        
        Promise.all(promises).then(lordsList => {
          const housesCompleteInfo = data.map(houseInfo => {
            const { name, region, coatOfArms, currentLord, url, swornMembers } = houseInfo;
            const lordInfo = lordsList.filter(lord => lord.url === currentLord)[0];
            const lord = (lordInfo) ?  { name: lordInfo.name, born: lordInfo.born, url: lordInfo.url } : null;
            const id = url.split('/').pop();

            return { 
              name, 
              region, 
              coatOfArms, 
              lord,
              id,
              swornMembers,
            };
          });
            
          dispatch({ type: 'GET_HOUSES_SUCCESS', payload: housesCompleteInfo });
        });
      }
    })
    .catch(function (error) {
      dispatch({ type: 'GET_HOUSES_FAILED', payload: error || 'Erro ao buscar os dados da API' });
    });
}

function getCurrentLord(apiURL) {
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