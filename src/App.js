import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Recipe from './components/recipeList/Recipe';
import RecipeDetail from './components/recipeList/RecipeDetails';

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route element={<Home/>} path={'/'}/>
        <Route element={<Recipe />} path={'/recipe'} />
        <Route element={<RecipeDetail />} path= {'/recipe/:id'} />
      </Routes>
    </div>
    </>
  );
}

export default App;
