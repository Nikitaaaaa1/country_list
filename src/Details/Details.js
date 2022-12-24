import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './details.css'

const Details = () => {
    let {id} = useParams();
    const [country, setCountry] = useState(null)
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(data => data.json())
            .then(x => setCountry(x[0]))
            // .catch(err => alert(err))
        setIsLoad(false)
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
    // const IsLoading = () => {
    //     if(isLoad) {
    //         return (
    //             <div>
    //                 is loading...
    //             </div>
    //         )
    //     }
    // }
    return (

        <div>

            {country && (
                <section style={{display:'flex'}}>
                    <div className="cont">
                        <div className="flagInf">
                            <div
                                className="itemFlag"
                                style={{backgroundImage:`url(${country.flags.svg}`}}></div>
                            <div className="countryArea">{country.area} km</div>
                        </div>

                        <div className="mainInf">
                            <div className="country-name">{country.name.official} </div>
                            <div className="continent-name">{country.continents} </div>
                            <div>Capital city: {country.capital}</div>
                            <Bord/>
                        </div>
                    </div>
                </section>
            ) }
        </div>
    );
};

export default Details;