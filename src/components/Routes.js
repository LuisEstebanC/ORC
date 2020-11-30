import { Fragment } from "react";

import Game from './Navbar/Game';
import Home from './Navbar/Home';
import About from './Navbar/About';
import Menu from './Navbar/Menu';
import Form3 from './Navbar/Form3';
import Register from './Navbar/Register';
import Cotizacion from './Cotizacion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Loginpage from './Navbar/Loginpage';

function Routes() {
    return(
        <Fragment>
             <Router>
                
                    <Switch>

                        <Route path="/Loginpage"exact component ={Loginpage}>
              
                        </Route>
                        <Route path="/Register"exact component ={Register}>
              
                        </Route>
                        <Route path="/Menu" exact component ={Menu}>
              
                        </Route>
                        <Route path="/Game" exact component ={Game}>
              
                        </Route>
                        <Route path="/About"exact component ={About}>
              
                        </Route>
                        <Route path="/Form3"exact component ={Form3}>
              
                        </Route>
                        <Route path="/Cotizacion"exact component ={Cotizacion}>
              
                        </Route>
                        <Route path="/"exact component ={Home}>
             
                        </Route>
            
                    </Switch>
                
      </Router>
        </Fragment>
    );
}

export default Routes;