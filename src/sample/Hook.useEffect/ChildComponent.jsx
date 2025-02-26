import { useEffect, useState } from "react"

export const ChildComponent = () => {
    const [count, setCount] = useState(0);

    //이렇게 하면 화면 최초 렌더링 할때만 실행됨
    // useEffect (() => {}, []);

    useEffect (() => {
        alert("자식 컴포넌트 생성")
        // childConponent 없어질때 실행, 컴포넌트가 닫힐때 useState값도 초기화 된다
        return ()=>{
            alert("자식 컴포넌트 닫힘");
        }
    }, []);

    useEffect(() => {
        count && alert(`변경된 숫자는 ${count}입니다.`);
    }, [count])
    return (
        <div className="w-80 h-52 border border-black-400 pt-16">
            <p>카운트: {count} </p>
            <button onClick={ () => setCount(prev => prev +1)} >증가</button>
            <p className="font-mono text-xl">ChildComponent</p>
        </div>
    )
}