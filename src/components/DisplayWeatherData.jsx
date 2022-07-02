import React from 'react'
import { useSelector } from 'react-redux'
import BarChart from './BarChart'
import styles from './Weather.module.css'
const DisplayWeatherData = () => {
    const { data, isLoading, isError } = useSelector(state => state)

    let id = data?.weather
    if (id) {
        id = id[0].icon
    }


    return isLoading ?
        <div>...loading</div>
        : isError ? <div>something went wrong</div> : (
            <div>
                {id &&
                    <div className={styles.secondBox}>
                        {/* <h1>Location: {data?.name}</h1> */}
                        <div style={{ display: 'flex', paddingLeft: '20px' }}>
                            <h1 style={{ fontSize: "50px", marginTop: "19px" }}>{Math.floor(data?.main?.temp)}<span>&#xb0;</span>{'C'}</h1>
                            <div><img src={`http://openweathermap.org/img/wn/${id}@2x.png`} alt="" /></div>

                        </div>

                        <div>
                            <BarChart />
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
                                <div>5:45am</div>
                            </div>
                            <div >
                                <div>Sunset</div>
                                <div>6:45pm</div>
                            </div>

                        </div>
                        <div>
                            <img src="https://i.ibb.co/KX3jkQp/sunriseandset.png" alt="sunriseandset" />
                        </div>


                    </div>


                }

            </div>
        )
}

export default DisplayWeatherData