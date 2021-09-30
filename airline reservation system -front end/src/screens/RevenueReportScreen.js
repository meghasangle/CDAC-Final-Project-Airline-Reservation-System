import React,{ useState,useEffect } from "react";
import { Bar,Line } from 'react-chartjs-2';
import FlightAPIService from "../service/FlightAPIService";
import SuperAdminAPIService from "../service/SuperAdminAPIService";
import Header from "../components/Header";

function RevenueReportScreen(props) {
  const [airlines,setAirlines]=useState([]);
  const periods=["Monthly","Quarterly","Yearly"];
  const [selectedAirline,setSelectedAirline]=useState("");
  const [selectedInterval,setSelectedInterval]=useState("");
  const [monthlyData,setMonthlyData]=useState([]);
  const [quarterlyData,setQuarterlyData]=useState([]);
  const [yearlyData,setYearlyData]=useState([]);
  useEffect(()=>{
    console.log('component mounted!')
    reloadAirlineList();
  },[])


  const reloadAirlineList=() =>{
    FlightAPIService.getAirlineNames()
        .then((res) => {
          console.log(res);
          if (res.data.status == "success")
            setAirlines(res.data.data);
    });
  }

  function setAirline(event){
    console.log(event.target.value);
    setSelectedAirline(event.target.value);
  }

  function setInterval(event){
    console.log(event.target.value);
    setSelectedInterval(event.target.value);
  }

  const revenueReport=() =>{
    SuperAdminAPIService.getRevenueReport(selectedAirline,selectedInterval)
    .then((res)=>{
      if( res.data.status == "success"){
        if(selectedInterval == "Monthly"){
          setQuarterlyData([]);
          setYearlyData([]);
          console.log(res.data.data);
          setMonthlyData(res.data.data);
        }
        if(selectedInterval == "Quarterly"){
          console.log("quarter");
          setMonthlyData([]);
          setYearlyData([]);
          console.log(res.data.data);
          setQuarterlyData(res.data.data);
        }
        if(selectedInterval == "Yearly"){
          console.log("year");
          setMonthlyData([]);
          setQuarterlyData([]);
          console.log(res.data.data);
          setYearlyData(res.data.data);
        }
      }
    })
   
  }
const mlabels =monthlyData.map(function (e) {
        if(e.month==1) return "January";
        if(e.month==2) return "February";
        if(e.month==3) return "March";
        if(e.month==4) return "April";
        if(e.month==5) return "May";
        if(e.month==6) return "June";
        if(e.month==7) return "July";
        if(e.month==8) return "August";
        if(e.month==9) return "September";
        if(e.month==10) return "October";
        if(e.month==11) return "November";
        if(e.month==12) return "December";
      })
const mdata =monthlyData.map(function (e) {
    return e.revenue;})

const Monthdata={
    
        labels:mlabels,
        datasets:[
            {
                label:'Monthly Revenue for year 2021(₹)',
                data:mdata,
                borderColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],
                backgroundColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],  
            }
            
        ]
      }
const qlabels =
      quarterlyData.map(function (e) {
        if(e.quarter==1) return "Jan-Mar";
        if(e.quarter==2) return "Apr-Jun";
        if(e.quarter==3) return "Jul-Sep";
        if(e.quarter==4) return "Oct-Dec";
      })
const qdata =quarterlyData.map(function (e) {
    return e.revenue;})
   
const Quarterdata={
  labels:qlabels,
        datasets:[
            {
                label:'Quarterly Revenue for 2021(₹)',
                data:qdata,
                borderColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],
                backgroundColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],
               
            }
            
        ]
      }
const ylabels =yearlyData.map(function (e) {
        return e.year;
      })
const ydata =yearlyData.map(function (e) {
        return e.revenue;})

const Yeardata={
  labels:ylabels,
        datasets:[
            {
                label:'Yearly Revenue(₹)',
                lineTension: 0,      
                data:ydata,
                borderColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],
                backgroundColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],  
            }
            
        ]
      }
const options={
    title:{
        display:true,
        text:'Revenue Chart'
    },
    scales:{
      yAxes:[
          {
              ticks:{
                  fontColor: "black",
                  fontSize: 14,
                  fontStyle: "bold",
                  min:1000,
                  max:100000,
                  stepsize:5000
              }
          }
      ],
      xAxes: [
        {
          ticks: {
              fontColor: "black",
              fontSize: 14,
              fontStyle: "bold"
          }
      }
    ]
  },
}
    return (
      <div>
        <div>
        <Header title="Revenue Report"/>
            <div class="row">
              <div class="col-4 my-4">
                <select
                  id="airline"
                  class="form-control"
                  name="airline"
                  onChange={setAirline}
                >
                  <option value="airline" hidden selected>Select Airline</option>
                  {airlines.map((airline) => {
                    return <option value={airline}>{airline}</option>;
                  })}
                </select>
              </div>
              <div class="col-4 my-4">
                <select
                  d="interval"
                  class="form-control"
                  name="interval"
                  onChange={setInterval}
                >
                  <option value="intervals" hidden selected>Select Interval</option>
                  {periods.map((period) => {
                    return <option value={period}>{period}</option>;
                  })}
                </select>
              </div>
              <div class="col-4 my-4">
              <button
                  className="btn btn-success"
                  onClick={() => 
                  revenueReport()}
                >
                  {" "}
                Generate
              </button>
            </div>
            </div>
          </div>          
        
      <div class='my-6'>
        <div ClassName='chart'>
            {monthlyData.length >0 && <Bar data={Monthdata} options={options}/> }
            {quarterlyData.length >0 && <Bar data={Quarterdata} options={options}/>}          
            {yearlyData.length >0 && <Bar data={Yeardata} options={options}/>} 
        </div>
      </div>
      
    </div>  
    );
}

export default RevenueReportScreen;
