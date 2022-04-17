import './styles/App.css';
import About from './components/About';
import Projects from './components/Projects';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
