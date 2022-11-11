import {useEffect, useState} from 'react'
import {Table} from 'antd';
import axios from 'axios';
import { API_URL } from '../constants';
import { useParams } from "react-router-dom";
import {Menu} from 'components/Menu';
import { EpisodesType } from "../types/episode";
import {ColumnsType} from "antd/es/table/Table";

const Episodes = () => {
    const params = useParams();
    const [data, setData] = useState<EpisodesType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [columns, setColumns] = useState<ColumnsType<EpisodesType>>([
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'Runtime',
            dataIndex: 'runtime',
            key: 'runtime'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Season',
            dataIndex: 'season',
            key: 'season'
        }
    ])

    const getData = async (id: string | undefined) => {
        setLoading(true);
        let response = await axios.get(`${API_URL}/${id}/episodes`);
        if (response.data) {
            const list = response.data.map((item: any) => {
                return {
                    ...item,
                }
            });
            setData(list);
        }
        setLoading(false);
    }

    useEffect(() => {
        const paramId = params.id ?? '';
        getData(paramId);
    }, []);

    if (!data) {
        return null;
    }

    return (
        <>
            <Menu {...{ params }} />
            <Table
                loading={loading}
                columns={columns}
                dataSource={data}
                rowKey='id'
            />
        </>)
}

export default Episodes;