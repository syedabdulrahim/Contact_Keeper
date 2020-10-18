import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


// import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <AuthState>
    <ContactState>  
     <BrowserRouter>
        <React.Fragment>
           <Navbar/>
              <div className="container">
               <Switch>
                <Route exact path ="/"  component={Home}></Route>
                <Route exact path ="/about"  component={About}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>

                 </Switch>
              </div>
       </React.Fragment>
     </BrowserRouter>
    </ContactState>
  </AuthState>
 
  );
}

export default App;
