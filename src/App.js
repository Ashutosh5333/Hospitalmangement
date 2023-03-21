
import './App.css';
import Navbar from './components/Navbar';
import MainRoute from './AllRoutes/MainRoute';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Category/>
       <MainRoute/>

    </div>
  );
}

export default App;
