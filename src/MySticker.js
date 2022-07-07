import React from 'react'
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

// 하위 컴포넌트(Detail) 연결
import Detail from './Detail';


// props = {list, setList}
const MySticker = ({list, setList}) => {
    
    const history = useHistory();  // Detail페이지로 이동(삼각형Btn)하기 위해 history 훅 사용.
    
    const my_list = Object.keys(list) // list의 keys값을 가져와 배열화.
    
    // const my_list_score = Object.values(list)  list의 랜덤 스티커 갯수 배열 >> 몇번째 스티커인지 기억해서 페이지를 넘기면 랜덤 스티커 값에 대입할 때 사용.

 
    return (
        <>
            {my_list.map((weekday, index) => {return ( //weekday란 이름으로 배열화 된 list의 keys값이 하나씩 꺼내지면서 아래와 같이 반환.
                <ChartStyle>

                <DayStyle>
                    <p>{weekday}</p>
                </DayStyle>

                {Array.from({ length: 5 }, (x, idx) => 
                    {return list[weekday]<=idx ? <StickerStyle key={index}/> : <StickerFullStyle key={index}/>}
                )}

                {/* 삼각형 Btn */}
                <BtnStyle key={null} onClick={() => 
                    {history.push(`/detail/${weekday}`);}}> 
                </BtnStyle>
                
                </ChartStyle>
                )}
            )}  
        </>
    )

};


/////* styled components */////

const ChartStyle = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0px;
`;

const DayStyle = styled.p `
    margin-right: 5px;
    font-size: 16px;
    font-weight: 800;
    color: #333;
`;

const StickerStyle = styled.div `
    width: 30px;
    height: 30px; 
    background-color: rgb(221, 221, 221);
    margin: 5px; 
    border-radius: 30px; 
`;

const StickerFullStyle = styled.div `
    width: 30px;
    height: 30px; 
    background-color:#F9F871;
    margin: 5px;
    border-radius: 30px; 
`;

const BtnStyle = styled.div `
  appearance: none;
  border-top-width: 15px;
  border-top-style: solid;
  border-bottom-width: 15px;
  border-bottom-style: solid;
  border-left-width: 20px;
  border-left-style: solid;
  width: 0px;
  height: 0px;
  background-color: transparent;
  margin-left: 15px;
  border-color: transparent #005B52;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;


export default MySticker