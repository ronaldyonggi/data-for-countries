import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./components/Display";

function App() {
  const [find, setFind] = useState('')
  // const [filteredCountryNames, setFilteredCountryNames] = useState(null)
  const [countryDisplay, setCountryDisplay] = useState(null)

  useEffect(() => {
    // do a GET if the 'find' input is not null or changes
    if (find) {
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => response.data)
        // Filter countries whose common name matches the filter string
        .then(countries => countries.filter(country => country.name.common.toLowerCase().includes(find)))
        .then(filtered => setCountryDisplay(filtered))
    }
  }, [find])

  const handleFindInputChange = event => {
    setFind(event.target.value)
  }

  return (
    <div>
      find countries
      <input value={find} onChange={handleFindInputChange} />
      <Display countryDisplay={countryDisplay} />
    </div>
  );
}

export default App;
