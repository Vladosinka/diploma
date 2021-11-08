import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
  return ( 
    <BrowserRouter>
      <div className = 'app-wrapper' >
        <Header / >
          <div className = 'flex'>
            <Navbar / >
              <div className = 'app-wrapper-fon'>
              <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
              </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;