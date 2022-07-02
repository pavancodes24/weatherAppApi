import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/action';
import { CLEAR_ERRORS } from '../redux/actionType';
import DisplayWeatherData from './DisplayWeatherData';
import styles from './Weather.module.css'

export const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("warangal");
    const [show, setShow] = useState(false)
    const { isError } = useSelector(state => state)
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setShow(true)
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
    }, [dispatch, isError])
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
            {show && isError ? <div>something went wrong</div> : <DisplayWeatherData />}
           
            
        </div>
    )
}

export default WeatherSearch