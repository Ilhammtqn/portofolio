import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './index.css';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <MainPage />
      <Projects />
      <Certificate />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
