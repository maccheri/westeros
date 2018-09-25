import axios from 'axios';
import globalConstants from './../../constants';

export const getHouses = (dispatch) => {
  axios.get('https://www.anapioficeandfire.com/api/houses')
    .then(({ data: response, status }) => {
      if(status === 200) {
        let promises = [];
        response.forEach(house => {
          if (house.currentLord) {
            promises.push(getCurrentLord(house.currentLord));
          }
        });
        
        Promise.all(promises).then(lordsList => {
          const housesCompleteInfo = response.map(houseInfo => {
            const { name, region, coatOfArms, currentLord } = houseInfo;
            const lordInfo = lordsList.filter(lord => lord.url === currentLord)[0];
            const lord = (lordInfo) ?  { name: lordInfo.name, born: lordInfo.born, url: lordInfo.url } : null;

            return { 
              name, 
              region, 
              coatOfArms, 
              lord,
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