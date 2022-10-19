import './App.scss';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Line from "./components/Line/Line";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <main>
          <Navigation/>
          <Header/>
          <Line/>
          <SectionOne/>
          <SectionTwo/>
          <Footer/>
      </main>
  );
}

export default App;
