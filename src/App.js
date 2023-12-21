
import './App.css';
import Movie from './components/Movie';
import Moviedata from "./components/Moviedata.json"

function App() {
  return (
    <div className="App">
      {
        Moviedata.map((data)=>{
          return <Movie {...data}></Movie>
        })
      }
      
    </div>
  );
}

export default App;
