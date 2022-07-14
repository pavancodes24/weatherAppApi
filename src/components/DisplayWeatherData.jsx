import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { LineChart } from './LineChart'
import styles from './Weather.module.css'
import WeeklyChart from './WeeklyChart'
const DisplayWeatherData = () => {
    const { data, isLoading } = useSelector(state => state)
    const [oneData,setOneData] = useState();
    let id = data?.weather
    if (id) {
        id = id[0].icon
    }

    useEffect(()=>{
        if(data&& data.coord){
            getdataofUser(data.coord.lat,data.coord.lon)
        }
    },[isLoading])

    const getdataofUser = async(lat,lon)=>{
        var {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=045875faf6500e2b08e352de604e5d85`);
        setOneData(data)
    }

    return isLoading ?
        <div>...loading</div>
        : (
            <div>
                {oneData && id &&
                    <div className={styles.secondBox}>
                        {/* <h1>Location: {data?.name}</h1> */}
                       
                        <div style={{ display: 'flex', paddingLeft: '20px' }}>
                            <h1 style={{ fontSize: "50px", marginTop: "19px" }}>{Math.floor(data?.main?.temp)}<span>&#xb0;</span>{'C'}</h1>
                            <div><img src={`https://openweathermap.org/img/wn/${id}@2x.png`} alt="" /></div>

                        </div>
                        

                        <div>
                            <LineChart data={oneData.hourly}/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', margin: "0 20px 0 20px" }}>
                            <div className={styles.pressure}>
                                <div>Pressure</div>
                                <div>{data.main.pressure} {'hpa'}</div>
                            </div>
                            <div className={styles.pressure}>
                                <div>Humidity</div>
                                <div>{data.main.humidity}{'%'}</div>
                            </div>

                        </div>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', margin: "0 20px 0 20px" }}>
                            <div >
                                <div>Sunrise</div>
                                <div>{new Date(Number(data.sys.sunrise)*1000).toLocaleTimeString()}</div>
                            </div>
                            <div >
                                <div>Sunset</div>
                                <div>{new Date(Number(data.sys.sunset)*1000).toLocaleTimeString()}</div>
                            </div>

                        </div>
                        <div >
                            <img style={{maxWidth:"100%"}} src="https://i.ibb.co/KX3jkQp/sunriseandset.png" alt="sunriseandset" />
                        </div>


                    </div>


                }

            </div>
        )
}

export default DisplayWeatherData