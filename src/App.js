import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('aboutMe')


  if(currentTab==='aboutMe'){
    return (
      <div className="body">
        <Header setCurrentTab={setCurrentTab}/>
        <main>
        <AboutMe/>
        </main>
        <Footer/>
      </div>
    );
  } else if(currentTab==='portfolio'){
    return (
      <div className="body">
        <Header setCurrentTab={setCurrentTab}/>
        <main>
          <Portfolio/>
        </main>
        <Footer/>
      </div>
    );
  } else if(currentTab==='contactMe'){
    return (
      <div className="body">
        <Header setCurrentTab={setCurrentTab}/>
        <main>
        <ContactMe/>
        </main>
        <Footer/>
      </div>
    );
  } else if(currentTab==='resume'){
    return (
      <div className="body">
        <Header setCurrentTab={setCurrentTab}/>
        <main>
        
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
