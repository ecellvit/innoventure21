import React from "react";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Rounds from "./Pages/Rounds/rounds";
import Round1A from "./Pages/Round/Round1/round1A";
import Round1B from "./Pages/Round/Round1/round1B";
import Round2 from "./Pages/Round/Round2/round2";
import Round1_con from "./Pages/Round/Round1/round1_con";
import {Route , Switch} from "react-router-dom";
// import Sponsors from "./Sections/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/rounds" component={Rounds} />
        <Route path="/round1A" component={Round1A} />
        <Route path="/round1B" component={Round1B} />
        <Route path="/round2" component={Round2} />
        <Route  path="/round1_con" component={Round1_con} />
      </Switch>
    </>
  );
}

export default App;