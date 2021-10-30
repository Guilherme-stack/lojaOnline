import './App.css';
import Content from './pages/Content';
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
        <div className="App">
           <Content></Content>
        </div>
    </Provider>
    
  );
}

export default App;
