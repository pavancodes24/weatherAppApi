import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Weather.module.css'
const DisplayWeatherData = ({ show }) => {
    const { data } = useSelector(state => state)
    return (

        <div>
            {show && <>
                <h1>Location: {data?.name}</h1>
                <h1>Temperature: {Math.floor(data?.main?.temp)}  <img className={styles.cel} src='/celsius-degrees-symbol-of-temperature.png' height='40' width='40' alt="" /> </h1>
               
            </>}
        </div>

    )
}

export default DisplayWeatherData