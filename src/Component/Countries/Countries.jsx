import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCOuntry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCOuntry(newVisitedCountries);
    }


    const handleVisitedFlags = flag =>{
        console.log('Flag adding');
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }


    return (
        <div >
            <h3>Countries: {countries.length}</h3>

            {/* visited countries */}
            <div>
                <h4>Visited countries: {visitedCountries.length}</h4>
                <u>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </u>
            </div>
            {/* flags part */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country 
                    key={country.cc3} 
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags= {handleVisitedFlags}
                    country={country}>
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;