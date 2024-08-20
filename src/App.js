import React from 'react';
import SimpleSlideshow from './Slideshow';

const slideData = [
  { url: 'https://via.placeholder.com/800x300?text=Slide+1', caption: 'Slide 1' },
  { url: 'https://via.placeholder.com/800x300?text=Slide+2', caption: 'Slide 2' },
  { url: 'https://via.placeholder.com/800x300?text=Slide+3', caption: 'Slide 3' },
];

function App() {
  return (
    <div className="App">
      <SimpleSlideshow slides={slideData} />
    </div>
  );
}

export default App;

