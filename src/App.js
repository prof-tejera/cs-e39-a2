import './App.css';
import { Stopwatch, Countdown, XY, Tabata } from './Timer';

const App = () => {
  return (
    <div>
      <Stopwatch />
      <Countdown />
      <XY />
      <Tabata />
    </div>
  );
};

export default App;
