import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../redux/action';
import DisplayWeatherData from './DisplayWeatherData';
export const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [disp, showDisp] = useState(false)
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setQuery("")
        showDisp(true)
    }
    return (
        <div>
            <input type="text"
                placeholder='enter location'
                onChange={e => setQuery(e.target.value)}
                value={query} />
            <button onClick={handleSearch}>SEARCH</button>
            { disp && <DisplayWeatherData />}
        </div>
    )
}

export default WeatherSearch