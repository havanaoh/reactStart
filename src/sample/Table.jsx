import { useState } from "react";
import tableData from "../common/tableData"

export const Table = () =>{
    const [ checkedItems, setCheckedItems ] = useState([]);

    // useEffect( () => {
    //     console.log(checkedItems);
    // }, [checkedItems]);

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        // 1. 전체 선택 체크박스가 눌렸는지에 대한 정보를 가져와야합니다.
        console.log(checked);
        if(checked){
            // 전체 선택을 하는 경우 tableData의 id 값들을 checkedItems에 배열 형태로 저장
            const idArray = [];
            tableData.forEach( (el) => { idArray.push(el.id) })
            console.log(idArray);
            setCheckedItems(idArray);            
        }else{
            // 전체 선택 해제 시, checkedItems을 빈 배열로 만든다
            setCheckedItems([]);
        }
    }

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if(checked){
            // 각각의 체크 박스가 선택이 되는 경우, checkedItems에 추가가 됩니다. 
            // 새로운 주소값을 만들어주려고 prev[]가아닌 [...prev]로 써줌 랜더링 위해서서
            setCheckedItems(prev => [ ...prev, id ]);
        } else{
            // 체크가 해제 되면, 체크된 아이템을 제외한 배열
            // filter함수는 새로운 배열을 반환해주는구나나
            setCheckedItems(checkedItems.filter((el) => el !== id));
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <input type='checkbox' 
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={checkedItems.length === tableData.length ? true : false}
                        />
                    </th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>만든 날짜</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>
                                    <input type="checkbox" 
                                    value={data.id} 
                                    checked={checkedItems.includes(data.id) ? true : false}
                                    onChange={(e) => { handleSingleCheck(e.target.checked, data.id) }}
                                    />
                                </td>
                                <td>{data.title}</td>
                                <td>{data.content}</td>
                                <td>{data.date}</td>
                            </tr>
                        )
                     })
                }          
            </tbody>
            { checkedItems.length }개가 선택 되었습니다.
        </table>    
    )
}