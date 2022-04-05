const App = () => {
  const playListTitle = 'My cool playlist';
  const songs = [
    {
      id: 1,
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG',
    },
    {
      id: 2,
      title: 'Enter Sandman',
      artist: 'Metallica',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg',
    },
    {
      id: 3,
      title: "Don't stop me now",
      artist: 'Queen',
      albumCover:
        'https://upload.wikimedia.org/wikipedia/en/9/97/Queen-dont-stop-me-now-1979-6-s.jpg',
    },
  ];
  const playCounts = {
    Dreams: 10,
    'Enter Sandman': 5,
    "Don't stop me now": 8,
  };
  const currentlyPlaying = "Don't stop me now";

  return (
    <div className="App">
      <h1>React Intro</h1>
    </div>
  );
};

export default App;

// Create your new Components here
