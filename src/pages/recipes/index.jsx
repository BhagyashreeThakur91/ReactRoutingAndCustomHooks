import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useWindowResize from "../../hooks/use-window-resize";

function RecipeList() {
    const location = useLocation();
//    console.log(location);

    const { data, loading, error } = useFetch('https://dummyjson.com/recipes');
    const windowSize = useWindowResize();

    if(loading) return <h1>Fetching Recipes! please wait...</h1>

return (
    <div>
        <h1 style={{color: windowSize.width < 768 ? 'Red' : 'Blue'}}>Recipe List Page</h1>
        <h3>Current Window Size width is {windowSize.width} and Current height is {windowSize.height}</h3>
        <ul>
            {
                data?.recipes?.length > 0 
                ? data?.recipes?.map(recipeItem => <div>
                    <img src={recipeItem?.image}/>
                    <label>{recipeItem?.name}</label>
                </div>)
                : null
            }
        </ul>
    </div>
)
}
export default RecipeList;