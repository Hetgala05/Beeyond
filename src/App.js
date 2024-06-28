import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
   return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
