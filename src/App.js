import './App.css';
import './Components/Nav.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu';
import CheckBox from './Components/CheckBox';
import ColorButtons from './Components/ColorButtons';
import FloatingActionButton from './Components/FloatingActionButton';
import Posting from './Components/Post';
import Progress from './Components/ProgressInd';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Menu/>
      <CheckBox/>
      <ColorButtons/>
      <FloatingActionButton/>
      <Posting/>
      <Progress/>
    </div>
  );
}

export default App;
