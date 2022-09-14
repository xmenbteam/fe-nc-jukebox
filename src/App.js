import { playListTitle } from "./assets/data";
import Header from "./Components/Header";
import Songs from "./Components/Songs";

const App = () => {
  return (
    <div className="App">
      <Header title={playListTitle} />
      <Songs />
    </div>
  );
};

export default App;
