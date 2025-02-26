
import { useState } from "react"
import { HeavyJobComponent, HeavyJobComponent2, MemoHeavyJobComponent, MemoHeavyJobComponent2 } from "./sample/MemoComponent.React.Memo"




function App() {
  const [ plusNum, setPlusNum ] = useState(0);
  const  [ multiNum, setMultiNum ] = useState(0);


  return (    
    <>     
      {/* <Button /> */}
      {/* <Input /> */}
      {/* <SelectBox /> */}
      {/* <Table /> */}
      {/* <ParantComponent/> */}
      {/* <MemoComponent /> */}
      {/* <ChildComponent title = { "제목 1" } content={ "내용을 작성해요." }/>
      <ChildComponent title = { "제목 2" } content={ "내용을 작성해요2." }/>
      <ChildComponent title = { "제목 3" } content={ "내용을 작성해요3." }/>
      <ChildComponent title = { "제목 4" } content={ "내용을 작성해요4." }/>
      <ChildComponent title = { "제목 5" } content={ "내용을 작성해요5." }/>
      <ChildComponent title = { "제목 6" } content={ "내용을 작성해요6." }/>
      <ChildComponent title = { "제목 7" } content={ "내용을 작성해요7." }/> */}
      <input type="number" onChange={ (e) => setPlusNum(e.target.value)}/>      
      {/* <HeavyJobComponent num={Number(plusNum)} /> */}
      <MemoHeavyJobComponent num={Number(plusNum)}/>
      <input type="number" onChange={ (e) => setMultiNum(e.target.value)}/>
      {/* <HeavyJobComponent2 num={Number(multiNum)} /> */}
      <MemoHeavyJobComponent2 num={Number(multiNum)} />
    </>
  )
}

export default App

