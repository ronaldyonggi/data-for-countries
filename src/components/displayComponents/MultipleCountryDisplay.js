import { useState } from "react"
import DetailedCountryDisplay from "./DetailedCountryDisplay"

const MultipleCountryDisplay = ({country})  => {
  const [show, setShow] = useState(false)

  return (
    <div>
      {country.name.common}
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && 
      <DetailedCountryDisplay country={country} />
      }
    </div>
  )
}

export default MultipleCountryDisplay