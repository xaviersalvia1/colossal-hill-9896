import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App" style={{backgroundColor:"grey"}}>
      <Navbar/>
     <AllRoutes/>
     <div style={{color:"black"}}>
     <iframe width="100%" height="515" src="https://www.youtube.com/embed/HQfF5XRVXjU"   ></iframe>
     </div>
    </div>
  );
}

export default App;
