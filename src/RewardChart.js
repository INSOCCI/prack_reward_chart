import React from 'react';
import {Route} from 'react-router-dom';

import styled from 'styled-components';

// 하위 컴포넌트(MySticker) 연결
import MySticker from './MySticker'; 


const RewardChart = (props) => {

  // 요일(keys) : 랜덤 스티커 갯수(value) - 유사배열화하여 list(진짜돔),setList(가상돔)에 담아줌.
  const [list, setList] = React.useState({
    "월": Math.floor(Math.random()*5),
    "화": Math.floor(Math.random()*5),
    "수": Math.floor(Math.random()*5),
    "목": Math.floor(Math.random()*5),
    "금": Math.floor(Math.random()*5),
    "토": Math.floor(Math.random()*5),
    "일": Math.floor(Math.random()*5),
   });
   
 
  const [avg, setAvg] = React.useState(0) // 스티커 갯수 평균
  
  React.useEffect(()=>{
    let sum = 0;
    Object.values(list).map((x) => {sum += x;})  // Object.(keys OR value) >> 위 list의 value값을 요일별로 하나씩 꺼내주는 .map을 사용해서 평균을 구해야 하는데, map은 배열에서만 사용할 수 있으므로 유사배열인 list를 Object.value를 써서 list의 value값만 꺼내와 배열로 만들어줌.
    setAvg((sum/7).toFixed(1))  // 평균값의 소수점을 .toFixed(자릿수)를 사용하여 1자리로 만들어줌.
  }, []);

  // 평균값 초기화
  const reset = () => {
    Object.keys(list).map((x) => {list[x] = 0;}) // list의 keys를 하나씩 꺼내면서 강제로 값을 0으로 만들어줌.
    setList(list); // 0으로 만든 값을 list에게 다시 보내줌. 
    setAvg("0.0"); // 그냥 0으로 화면에 보여지는데 위 평균값과 이질감이 들어서 똑같이 소수점을 찍어줬음.
  }

  
  return (

    <Wrap>

        <Title>
          💗😇 참 잘했어요 😇💗
          <span style={{fontSize:"38px", color: "#fff"}}>Reward Chart</span>
        </Title>


        {/* 컴포넌트 MySticker 연결 */}
        <Route path="/" exact component={MySticker}> 
            <MySticker list = {list} setList = {setList}/>
        </Route>

        <AverageBox>
          <p>평균 갯수</p>
          <p>{avg}</p>
          <ResetBtn onClick={reset}>Reset</ResetBtn> {/* 평균 Reset 버튼 */}
        </AverageBox> 
    
    </Wrap>

  );

};


/////* styled components */////

const Wrap = styled.div `
  max-width: 350px;
  min-height: 90vh;
  background-color: #FF7396;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h2 `
  color: #FFFFDE;
  text-align: center;
  margin-top: 60px;
`;

const AverageBox = styled.div `
  width: 8rem;
  margin: 1rem auto;
  padding: 9px;
  line-height: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

const ResetBtn = styled.button `
  width: 8rem;
  background: #9B005A;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  padding: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;


export default RewardChart;