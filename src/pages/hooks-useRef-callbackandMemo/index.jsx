import { useEffect, useRef } from "react";

function HooksUseRefCallbackMemo() {
    const countValue = useRef(0)
    const divElementRef = useRef();
    const inputRefElement = useRef();

    function handleClick() {
        countValue.current++;
        console.log(countValue.current);
    }

    useEffect(()=>{
        const getDivRefrence = divElementRef.current;
        inputRefElement.current.focus();
        getDivRefrence.style.color = 'red';
        
        setTimeout(()=>{
            getDivRefrence.style.color = "green";
            setTimeout(()=>{
                getDivRefrence.style.color = "blue";
            },1000)
        },2000)
        console.log(getDivRefrence);
    },[])

    return (
        <div>
            <h1>Use ref, use callback and use memo hook</h1>
            <button onClick={handleClick}>Click me</button>
            <div ref={divElementRef}>Some Random Text</div>
            <input name="name" placeholder="Enter your name" ref={inputRefElement} type="text" />
        </div>
    )
}
export default HooksUseRefCallbackMemo;