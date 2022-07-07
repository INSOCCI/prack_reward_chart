import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styled from 'styled-components';


const Detail = (props) => {

  const history = useHistory();  // 메인 페이지로 이동하기 위해 history 훅 사용
  
  const params = useParams();   // 

  const [rate, setRate] = useState(0); // rate 초기값 0 설정


  return (
  
    <DivStyle>
      
      <Title>
        <Days> {params.dayweek}요일 </Days> 
        <br/>
        오늘 받은 스티커
      </Title>
      
      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>  
        {/* Sticker x 5 배열 만들기 */}
        {Array.from({length: 5 }, 
          // 
          (x, index) => {return rate <= index ? 
            <StickerStyle key={index} onClick={()=>{setRate(index + 1);}}/> : 
            <StickerFullStyle key={index} onClick={()=>{setRate(index + 1);}}/>
          }) 
        }
      </div>
      
      {/* 스티커 남기기(&뒤로가기) Btn */}
      <button style=
        {{
          width: "180px",
          backgroundColor: "#9B005A",
          border: "none",
          borderRadius: "5px",
          margin: "30px 0px 0px 22px",
          padding: "1rem",
          color: "rgb(255, 255, 255)",
          cursor: "pointer"
        }} onClick={() => {history.goBack();}}  // 뒤로가기(RewardChart로 이동)
      > 스티커 남기기 
      </button>

    </DivStyle>
  )

};


/////* styled components */////

const DivStyle = styled.div`
  width: 80vw;
  max-width: 350px;
  height: 90vh;
  background-color: #FF7395;
  margin: 5vh auto;
  padding: 3vh 3vw;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align:center;
`;

const Days = styled.h3`
  background: orange;
  color: rgb(255, 255, 255);
  font-weight: 900;
  padding: 0.2rem;
  border-radius: 5px;
`;

// 빈 스티커st(그레이)
const StickerStyle = styled.div`
  width: 30px;
  height: 30px; 
  background-color: rgb(221, 221, 221);
  margin: 5px; 
  border-radius: 30px; 
`;

// 채워진 스티커st(옐로우)
const StickerFullStyle = styled.div`
  width: 30px;
  height: 30px;
  background-color:#F9F871;
  margin: 5px; 
  border-radius: 30px; 
 `;


export default Detail;