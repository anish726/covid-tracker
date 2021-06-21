import React,{useEffect,useState} from 'react'
import {fetchDataDaily}  from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import style from './Chart.module.css'

function Chart({ data: {confirmed, recovered, deaths}, country})
 {
     const [dailyData ,setDailyData] = useState([]);

 useEffect(() => {
      const fetchAPI = async ( ) =>{
      setDailyData (await fetchDataDaily());
      }
    
       fetchAPI();
 },[]);

  const lineChart =(
      dailyData.length ?
      (
     <Line 
      data={{
          lable:dailyData.map(({date}) => date),
          datasets: [{
               data:dailyData.map(({confirmed}) => confirmed),
               lable:'infected',
               borderColor:'3333ff',
               fill: true,

          },{
            data:dailyData.map(({deaths}) => deaths),
            lable:'infected',
            borderColor:'red',
            backgroundColor: 'rgba(225,0,0,0.5)',

            fill:true,
          }],
      }}
     />): null

  );

   const barChart =(
       confirmed
        ?
       (
           <Bar 
           data={{
               labels:['infected','Recovered', 'Deaths'],

                datasets:[{
                    label: 'People',
                    backgroundColor:[ 'rbga(0,0,255,0.5)',
                   'rgba(0,255,0,0.5)',
                    'rgba(255,0,0,0.5)',
                ],
                data: [confirmed, recovered, deaths]
                }],
           }}

            options={{   legend:{display: false},
               title:{display:true, text:`Current state in ${country}`}
           }}/>

       ) : null
   )


    return (
        <div className={style.container}>
            {country ? barChart : lineChart}
           
        </div>
    )
}

export default Chart
