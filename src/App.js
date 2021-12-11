import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import Exparts from "./Pages/Home/Exparts/Exparts";
import Home from './Pages/Home/Home/Home';

import Services from './Pages/Home/Services/Services';
import Loging from "./Pages/Loging/Loging";
import Notfound from "./Pages/Notfound/Notfound";
import Header from "./Pages/Shared/Header";


function App() {
  return (
    <div className="App">
      <>
        <AuthProvider>

          <Router>
            <Header></Header>
            <Switch>

              <Route exact path="/">
                <Home></Home>
                <Services></Services>
                <Exparts></Exparts>
              </Route>

              <Route path="/home">
                <Home></Home>
                <Services></Services>
                <Exparts></Exparts>
              </Route>


              <Route path="/login">
                <Loging></Loging>
              </Route>

              <Route path="/booking/:serviceID">
                <Booking></Booking>
              </Route>


              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
          </Router>

        </AuthProvider>



      </>
    </div>
  );
}

export default App;
