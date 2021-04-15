import React from "react";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Rounds from "./Pages/Rounds/rounds";
import {Route , Switch} from "react-router-dom";
// import Sponsors from "./Sections/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/rounds" component={Rounds} />
      </Switch>
      {/* <AboutUs />
      <Event />
      <Speakers />
      <div className="blue-grad">
        <Sponsors />
        <Footer />
      </div> */}
    </>
  );
}

export default App;