import React, { Component } from 'react'
import Card from './component/Card/Card'
import Chart from './component/Chart/Chart'
import Contary from './component/contary/Contary'
import style from './App.module.css'
import {fetchData, fetchCountries}  from './api'


class App extends Component {

  state ={
    data: {},
    country:''

  }
  
 async componentDidMount (){

    const  fetchedData = await fetchData(); 
  
     this.setState({data: fetchedData})
  }
  handleCountryChange = async (country) =>{
     const fetchedData = await fetchData(country);
   //fetch fetchData
    this.setState({data: fetchedData, country: country})
  }
  


  render(){
     const {data,country} = this.state
   return (
    <div className={style.container}>
 <Card data={data}/>
 <Contary handleCountryChange={this.handleCountryChange}/>
 <Chart data={data} country={country}/>
 
    </div>
  )
  }
}

export default App
