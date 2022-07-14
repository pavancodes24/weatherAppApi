import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from './Weather.module.css';
import WeeklyChart from './WeeklyChart';
import axios from 'axios';


export const WeeklyTotal=()=>{
    const { data, isLoading } = useSelector(state => state)
    const [wData,setWData] = useState();
    useEffect(()=>{
        if(data&& data.coord){
            getdataofUser(data.coord.lat,data.coord.lon)
            
        }
    },[isLoading])

    const getdataofUser = async(lat,lon)=>{
        var {data} = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=045875faf6500e2b08e352de604e5d85`);
        setWData(data)
    }
    let arr = ['Mon',"Tue","Wed","Thu","Fri","Sat","Sun",'Mon',"Tue","Wed","Thu","Fri","Sat","Sun"]
    let date = new Date();
    let day = date.getDay();
    var ot;
    ot = arr.slice(day,day+8);
    return  <div>
            {wData && <div className={styles.weeklyData}>
                <WeeklyChart temp={Math.floor(wData.daily[0].temp.max)} temp2={Math.floor(wData.daily[0].temp.min)} day={ot[0]} links={`https://openweathermap.org/img/wn/${wData.daily[0].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[1].temp.max)} temp2={Math.floor(wData.daily[1].temp.min)} day={ot[1]} links={`https://openweathermap.org/img/wn/${wData.daily[1].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[2].temp.max)} temp2={Math.floor(wData.daily[2].temp.min)} day={ot[2]} links={`https://openweathermap.org/img/wn/${wData.daily[2].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[3].temp.max)} temp2={Math.floor(wData.daily[3].temp.min)} day={ot[3]} links={`https://openweathermap.org/img/wn/${wData.daily[3].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[4].temp.max)} temp2={Math.floor(wData.daily[4].temp.min)} day={ot[4]} links={`https://openweathermap.org/img/wn/${wData.daily[4].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[5].temp.max)} temp2={Math.floor(wData.daily[5].temp.min)} day={ot[5]} links={`https://openweathermap.org/img/wn/${wData.daily[5].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[6].temp.max)} temp2={Math.floor(wData.daily[6].temp.min)} day={ot[6]} links={`https://openweathermap.org/img/wn/${wData.daily[6].weather[0].icon}@2x.png`}/>
                <WeeklyChart temp={Math.floor(wData.daily[7].temp.max)} temp2={Math.floor(wData.daily[7].temp.min)} day={ot[7]} links={`https://openweathermap.org/img/wn/${wData.daily[7].weather[0].icon}@2x.png`}/>

            </div>}
    </div>
}