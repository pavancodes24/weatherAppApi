import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../redux/action';
import DisplayWeatherData from './DisplayWeatherData';
import styles from './Weather.module.css'

export const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false)
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setShow(true)
    }
    return (
        <div >
            <div >
                <span className={styles.location}> <i className="fa fa-map-marker" style={{ fontSize: "36px" }} aria-hidden="true"></i></span>
                <input type="text" className={styles.inp}
                    placeholder='search'
                    onChange={e => setQuery(e.target.value)}
                    value={query} />
                <span className={styles.search} onClick={handleSearch}><i className="fa fa-search"></i></span>
            </div>
            <DisplayWeatherData  show={show} />
        </div>
    )
}

export default WeatherSearch