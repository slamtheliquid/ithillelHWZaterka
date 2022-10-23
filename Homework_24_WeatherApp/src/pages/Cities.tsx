import React, {ReactNode, useCallback, useContext, useEffect, useState} from 'react'
import {Table} from 'antd'
import {ColumnsType} from "antd/es/table";
import {WeatherType} from "../types/weatherType";
import {JSON_CITIES_DATA} from '../json/json'
import {useNavigate, useParams} from "react-router-dom";
import {WeatherContext} from "../context/WeatherContext";
import {WeatherContextType} from "../types/weatherContextType";
import {Search} from "../components/Search";

type CitiesPropsType = {
    children?: ReactNode;
}

const Cities = (props: CitiesPropsType) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [columns, setColumns] = useState<ColumnsType<{} >>([
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country'
        }
    ]);
    const [data, setData] = useState<WeatherType[]>([]);

    const getData = useCallback(async (pageNumber: number) => {
        const page = pageNumber ? pageNumber : currentPage;
        setLoading(true)
        const response = JSON_CITIES_DATA;
        if (response) {
            const list = response.map((item: any) => {
                return {
                    ...item
                }
            }) ?? [];
            setData(list)
        }
        setLoading(false);
    }, []);

    const [cities] = useState(JSON_CITIES_DATA);
    const [filtered, setFiltered] = useState([{}]);

    useEffect(() => {
        setFiltered(cities);
    }, [cities])

    const search = (val:any) => {
        let currentCities = [], newList = [];
        if (val !== "") {
            currentCities = cities;
            newList = currentCities.filter(city => {
                const lc = city.name.toLowerCase();
                const filter = val.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = JSON_CITIES_DATA;
        }
        setFiltered(newList);
    };

    async function onPageChange(page: number){
        if(currentPage !== page){
            setCurrentPage(page);
            await getData(page)
        }
    }

    const {setSelectedItem} = useContext<WeatherContextType>(WeatherContext);
    function onSelectRow(record: WeatherType):void{
        setSelectedItem(record)
        navigate(`/${record.id}`)
    }

    return(
        <div className='container'>
            { props.children }
            <Search {...{ search }} />
            <Table
                loading={loading}
                columns={columns}
                dataSource={filtered}
                rowKey='id'
                onRow={(record: any) => {
                    return{
                        onClick: event => onSelectRow(record)
                    };
                }}

                pagination={{
                    position: ["bottomCenter"],
                    current: currentPage,
                    pageSize: 20,
                    total: total,
                    hideOnSinglePage: true,
                    onChange: onPageChange,
                    showSizeChanger: false
            }}
            />
        </div>
    )
}

export default Cities;
