import Language from "./detailedCountryDisplayComponents/Language"

const DetailedCountryDisplay = ({country}) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <br />
      capital {country.capital[0]}
      <br />
      area {country.area}

      <h4>languages</h4>
      <ul>
        {Object.values(country.languages).map(language => (
          <Language key={language} language={language} />
        ))}
      </ul>
      <div style={{fontSize:'8em'}}>
        {country.flag}
      </div>

    </div>
  )
}

export default DetailedCountryDisplay