import './index.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Service from './components/Services/Service';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import TopHeader from './components/top-header/TopHeader';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <TopHeader />
        <Home />
        <About />
        <Skills />
        <Service />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollUp />
      </div>
    </div>
  );
}

export default App;
