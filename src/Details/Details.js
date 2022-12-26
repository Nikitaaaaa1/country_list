import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './details.css'

const Details = () => {
    let {id} = useParams();
    const [country, setCountry] = useState(null)
    // const [isLoad, setIsLoad] = useState(false)
    // const [languages, setLanguages] = useState()

    useEffect(() => {

        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            .then(data => data.json())
            .then(x => setCountry(x[0]))
            .catch(err => alert(err))
    }, [id])

    useEffect(() => {

        console.log(country)

    }, [country])



    const Bord = () =>  {
        if(country.borders) {
            return (
                <div style={{margin:'30px 0px'}}>
                    <div
                        style={{fontWeight:'bold', fontSize:'25px', margin:'10px 0'}}>Countries near borders</div>
                    {country.borders.map(p =>
                        <Link to={`/details/${p}`} className="Link D">
                            <li>
                                {p}
                            </li>
                        </Link>)}
                </div>
            )
        }
    }



    return (

        <div className="bg">

            {country && (
                <section style={{display:'flex'}}>
                    <div className="cont">
                        <div className="flagInf">
                            <div
                                className="itemFlag"
                                style={{backgroundImage:`url(${country.flags.svg}`}}></div>
                            <div className="countryArea">
                                Country area: {country.area} km</div>
                        </div>

                        <div className="mainInf">
                            <div className="country-name">{country.name.official} </div>
                            <div className="continentName">
                                Continent: {country.continents}
                            </div>
                            <div className="continentCapital">
                                Capital city: {country.capital}</div>
                            <div>
                                <ul style={{listStyle:'none'}}>
                                    <Bord/>
                                </ul>
                            </div>
                            <div className="population">
                                population: {country.population} peoples
                            </div>
                        </div>


                    </div>
                </section>
            ) }
        </div>
    );
};

export default Details;