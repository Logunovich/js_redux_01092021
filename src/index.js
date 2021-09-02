import './styles.css';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const counter = document.getElementById('counter'),
      addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme');


const store = createStore(rootReducer, applyMiddleware(thunk, logger));




addBtn.addEventListener('click', () => {
    store.dispatch(increment())
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())    
});





themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') 
    ? 'dark'
    : 'light'
    store.dispatch(changeTheme(newTheme))
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter
    document.body.className = state.theme.value;

    [ addBtn, subBtn, themeBtn, asyncBtn ].forEach(btn => {
        btn.disabled = state.theme.disabled
    })
    
})

store.dispatch({type: 'INIT_APPLICATION'})