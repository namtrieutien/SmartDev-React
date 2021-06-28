import './App.css';
import Home from './pages/Home';

import { Router, Switch, Route, } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import PostDetail from './pages/PostDetail';
import Dashboard from './management-pages/pages/Dashboard';

import Profile from './components/Profile/profile';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/Payment/success'
import { ErrorPage } from './pages/ErrorPage/error';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <div className="./App.css">
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/management" component={Dashboard}>
          </Route>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route path="/about" component={About} >
          </Route>
          <Route path="/product" component={Products}>
          </Route>
          <Route path="/contact" component={Contact}>
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/register" component={Register}>
          </Route>
          <Route path="/post" component={PostDetail}>
          </Route>

          <Route exact path="/payment" component={Payment}>
          </Route>
          <Route  path="/payment/success" component={PaymentSuccess}>
          </Route>

          <Route path="/payment/b" component={PaymentSuccess}>
          </Route>
          <Route path="*" component={ErrorPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
