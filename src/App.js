import React from 'react';
import './App.css';
import { Provider} from 'react-redux';
import store from './redux/Store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <HooksIceCreamContainer/>
      <NewCakeContainer/>
    </div>
    
    </Provider>
  )
}

export default App;
