import './App.css';
import Router from './pages/Router/Router';
import { Provider } from 'react-redux';
import store from './cartSlice/Store';

function App() {
  return (
    <Provider store={store}>
       <Router/>
    </Provider>
  
  
  
  );
}

export default App;
