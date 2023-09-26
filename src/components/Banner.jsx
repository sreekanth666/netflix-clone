import React, { useState, useEffect } from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import style from '../style.module.css'

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([])
    const fetchData = async () => {
        const {data} = await tmdbAxiosInstance.get(fetchUrl)
        setMovies(data.results[Math.floor(Math.random()*data.results.length)])
    }
    console.log(movies);
    useEffect (() => {
        fetchData()
    }, [])
    return (
        <>
            <div className='banner' style={{
                backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
                height: '600px',
                backgroundSize: 'cover'
            }}>
                <div className={`${style.banner_context} banner_context`}>
                    <div className={`${style.item}`}>
                        <h1>{movies?.name}</h1>
                        <p>{movies?.overview?.slice(0,300)}...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner