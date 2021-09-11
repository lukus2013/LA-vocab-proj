import { getWords } from '../data/wordData';
import addWordForm from '../form/wordForm';
import showWords from '../showWords';
import signOut from '../signOut';

const navEvents = () => {
  document.querySelector('#signout-button').addEventListener('click', signOut);

  document.querySelector('#all-words').addEventListener('click', () => { getWords().then(showWords); });

  document.querySelector('#add-word').addEventListener('click', addWordForm());
};
export default navEvents;
