import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ChatIndex from './components/chat/ChatIndex'
import ChatShow from './components/chat/ChatShow'
import Footer from './components/common/Footer'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/secureRoute'
import UserSwipe from './components/match/UserSwipe'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <SecureRoute path="/chat/:chatId">
          <ChatShow />
        </SecureRoute>
        <SecureRoute path="/chat">
          <ChatIndex />
        </SecureRoute>
        <SecureRoute path="/users">
          <UserSwipe />
        </SecureRoute>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
