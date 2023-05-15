import MultipleCountryDisplay from "./displayComponents/MultipleCountryDisplay"
import DetailedCountryDisplay from "./displayComponents/DetailedCountryDisplay"

const Display = ({countryDisplay}) => {
  // If not null
  if (countryDisplay) {
    // If the filtered country names are greater than 10, display
    // 'Too many matches, specify another filter
    if (countryDisplay.length > 10) {
      return <div>Too many matches, specify another filter</div>
    }

    // If the filtered country are greater than 1, map through their names
    else if (countryDisplay.length > 1) {
      return (
        <div>
          {countryDisplay.map(country => (
            <MultipleCountryDisplay key={country.name.common} country={country} /> 
          ))}
        </div>
      )
    }

    // Else if there's only one filtered, display that country's name
    else return <DetailedCountryDisplay country={countryDisplay[0]} />

  }

  return null
}

export default Display