import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import HeaderMobile from './HeaderMobile';

function App() {
  const [{ size }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run pnce when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('user', authUser)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        // the user just logged in / the user was logged in
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    /*  window.addEventListener('resize', () => { */
    /*  size = {
       width: window.innerWidth,
       height: window.innerHeight
     } */
    dispatch({
      type: 'CHECK_WINDOW_SIZE',
      size: {
        width: window.innerWidth,
        height: window.innerHeight,

      }
    })
    /*        size.width
     */
    console.log(size.width > 900)
    /* }) */


  }, [])

  // componentDidMount() {
  //   // code to run on component mount
  // }

  /*   dispatch({
      type: 'CHECK_WINDOW_SIZE',
      size: {
        width: window.innerWidth,
        height: window.innerHeight,
  
      }
    }) */

  return (
    <Router>

      <div className="app">
        {/* HEADER */}
        <Switch>
          <Route path='/login'>
            {/* CHECKOUT */}
            <Login />
          </Route>
          <Route path='/payment'>
            {/* CHECKOUT */}
            <Header />
            <HeaderMobile />
            <Payment />
          </Route>
          <Route path='/checkout'>
            <Header />
            <HeaderMobile />
            {/* CHECKOUT */}
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <HeaderMobile />
            {/* HOME */}
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
