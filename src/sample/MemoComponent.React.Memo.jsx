import React, { useEffect } from "react";

export const HeavyJobComponent = ( { num, numObj } ) => {
    useEffect( () => {
        console.log("HeavyJobComponent 랜더링");
    })
    useEffect( () => { 
        heavyPlus() 
        console.log("num이 바뀌면 heavyPlus가 실행이 되요")
    }, [numObj])

    const heavyPlus = () => {
        let total = 0;
        for ( let i = 0; i < 123456; i++){
            total += numObj.num;
        }
        return total + numObj.num;
    }
    const result = heavyPlus();

    return (
        <p>"{numObj.num}을 더해서 만든 연산 결과는 <b>{result}</b> 입니다!"</p>
    )
}

export const HeavyJobComponent2 = ( {num, numObj} ) => {
    useEffect( () => {
        console.log("HeavyJobComponent2 랜더링");
    })
    useEffect( () => { 
        heavyMulti();
        console.log("num이 바뀌면 heavyMulti 실행이 되요")
    }, [numObj])

    const heavyMulti = () => {
        let total = 0;
        for ( let i = 0; i < 123456; i++){
            total += numObj.num;
        }
        return total * numObj.num;
    }

    const result = heavyMulti();

    return (
        <p>"{numObj.num}을 곱해서 만든 연산 결과는 <b>{result}</b> 입니다!"</p>
    )
}

export const MemoHeavyJobComponent = React.memo(HeavyJobComponent);
export const MemoHeavyJobComponent2 = React.memo(HeavyJobComponent2);