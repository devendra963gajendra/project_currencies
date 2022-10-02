import './App.css';
import './Universal.css'
import Coins from "./components/Coins"
import { Navigationbar } from './components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Navigationbar />
      <Coins />
    </div>
  );
}

export default App;
