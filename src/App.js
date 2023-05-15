import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Separator from './Components/Welcome/Separator';
import WelcomeSection from './Components/Welcome/WelcomeSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WelcomeSection/>
      <Separator/>
    </div>
  );
}

export default App;
