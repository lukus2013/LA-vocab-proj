import createDom from '../helpers/dom/createDom';
import domClicks from '../helpers/events/domEvents';
import { getWords } from '../helpers/data/wordData';
import showWords from '../helpers/showWords';
import navBar from '../helpers/dom/navBar';
import navEvents from '../helpers/events/navEvents';
import logoutButton from './logoutButton';

const startApp = () => {
  createDom();
  domClicks();
  navBar();
  logoutButton();
  navEvents();
  getWords().then((words) => showWords(words));
};

export default startApp;
