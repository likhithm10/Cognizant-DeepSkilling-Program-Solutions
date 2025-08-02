import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import SayWelcome from './Components/SayWelcome';
import OnPress from './Components/OnPress';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div>
      <Counter/>
      <SayWelcome/>
      <OnPress/>
      <CurrencyConvertor/>
    </div>
    

  );
}

export default App;
