import React, { useEffect, useState } from 'react'
import Country from './Country'
import '../components/style/countires.css'
export default function Countires() {
    const [countires,setCountries] = useState([])
    const[visitedCountries,setVisitedCountries]= useState([])
    const[visitedFlags,setVisitedFlags]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
const handleFlages = (country)=>{
    const newflags = [...visitedFlags,country]
    setVisitedFlags(newflags)
}
    const handlevisitedCountries = (country) =>{
console.log(country)
console.log('add this to yoyur visited country')
const newvisited = [...visitedCountries,country]
setVisitedCountries(newvisited)
    }
  return (
    <>
  <h1>countires: {countires.length}</h1>
  <h1>countires: {visitedCountries.length}</h1>
  <div className='flag-container '>
        {visitedFlags.map (flag =>
<img src={flag.flags.png} alt="" srcset="" />
        )}
    </div>
  <div>
 
  <h4>visited countries</h4>
<ul>
    {visitedCountries.map(country=><li>{country.cca3}</li>)}
</ul>
  </div>

    <div className='countires'>
        
    {countires.map(country=><Country 
    country={country}
    handleFlages={handleFlages}
    handlevisitedCountries={handlevisitedCountries}
    
    />
    
    )}
  
    </div>
    </>
  )
}
