import React from 'react'
import styles from './Weather.module.css'
const WeeklyChart = ({temp,day,links,temp2}) => {
    return (
        <div >
            <div className={styles.day} >
                {day}
                <br />
                {temp}<span>&#xb0;</span>{temp2}<span>&#xb0;</span>
                <br />
                <img src={links} alt="" />
            </div>
        </div>
    )
}

export default WeeklyChart
