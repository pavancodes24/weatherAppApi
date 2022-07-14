import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/action';
import { CLEAR_ERRORS } from '../redux/actionType';
import DisplayWeatherData from './DisplayWeatherData';
import styles from './Weather.module.css'
import { WeeklyTotal } from './WeeklyTotal';

export const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("warangal");
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setQuery(query)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(getWeatherData(query))
        }
    }

    useEffect(() => {
        dispatch(getWeatherData('warangal'))
        dispatch({ type: CLEAR_ERRORS })
    }, [dispatch])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div >
                <span className={styles.location}> <i className="fa fa-map-marker" style={{ fontSize: "36px" }} aria-hidden="true"></i></span>
                <input type="text" className={styles.inp}
                    placeholder='search'
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event)}
                    value={query} />
                <span className={styles.search} onClick={handleSearch}><i className="fa fa-search"></i></span>
            </div>
            <WeeklyTotal/>
            
            {<DisplayWeatherData  />}


        </div>
    )
}

export default WeatherSearch