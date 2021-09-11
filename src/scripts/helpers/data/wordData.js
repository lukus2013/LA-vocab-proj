import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => getWords().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

const createWord = (wordObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, wordObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getWords().then(resolve);
        });
    }).catch((error) => reject(error));
});

const getOneWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateWord = (wordObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${wordObj.firebaseKey}.json`, wordObj)
    .then(() => getWords().then(resolve))
    .catch(reject);
});

export {
  getWords, deleteWord, createWord, updateWord, getOneWord
};
