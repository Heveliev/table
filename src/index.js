import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persisotor } from './redux/store';
import { RotatingLines } from 'react-loader-spinner';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={<RotatingLines 
      strokeColor="grey" 
      strokeWidth="5" 
      animationDuration="0.75" 
      width="96" visible={true} />}
        persistor={persisotor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
