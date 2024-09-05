import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = ({dataPoints}) => {
    console.log('dataPoints:', dataPoints);
    
    // dataPoints 배열엣서 12개월 총액value를 다 더해 연도 지출총액 계산
    // 그리고 각 CharBar에 해당월지출총액 / 연도지출총액 비율을 전달
    
    // 1년치 총지출액
    const totalValue = dataPoints
                        .map(dp => dp.value)
                        //❕❕ 누적accum, 현재 배열에서 값 하나씩 꺼내주는 curr => 누적하여 더하기 +
                        .reduce((accum, curr) => accum + curr, 0)
                        ;
                         

  return (
    <div className='chart'>
        {/* ExpenseChart에서 월별 배열 가져와 dataPoints 반복문으로 차트바 보여주기 ! */}
        {
            dataPoints
            // map으로 반복문 돌릴 때 🌟🌟 key 반드시 넣기
            .map(dp => <ChartBar key={dp.label} label = {dp.label} currentMonthValue={dp.value} totalValue={totalValue}/>)
        }
    </div>
  )
}

export default Chart