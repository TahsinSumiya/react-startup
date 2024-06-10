import React, { useState } from 'react'
import '../components/style/country.css'

const Country = ({country,handlevisitedCountries,handleFlages}) => {
    const {name,flags,population,area,cca3} = country
    const [visited,setVisited] = useState(false)

    const handleVisited =()=>{
setVisited(!visited)
    }

// const passwithpaarams = ()=>{
//     handlevisitedCountries(country)
// }

  return (
    <div  className={`country ${visited && 'visited'}`}>
      <h1 style={{color:visited?'violet':'green'}}>{name.common}</h1>
      <img src={flags.png} alt="" srcset="" />
      <p>{population}</p>
      <p>{area}</p>
      <p>code:{cca3}</p>
      <button onClick={()=>handleFlages(country)}>Add Flag</button>
      <button onClick={()=>handlevisitedCountries(country)}>Mark visited</button>
      <br />
      <button onClick={handleVisited} type='submit'>{visited ? 'visited':'going'}</button>
      {visited ? 'visited this country':'want to visit'}
      <hr />

    </div>
  )
}  

export default Country
