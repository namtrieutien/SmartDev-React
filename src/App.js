import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';
import PostDetail from './pages/PostDetail';
import Dashboard from './management-pages/pages/Dashboard';

import Profile from './components/Profile/profile';
import { ErrorPage } from './pages/ErrorPage/error';

function App() {

  return (
    <BrowserRouter>
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
          <Route path="/post" component={PostDetail}>
            {/* <PostDetail/> */}
          </Route>
          <Route path="*" component={ErrorPage}>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
