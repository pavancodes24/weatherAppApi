import React from 'react'
import styles from './Weather.module.css'
const WeeklyChart = ({temp,day,links}) => {
    return (
        <div >
            <div className={styles.day} >
                {day}
                <br />
                25<span>&#xb0;</span>{temp}<span>&#xb0;</span>
                <br />
                <img src={links} alt="" />
            </div>
        </div>
    )
}

export default WeeklyChart
