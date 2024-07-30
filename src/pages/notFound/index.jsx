import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h2>This page doesn't exist!</h2>
            <Link to={'/recipe-list'}>Go to recipe List page</Link>
        </div>
    )
}
export default NotFoundPage;