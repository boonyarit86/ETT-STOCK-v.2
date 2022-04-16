import './App.css';
import Heading from './Components/Text/Heading';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <p>Hi</p>

      <Test>
        <Heading type="main" text="Heading 1" />
        <Heading type="sub" text="Heading 2" />
      </Test>
    </div>
  );
}

export default App;
