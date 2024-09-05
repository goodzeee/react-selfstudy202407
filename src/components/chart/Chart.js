import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = ({dataPoints}) => {
    console.log('dataPoints:', dataPoints);
    
  return (
    <div className='chart'>
        {/* ExpenseChart에서 월별 배열 가져와 dataPoints 반복문으로 차트바 보여주기 ! */}
        {
            dataPoints
            // map으로 반복문 돌릴 때 🌟🌟 key 반드시 넣기
            .map(dp => <ChartBar key={dp.label} label = {dp.label}/>)
        }
    </div>
  )
}

export default Chart