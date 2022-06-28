import React from 'react'
import { useSelector } from 'react-redux'

const DisplayWeatherData = () => {
    const { data } = useSelector(state => state)
    return (
        
        <div>
            <h1>Location: {data?.name}</h1>
            <h1>Temperature: {data?.main?.temp}</h1>
        </div>
    )
}

export default DisplayWeatherData