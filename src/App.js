
import './App.css';
import CustomerAdd from './CustomerAdd';
import {Provider} from "react-redux"
import  { Store } from "./Store.js"
import CustomerView from './CustomerView';

function App() {
  return (
    <Provider  store={Store} >
      <div className="App">
        <h1>React Redux Customer</h1>
        <CustomerAdd/>
        <CustomerView/>
      </div>
    </Provider>

  );
}

export default App;
