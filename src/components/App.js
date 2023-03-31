import './styles/App.css';
import Search from '../components/SearchBar';
import Mode from "../components/Mode";


function App() {
  return (
    <div className="App">
      <Mode/>
      <Search/>
    </div>
  );
}

export default App;
