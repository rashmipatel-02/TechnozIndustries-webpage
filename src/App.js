
import './App.css';
import Navbar from './Components/navbar/Navbar';
import HomeScreen from './Components/Home/HomeScreen';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Experience from './Components/Experience/Experience';
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import Review from './Components/Review/Review';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen/>
      <About/>
      <Products/>
      <Experience/>
      <WhyChoose/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
