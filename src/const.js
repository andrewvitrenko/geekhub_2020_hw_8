import ukraine from './assets/img/flags/ukraine.png';
import greatBritain from './assets/img/flags/great_britain.png';
import usa from './assets/img/flags/usa.png';
import australia from './assets/img/flags/australia.png';
import newZeland from './assets/img/flags/new_zeland.png';
import egypt from './assets/img/flags/egypt.png';

const countries = [
  {
    name: 'Ukraine',
    flag: ukraine,
    code: 'UA',
  },
  {
    name: 'Great Britain',
    flag: greatBritain,
    code: 'GB',
  },
  {
    name: 'USA',
    flag: usa,
    code: 'US',
  },
  {
    name: 'Australia',
    flag: australia,
    code: 'AU',
  },
  {
    name: 'New Zeland',
    flag: newZeland,
    code: 'NZ',
  },
  {
    name: 'Egypt',
    flag: egypt,
    code: 'EG',
  },
];

const getTimeRegexp = /\d{2}:\d{2}:\d{2}/;

export { countries, getTimeRegexp };
