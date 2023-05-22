import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route element={<Home/>} path='/'/>
      </Routes>
    </div>
    </>
  );
}

export default App;
