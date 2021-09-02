import './styles.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { inc, dec, changeTheme } from './redux/actions';

const addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme'),
      counterBox = document.getElementById('counter');

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch(inc())
})

subBtn.addEventListener('click', () => {
    store.dispatch(dec())
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
    store.dispatch(changeTheme(newTheme))
})


store.subscribe(() => {
    const state = store.getState()
    counterBox.textContent = state.count;
    document.body.className = state.theme.theme;
})

store.dispatch({type: '__IN__'});