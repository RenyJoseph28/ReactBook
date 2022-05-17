import logo from './logo.svg';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbooks from './component/Addbooks';
import Searchbook from './component/Searchbook';

function App() {
  return (
    <div>
      <Addbooks/>
      <Searchbook/>
    </div>
  );
}

export default App;
