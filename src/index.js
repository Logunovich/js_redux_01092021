import './styles.css';
import { createStore } from 'redux';
import { inc, dec, che } from './redux/actions';
import { rootReduc } from './redux/rootReducer'

const counter = document.getElementById('counter'),
      addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme');

const myStore = createStore(rootReduc, 0) 

addBtn.addEventListener('click', () => {
    myStore.dispatch(inc())
})

subBtn.addEventListener('click', () => {
    myStore.dispatch(dec())
})


themeBtn.addEventListener('click', () => {
    // const theme = document.body.classList.contains('light')
    // ? 'dark'
    // : 'light'

    const theme = document.body.classList.contains('dark') 
    ? 'light'
    : 'dark'
    console.log(theme)
    myStore.dispatch(che(theme))
})

myStore.subscribe(() => {
    const state = myStore.getState()

    counter.textContent = state.count;
    document.body.className = state.theme.theme
})