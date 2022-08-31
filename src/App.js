import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Book from'./components/Book/Book';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const userContext = createContext()

function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>name:{loggedInUser.name}</p>
    <Router>  
      <Header/>
        <Routes>
          <Route path="/home" element={<Home />}/> 
          <Route path="/login" element={ <Login />}/>
          <Route
           path="/book/:bedType" element={<PrivateRoute><Book/></PrivateRoute>}
           />
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
    </userContext.Provider>
);
}

export default App;
