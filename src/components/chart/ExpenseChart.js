import React from 'react'
import Chart from './Chart'

const ExpenseChart = ({expenses}) => {
    console.log('expenses: ', expenses);
    
    // 1-12월 데이터가 들어있는 배열 생성
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // 해당 연도의 모든 지출데이터배열에서 월별로 지출액을 합산하여
    // chartDataPoints 배열에서 value값에 누적 저장
    expenses.forEach(exp => {
        // 지출액을 추출해서 chartDataPoints배열에 해당 월에 value에 합산
        // 지출액
        const expensePrice = exp.price;
        const expenseMonth = exp.date.getMonth(); // 월 뽑아오기
        // 뽑아온 월별에 지출액value 누적 합산하기 += 
        chartDataPoints[expenseMonth].value += expensePrice;
    });
    console.log('월별 지출액 누적: ', chartDataPoints);
    
    
  return (
    <div>
        <Chart dataPoints={chartDataPoints}/>
    </div>
  )
}

export default ExpenseChart