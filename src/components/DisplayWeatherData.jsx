import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Weather.module.css'
const DisplayWeatherData = () => {
    const { data, isLoading ,isError} = useSelector(state => state)
    
    let id = data?.weather
    if(id){
        id = id[0].icon
    }


    return isLoading ?
        <div>...loading</div>
        :isError?<div>something went wrong</div> :(
            <div>
                {id &&  <div>
                    <h1>Location: {data?.name}</h1>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 style={{fontSize:"50px",marginTop:"19px"}}>{Math.floor(data?.main?.temp)}<span>&#xb0;</span>{'C'}</h1>
                        <div><img src={`http://openweathermap.org/img/wn/${id}@2x.png`} alt="" /></div>
                    </div>
                </div>
                }
                <div>
                    
                </div>
            </div>  
        )
}

export default DisplayWeatherData