import {useEffect, useState} from 'react'
import {Card, List} from 'antd';
import axios from 'axios';
import { API_URL } from '../constants';
import { useParams } from "react-router-dom";
import {Menu} from 'components/Menu';
import {GalleryType} from "../types/gallery";

const Gallery = () => {
    const params = useParams();
    const [data, setData] = useState<GalleryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async (id: string | undefined) => {
        setLoading(true);
        let response = await axios.get(`${API_URL}/${id}/images`);
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
            <List
                loading={loading}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                size='large'
                style={{width: 1000}}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.type}
                              hoverable={false}
                              size='small'
                              key='key'
                              style={{ width: 300, margin: 20 }}
                        >
                            <img src={item.resolutions.original.url} style={{width: 270}} />
                        </Card>
                    </List.Item>
                )}
            />
        </>)
}

export default Gallery;