import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
