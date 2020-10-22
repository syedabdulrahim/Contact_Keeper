import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utility/setAuthToken';
import './App.css';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

// import logo from './logo.svg';


function App() {
  return (
            
                <AuthState>
                  <ContactState>  
                   <AlertState>
                   <BrowserRouter>
                      <React.Fragment>
                         <Navbar/>
                            <div className="container">
                              <Alerts></Alerts>
                             <Switch>
                             <PrivateRoute exact path ="/"  component={Home}></PrivateRoute>
                              <Route exact path ="/about"  component={About}></Route>
                              <Route exact path="/register" component={Register}></Route>
                              <Route exact path="/login" component={Login}></Route>
                               </Switch>
                            </div>
                     </React.Fragment>
                   </BrowserRouter>
                   </AlertState>
                  </ContactState>
                </AuthState>
              
 
  );
}

export default App;
