import './App.css';
import CharacterCounter from './components/CharacterCounter';
import ColorChange from './components/ColorChange';
import Counter from './components/Counter';
import Form from './components/Form';
import IncrementWithDelay from './components/IncrementWithDelay';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import ToggleVisibilty from './components/ToggleVisibilty';
import QuizApp from './components/QuizApp';
function App() {
  return (
    <div className="">
    <Counter/>
    <ColorChange/>
    <Form/>
    <ToggleVisibilty/>
    <RandomNumberGenerator/>
    <IncrementWithDelay/>
    <CharacterCounter/>
    <QuizApp/>
    </div>
  );
}

export default App;
