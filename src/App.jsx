import { playListTitle, currentlyPlaying, songs } from "./assets/data";
import Header from "./Components/Header";
import Songs from "./Components/Songs";

const App = () => {
  return (
    <div className="App">
      <Header title={playListTitle} />
      <Songs currentlyPlaying={currentlyPlaying} songs={songs} />
    </div>
  );
};

export default App;
