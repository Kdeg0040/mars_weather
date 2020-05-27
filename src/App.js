import React from 'react';

import Weather from './components/Weather';

function App() {
  return (
    <div className="hero is-fullheight has-background">
      <div className="title is-size-1">Mars Weather</div>
      <img className="hero-background is-transparent" src="https://www.nasa.gov/sites/default/files/thumbnails/image/pia22228.jpg" alt=""></img>
      <Weather />
    </div>
  );
}

export default App;
