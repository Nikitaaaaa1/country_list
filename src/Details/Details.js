import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const Details = () => {
    let {id} = useParams();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(data => data.json())
            .then(x => setCountry(x[0]))
            // .catch(err => alert(err))
    }, [id])

    useEffect(() => {
        console.log(country)
    }, [country])
    // let languages = []
    // for (const lang in country.languages) {
    //     languages.push(lang)
    // }
    const Bord = () =>  {
        if(country.borders) {
            return (
                country.borders.map(p =>
                    <Link to={`/details/${p}`} className="Link">
                        <li>
                            {p}
                        </li>
                    </Link>)
            )
        }
    }
    return (
        <div>
            { country && (
                <section>
                <div
                    style={{backgroundImage:`url(${country.flags.svg}`, width:'600px', height:'400px', backgroundSize:'100%', backgroundRepeat:'no-repeat' }}></div>
                    <div>{country.name.official} | {country.continents}</div>

                    <div>Capital: {country.capital}</div>
                    <hr/>
                    <div>
                        <Bord/>
                    </div>
                    <hr/>
                    <div>{country.area} km</div>

                    <div>

                    </div>

                </section>
            )}
        </div>
    );
};

export default Details;