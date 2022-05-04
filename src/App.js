import './App.css';
import Nav from './components/Nav/Nav.jsx'
import Services from './components/Services/Services';
import StepOne from './components/StepOne/StepOne';
import StepTwo from './components/StepTwo/StepTwo';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Nav />
      <Work />
      <Services />
      <StepOne />
      <StepTwo />
    </div>
  );
}

export default App;
