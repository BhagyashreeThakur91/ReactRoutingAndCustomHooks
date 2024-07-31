import useFetch from "../../hooks/useFetch";

function CommentsList() {
    const { data, loading, error } = useFetch('https://dummyjson.com/comments');

    if(loading) return <h1>Fetching Comments! please wait...</h1>
    return (
        <div>
            <h1>Comments List page</h1>
            <ul>
            {
                data?.comments?.length > 0 
                ? data?.comments?.map(commentItem => <div>
                    <label>{commentItem?.body}</label>
                    <p>{commentItem?.likes}</p>
                </div>)
                : null
            }
        </ul>
        </div>
    )
}
export default CommentsList;