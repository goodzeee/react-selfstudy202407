import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, currentMonthValue, totalValue }) => {

    let barFillHeight = '0%'; // 차트 초기값 0%

    if (totalValue > 0) {
        // 월별 총액을 1년치 총액으로 나누고 곱하기 100 -> 해당 월에 % 나옴.
        const percentage = (currentMonthValue / totalValue) * 100;
        barFillHeight = percentage + '%';
    }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill"
             style={{height: barFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
