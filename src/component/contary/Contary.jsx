import React,{useState, useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import style from './Contary.module.css'
 import {fetchCountries} from '../../api'
function Contary({handleCountryChange}) {
     const [fetchedCountries, setFetchedCountries] = useState([])
     
      useEffect(()=>{
          const fetchAPI = async () =>{
              setFetchedCountries(await fetchCountries());
          }
           fetchAPI();
      },[setFetchedCountries]);
      

    
     return (
       <FormControl className={style.formControl}>
           <NativeSelect defaultValue="" onChange={(e) =>   handleCountryChange(e.target.value)}>
     <option value="">{Contary.name}</option>
     {fetchedCountries.map((country, i) => <option key ={i} value={country}>{country}</option> )}
           </NativeSelect>
       </FormControl>
    )
}

export default Contary
