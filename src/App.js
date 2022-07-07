import React from "react";
import { Route } from "react-router-dom";

// 하위 컴포넌트(RewardChart, Detail) 연결
import RewardChart from "./RewardChart";
import Detail from "./Detail";


function App() {

  return (
    <div className="App">

        {/* Main Page - Route */}
        <Route path="/" exact>
          <RewardChart/>
        </Route>

        {/* Detail Page - Route */}
        <Route path="/detail/:dayweek" exact>   {/* 주소창에 dayweek값이 그대로 들어옴 */}
          <Detail />
        </Route>

    </div>
  );
}


export default App;