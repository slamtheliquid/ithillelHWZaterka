import React, {useContext, useEffect, useState} from 'react'
import {withRouter} from "../HOC/withRouter";
import {Card, Table} from "antd";
import axios from "axios";
import {API_KEY, API_URL} from "../constants";
import {Link} from "react-router-dom";
import {WeatherType} from "../types/weatherType";
import {RollbackOutlined} from "@ant-design/icons";
import { useParams } from "react-router-dom";
import {ColumnsType} from "antd/es/table";
import {ForecastType} from "../types/forecast";

const City = () => {
    const params = useParams();
    const [data, setData] = useState<WeatherType | null>(null);
    const [columns, setColumns] = useState<ColumnsType<any>>([
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Temperature',
            dataIndex: 'mainTemp',
            key: 'mainTemp'
        },
        {
            title: 'Wind',
            dataIndex: 'wind',
            key: 'wind'
        },
        {
            title: 'Atmospheric Pressure',
            dataIndex: 'pressure',
            key: 'pressure'
        },
        {
            title: 'Weather',
            dataIndex: 'weather',
            key: 'weather'
        }
    ]);

    const getData = async (id: string | undefined) => {
        if(id){
            const response = await axios.get(`${API_URL}?id=${id}&appid=${API_KEY}`);
            if (response.data) {
                setData({
                    ...response.data
                });
            }
        }
    }

    useEffect(() => {
        const paramId = params.id ?? '';
        getData(paramId);
    }, [])

    if (!data) {
        return null;
    }

    const {city, list} = data;

    const showForecast = (list : ForecastType[]) => {
        let result =  list.map(function (i, index) {
            if(index === 0 || index % 8 === 0){
                return {
                    date: new Date(i.dt_txt).toDateString(),
                    mainTemp: Math.round(i.main.temp - 273.15) + ' C' + ' - ' + Math.round(i.main.feels_like - 273.15) + ' C',
                    wind: i.wind.speed + ' m/s',
                    pressure: i.main.pressure + ' hPa',
                    weather: i.weather[0].main + ' ' +  '(' + i.weather[0].description + ')'
                }
            }
        })
        return result.filter(i => i !== undefined);
    }

    return (
        <Card title={city.name + ' (Coordinates: ' + city.coord.lon + ', ' + city.coord.lat + ')'}>
            <Table key={city.id}
                columns={columns}
                dataSource={showForecast(list)}
                rowKey='id'
                   pagination = {{
                       hideOnSinglePage: true
                   }}
            />
            <hr/>
            <Link to={'/'}><RollbackOutlined/> Return back</Link>
        </Card>
    )
}
export default withRouter(City);