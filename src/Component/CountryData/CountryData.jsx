const CountryData = ({country}) => {
    console.log(country)
    const {name} = country
    console.log(name)
    
    return (
        <div>
            <p><small>Country Data: {}</small></p>
        </div>
    );
};

export default CountryData;