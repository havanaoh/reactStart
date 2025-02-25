import { useState } from "react";

export const Button = () =>{
     const [ count, setCount ] = useState(0);
      console.log(count);
      return (    
        <>
          {/* view는 이거하라고 해 하면 하고 react는 섬세하게 하나하나 얘기해줘야해*/}
          {/* <button onClick={()=>setCount(count + 1)}>클릭</button> */}
          {/* 이전 상태를 가지고 있음 */}
          <button onClick={()=>setCount((prev) => prev + 1)}>클릭</button>
          {/* 이전 상태 값이 필요없을 땐 이렇게 써도돼 */}
          {/* <button onClick={()=>setCount("버튼 클릭")}>클릭</button> */}
          <br/>
          count : {count}
        </>
      )
}