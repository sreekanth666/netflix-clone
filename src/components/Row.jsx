import React, { useEffect, useState } from 'react'
import style from '../style.module.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Row({title, fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [allMovies, setAllMovies] = useState([])
    const fetchData = async () => {
        const {data} = await tmdbAxiosInstance.get(fetchUrl)
        setAllMovies(data.results)
    }
    // console.log(allMovies);
    useEffect (() => {
        fetchData()
    }, [])
    return (

        <div className='body'>
        <div className={`${style.categories}`}>
            <div className={`row ${style.categoryHeadDiv}`}>
                <p className={`${style.categoryHead}`}>{`${title}`}</p>
            </div>
            <div className={`row ${style.allMovies}`}>
                {
                    allMovies.map(items => (
                        <div className={`${style.showCard}`}>
                            <img src={`${base_url}${items.poster_path}`} className={`${style.cardImg}`} loading="lazy"></img>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    )
}

export default Row;

