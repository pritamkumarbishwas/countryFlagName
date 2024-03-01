import { useEffect, useState } from 'react'
import './App.css'

function Country() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("failed to fetch countries");
        }
        const data = await response.json();
        console.log(data);

        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log("fetch error", error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return (
    <>
      {loading ? (
        <div className='loading'>Loading ...</div>
      ) : (
        countries.map((country) => (

          <div className='card' key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} />
            <h3>{country.name.common}</h3>
          </div>
        ))
      )}
    </>
  )
}

export default Country
