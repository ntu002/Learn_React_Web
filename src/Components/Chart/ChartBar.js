import React from "react";

import "./ChartBar.css";

const ChartBar = () => {

    let barFillHeight = '0%';
    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="char-bar__fill" style={{height : barFillHeight, backgroundColor : 'red' }}> </div>
      </div>
      <div className="char-bar__laber">{props.laber}</div>
    </div>
  );
};

export default ChartBar;
