import React from "react";
import Header from "./Components/Header";
import Route from "./Components/Route";
import About from "./Components/About";
import Home from "./Home";
import Contact from "./Components/Contact";
import web from './Images/weblogo.png';

 const App= () => {
  return (
    <article id="body">
        <div>
        <section  id="head">
        <img src={web} alt='Myimage'style={{width:"15%",height:"100px",borderRadius:"50%"}}/>
     <nav  className="navbar">
      <Header />
      </nav>
      </section>
      </div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
    </article>
  );
};
export default App;