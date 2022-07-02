import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../redux/action';
import { CLEAR_ERRORS } from '../redux/actionType';
import DisplayWeatherData from './DisplayWeatherData';
import styles from './Weather.module.css'
import WeeklyChart from './WeeklyChart';

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
    }, [dispatch, isError,show])
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
            { <div className={styles.weeklyData}>
                <WeeklyChart temp={24} day={'Mon'} links={'http://openweathermap.org/img/wn/03d@2x.png'}/>
                <WeeklyChart temp={25} day={'Tue'} links={'http://openweathermap.org/img/wn/04d@2x.png'}/>
                <WeeklyChart temp={26} day={'Wed'} links={'http://openweathermap.org/img/wn/02d@2x.png'}/>
                <WeeklyChart temp={27} day={'Thu'} links={'http://openweathermap.org/img/wn/10d@2x.png'}/>
                <WeeklyChart temp={28} day={'Fri'} links={'http://openweathermap.org/img/wn/01d@2x.png'}/>
                <WeeklyChart temp={29} day={'sat'} links={'http://openweathermap.org/img/wn/01d@2x.png'}/>
            </div>}
            {<DisplayWeatherData />}


        </div>
    )
}

export default WeatherSearch