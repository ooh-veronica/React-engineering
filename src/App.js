import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Services from './components/Services/Services';
import StepOne from './components/StepOne/StepOne';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Work />
      <Services />
      <StepOne />
    </div>
  );
}

export default App;
