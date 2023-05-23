import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Recipe from './pages/Home/Recipe';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Recipe />} path='/recipe' />
      </Routes>
    </div>
    </>
  );
}

export default App;
