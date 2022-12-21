import React, {useEffect, useState} from 'react';
import './home.css'
import '../index.css'
import {Link} from "react-router-dom";



const Home = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(data => data.json())
            .then(x => setCountries(x))
            .catch(err => alert(err))
    }, [])

    return (
        <section
            style={{display:'flex', flexWrap: 'wrap', justifyContent:"space-around"}}>
            {/*<button onClick={() => console.log(countries)}>Click</button>*/}
            {countries.map(p =>
                <Link to={`details/${p.altSpellings[0]}`} key={p.ccn3}>
                    <div className="countryCard">
                        <div>
                            <div
                                className="flag"
                                style={{backgroundImage:`url(${p.flags.svg})`}}></div>
                            {p.name.common}
                        </div>
                        <div>
                            {p.capital}
                        </div>
                        <div>
                            {p.continents}
                        </div>
                    </div>
                </Link>
            )}
        </section>
    );
};

export default Home;