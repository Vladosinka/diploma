import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

const App = (props) => {
  return ( 
      <div className = 'app-wrapper' >
        <Header / >
          <div className = 'flex'>
            <Navbar / >
              <div className = 'app-wrapper-fon'>
                  <Route path="/profile" render ={() => 
                  <Profile />} 
                  />
                  <Route path="/Friends" render ={() => 
                  <Friends />} 
                  />
                  <Route path="/dialogs" render ={() => 
                  <Dialogs />}
                  />
                  <Route path="/feed" render ={() => 
                  <News />} 
                  />
                  <Route path="/music" render ={() => 
                  <Music />} 
                  />
                  <Route path="/settings" render ={() => 
                  <Settings 
                  />
                  } />
              </div>
          </div>
      </div>
  );
}

export default App;
