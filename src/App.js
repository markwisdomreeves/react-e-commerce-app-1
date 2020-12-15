import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './ParentContainer/Navbar';
import ProductList from './ParentContainer/ProductList';
import Details from './ParentContainer/Details';
import Cart from './ParentContainer/ChildContainer/Cart';
import Default from './ParentContainer/Default';
import Modal from './ParentContainer/Modal';


function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
    </React.Fragment>
  );
}

export default App;


































// import React, { Component } from 'react';
// import logo from './logo';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import Details from './components/Details';
// import Cart from './components/Cart';
// import Default from './components/Default';

// export default class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//            <Navbar />
//            <ProductList />
//            <Details />
//            <Cart />
//            <Default />
//      </React.Fragment>
//     );
//   }
// }

