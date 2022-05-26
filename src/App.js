import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { useStateValue } from './context/StateProvider';

import { auth } from './context/firebaseInit';



// Pages / Components
import HomePage from './Pages/HomePage'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout';

const App = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is already logged in 
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is Logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App