import {
  createWord, deleteWord, getOneWord, updateWord
} from '../data/wordData';
import addWordForm from '../form/wordForm';
import showWords from '../showWords';

const domClicks = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('submit-word')) {
      e.preventDefault();
      const wordObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
      };
      createWord(wordObject).then((wordArray) => showWords(wordArray));
    }

    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this word?')) {
        const [, id] = e.target.id.split('--');
        deleteWord(id).then(showWords);
      }
    }

    if (e.target.id.includes('edit-word')) {
      const [, id] = e.target.id.split('--');

      getOneWord(id).then((wordObj) => addWordForm(wordObj));
    }

    if (e.target.id.includes('updateWord')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const wordObj = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        firebaseKey
      };
      updateWord(wordObj).then(showWords);
    }
  });
};

export default domClicks;
