import React from "react";
import './App.css';

const App = () => {
  return (
  <div className='app-wrapper'>
<header className='header'>
  <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' />
</header>
<nav className='nav'>
  <div>
  <a> Profile </a>
  </div>
  <div>
  <a>  Message </a>
  </div>
  <div>
  <a>  News </a>
  </div>
  <div>
  <a>  Music </a>
  </div>
  <div>
  <a>  Settings </a>
  </div>
</nav>
<div className='content'>
    <div>
    <img src = 'https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
      <div>
          Post 1
        </div>
        <div>
          Post 2
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}

export default App;
