import './styles.css';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncIncrement } from './redux/actions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const counter = document.getElementById('counter'),
      addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme');


const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger));

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
});