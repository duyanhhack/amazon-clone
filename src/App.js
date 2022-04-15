import React, { useEffect } from 'react'
import HomePage from './components/HomePage'
import CheckoutPage from './components/CheckoutPage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import PaymentPage from './components/PaymentPage'
import { Routes, Route } from 'react-router-dom'
import { auth } from './fire/firebase'
import { useStateValue } from './state/StateProvider'
import './App.scss'

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('The user is >>>', authUser)

      if (authUser) {
        // user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}
//3:23
export default App;
