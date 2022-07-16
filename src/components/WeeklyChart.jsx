import React from 'react'
import styles from './Weather.module.css'
const WeeklyChart = ({temp,day,links,temp2,desc}) => {
    return (
        <div>
            <div className={styles.day} >
                <div>{day}</div>
                <div>{temp}<span>&#xb0;</span>{temp2}<span>&#xb0;</span></div>
                <div><img src={links} alt="" /></div>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default WeeklyChart
