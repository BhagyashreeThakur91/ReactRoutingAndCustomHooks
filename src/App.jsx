import { Routes, Route, useNavigate, Link, useRoutes } from 'react-router-dom';
import CommentsList from "./pages/comments"
import RecipeList from "./pages/recipes"
import RecipeDetailsPage from './pages/recipeDetails';
import NotFoundPage from './pages/notFound';
import Layout from './components';

function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home', 
      element: <Layout/>,
      children : [
        {
          path : 'recipe-list', element : <RecipeList/>,
        },
        {
          path : 'comments-list', element : <CommentsList/>,
        },
        {
          path : 'recipe-list/:id', element : <RecipeDetailsPage/>
        },
      ]
    },
    {
      path : '*', element : <NotFoundPage/>
    }
  ]);
  return element;
}

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>React Routing and Custom Hooks</h1>
      <div>
        <Link to={'home/recipe-list'}>Alternative way of navigating to recipe list page</Link>
      </div>
      <button onClick={()=> navigate('/home/recipe-list')} style={{backgroundColor: 'black', color: 'white'}}>Navigate to Recipe List Page</button>
      <button onClick={() => navigate('/home/comments-list')} style={{backgroundColor: 'black', color: 'white'}}>Navigate to Comments List Page</button>
      {/* <Routes>
        <Route path='/home' element={<Layout/>}>
          <Route path='recipe-list' element={<RecipeList/>}/>
          <Route path='comments-list' element = { <CommentsList/> }/>
          <Route path='recipe-list/:id' element= {<RecipeDetailsPage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes> */}

      <CustomRoutes/>
    </div>
  )
}

export default App
