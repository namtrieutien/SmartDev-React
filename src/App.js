import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import NoMatch from './pages/NoMatch';
import Contact from './pages/Contact';
import Login from './components/Login';
import PostDetail from './pages/PostDetail';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="./App.css">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/post" >
            <PostDetail/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
