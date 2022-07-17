import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherData } from '../redux/action';
import { CLEAR_ERRORS } from '../redux/actionType';
import DisplayWeatherData from './DisplayWeatherData';
import styles from './Weather.module.css'
import { WeeklyTotal } from './WeeklyTotal';
import {arr} from './Cities'

export const WeatherSearch = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("warangal");
    const [cities,setCities] = useState([]);
    const [fask,setFask] = useState(false)
    const handleSearch = () => {
        dispatch(getWeatherData(query))
        setQuery(query)
        setFask(false)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(getWeatherData(query))
            setFask(false)
        }
    }
    const handleChange= (e)=>{
        setFask(true)
        setQuery(e.target.value)
        ShowSearchLocations()
    }
    const ShowSearchLocations=()=>{
        if(query.trim()===''){
            setCities([])
        }
        else{
            var ot = arr.filter(item=>!item.name.toLowerCase().indexOf(query.toLowerCase()))
            var m = ot.map(item=>item.name);
        setCities(m)
        }
    }
    const handleDivClick=(i)=>{

        dispatch(getWeatherData(query))
        setQuery(i)
            setFask(false)
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
                    onChange={handleChange}
                    onKeyDown={(event) => handleKeyDown(event)}
                    value={query} />
                <span className={styles.search} onClick={handleSearch}><i className="fa fa-search"></i></span>
                <div className={styles.showsearches} style={{display:fask?"block":"none"}}>{cities?.map(i=><div key={i.id} onClick={()=>handleDivClick(i)} className={styles.inp}>{i}</div>)}</div>
            </div>
            {!fask && <WeeklyTotal/>}
            
            { !fask && <DisplayWeatherData  />}


        </div>
    )
}

export default WeatherSearch