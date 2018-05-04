import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';
import App from 'app/main-app';

// Save a reference to the root element for reuse
const rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
let renderApp = () => {
  ReactDOM.render(<App />, rootEl);
  registerServiceWorker();
};

if (module.hot) {
  // In development, we wrap the rendering function to catch errors,
  // and if something breaks, log the error and render it to the screen
  const render = () => {
    try {
      renderApp();
    } catch (error) {
      console.error(error);
    }
  };

  // Whenever the App component file or one of its dependencies
  // is changed, re-import the updated component and re-render it
  module.hot.accept(App, () => {
    setTimeout(render);
  });
}

renderApp();
