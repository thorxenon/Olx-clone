import { Provider } from 'react-redux';
import App from './App';
import Reducers from './Reducers';
import { createRoot } from 'react-dom/client';

const store = createStore(Reducers);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
