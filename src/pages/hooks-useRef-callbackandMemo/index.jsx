import { useRef } from "react";

function HooksUseRefCallbackMemo() {
    const countValue = useRef(0)
    function handleClick() {
        countValue.current++;
        console.log(countValue.current);
    }
    return (
        <div>
            <h1>Use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default HooksUseRefCallbackMemo;