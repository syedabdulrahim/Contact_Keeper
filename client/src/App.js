import React from 'react';
import Navbar from '../src/components/layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContactState from './context/contact/ContactState';


// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ContactState>  
     <BrowserRouter>
        <React.Fragment>
           <Navbar/>
              <div className="container">
               <Switch>
                <Route exact path ="/"  component={Home}></Route>
                <Route exact path ="/about"  component={About}></Route>
                 </Switch>
              </div>
       </React.Fragment>
     </BrowserRouter>
    </ContactState>
 
  );
}

export default App;
