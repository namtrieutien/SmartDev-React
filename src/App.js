import './App.css';
import Home from './pages/Home';

import { Router, Switch, Route, } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import CreatePosts from './components/CreatePosts';
import PostDetail from './pages/PostDetail';
import Dashboard from './management-pages/pages/Dashboard';

import Profile from './components/Profile/profile';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/Payment/success'
import PaymentHistory from './pages/PaymentHistory'
import { ErrorPage } from './pages/ErrorPage/error';
import history from './history';

import CartPopup from './components/Cart/CartPopup';
import EditUser from './components/EditUser';
import CategoryPosts from './pages/CategoryPosts/CategoryPosts';
import MyPosts from './pages/MyPosts/MyPosts';
import BestPrice from './pages/BestPrice/BestPrice';

function App() {
  return (
    <Router history={history}>
      <div className="./App.css">
        {/* only visible when click in cart icon in navbar */}
        <CartPopup />
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
          <Route path="/create-post" component={CreatePosts}>
          </Route>
          <Route path="/post" component={PostDetail}>
          </Route>
          <Route path="/post/:postId" exact component={PostDetail} />
          <Route exact path="/payment" component={Payment}>
          </Route>
          <Route  path="/payment/success" component={PaymentSuccess}>
          </Route>
          <Route path="/payment/history" component={PaymentHistory}>
          </Route>
          <Route path="/edit_profile" component={EditUser}/>
          <Route path="/category/:cat_id" component={CategoryPosts} />
          <Route path="/my-posts" exact component={MyPosts} />
          <Route path="/best-price" exact component={BestPrice} />
          <Route path="*" component={ErrorPage}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
