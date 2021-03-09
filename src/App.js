import { Route, BrowserRouter as Router } from 'react-router-dom';

// styles
import './App.css';

// assets
import logo from './assets/static/logo/uohyd-logo.jpg';

// context
import { LanguageContext } from './context/LanguageContext';

// pages for routing
import WelcomePage from './components/WelcomePage/WelcomePage';
import AnnotationForm from './components/WelcomePage/AnnotationForm';
import AudioRecord from './components/AudioRecord/AudioRecord';
import VideoRecord from './components/VideoRecord/VideoRecord';

function App() {
  return (
    <LanguageContext.Provider value='english'>
      <img src={logo} alt="uohyd" />
      <Router>
       
        <Route path='/' exact>
          <WelcomePage />
        </Route>
       
        <Route path='/audio' exact>
          <AudioRecord />
        </Route>
        
        <Route path='/video' exact>
          <VideoRecord />
        </Route>

        <Route path='/form' exact>
          <AnnotationForm />
        </Route>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
