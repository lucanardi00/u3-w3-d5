import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/SideBar';
import MainPage from './components/Main';
import PlayerControls from './components/Player';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainPage />
      <PlayerControls />
    </div>
  );
}

export default App;
