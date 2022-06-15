import './App.css';
import Slider from "./components/Slider/Slider";
import Container from "./components/Container/Container";

const App = (props) => {
  return (
    <div className="App">
      <Container title="Just getting started">
            <Slider />
      </Container>
    </div>
  );
}

export default App;
