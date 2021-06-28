import './App.css';
import Home from './pages/Home';

import { Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import CreatePosts from './components/CreatePosts';
import PostDetail from './pages/PostDetail';
import Dashboard from './management-pages/pages/Dashboard';

import Profile from './components/Profile/profile';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/Payment/success'

import history from './history'

function App() {

  return (
    <Router history={history}>
      <div className="./App.css">
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="/management" component={Dashboard}>
            {/* <Dashboard /> */}
          </Route>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route path="/about" component={About}>
            {/* <About /> */}
          </Route>
          <Route path="/product" component={Products}>
            {/* <Products /> */}
          </Route>
          <Route path="/contact" component={Contact}>
            {/* <Contact /> */}
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/profile" >
            <Profile />
          </Route>
          <Route path="/register" component={Register}>
          </Route>
          <Route path="/create-post" component={CreatePosts}>
          </Route>
          <Route path="/post" component={PostDetail}>
            {/* <PostDetail/> */}
          </Route>

          <Route exact path="/payment" component={Payment}>
          </Route>
          <Route  path="/payment/success" component={PaymentSuccess}>
          </Route>

          <Route path="/payment/b" component={PaymentSuccess}>
          </Route>
          <Route path="*" component={NoMatch}>
            {/* <NoMatch /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
