
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Footer/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import DetailsInfo from './Components/DetailsInfo/DetailsInfo';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});
  
  return (

    <UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart}}>
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/about">
          <Header/>
          <About></About>
          <Footer/>
        </Route>
        <Route path="/services">
          <Header/>
          <Services></Services>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/detailsInfo">
          <DetailsInfo></DetailsInfo>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </div>
      
    </UserContext.Provider>
  );
}

export default App;
