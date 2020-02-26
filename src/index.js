import React from 'react';
import { render } from 'react-dom'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import './index.css';
import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightGreen[500] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(promise, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
