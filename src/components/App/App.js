import React from 'react';
import '../../App.css';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/home';
import Bd from '../Pages/Bd/Bd';
import Manga from '../Pages/Manga/manga';
import Comics from '../Pages/Comics/comics';
import Search from '../Pages/Search/Search';
import Panier from '../Pages/Panier/Panier';
import ErrorPage from '../Pages/Error/ErrorPage';
import history from '../../history.js';
import DetailProduct from '../Pages/DetailProduct/detailProduct';
import Modal from '../Modal/Modal';
import Signup from '../Pages/Login/Signup';
import Login from '../Pages/Login/Login';
import Logout from '../Pages/Login/Logout';
import Update from '../Pages/Login/Update';
import ForgetPassword from '../Pages/Login/ForgetPassword';
import GetProfil from '../Pages/Login/GetProfil';
import ProductProvider from '../Global/ProductContext';
import SerieProvider from '../Global/SerieContext';
import AuteursProvider from '../Global/AuteursContext';

const App = () => {
  return (
    //? // TODO c'est quoi ce router? diriger vers une pages?
    <Router history={history}>
      <ProductProvider>
        <SerieProvider>
          <AuteursProvider>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Bd/:idpage" component={Bd} />
              <Route path="/Manga" component={Manga} />
              <Route path="/Comics" component={Comics} />
              <Route path="/Search" component={Search} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/logout" component={Logout} />
              <Route path="/forgetpassword" component={ForgetPassword} />
              <Route path="/update" component={Update} />
              <Route path="/getprofil" component={GetProfil} />
              <Route path="/Panier" component={Panier} />
              <Route path="/Panier" component={Modal} />
              <Route path="/product/:id/" component={DetailProduct} />
              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </AuteursProvider>
        </SerieProvider>
      </ProductProvider>
    </Router>
  );
};

export default App;
