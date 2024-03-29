import {useEffect, useState} from 'react'
import {Card, List} from 'antd';
import axios from 'axios';
import { API_URL } from '../constants';
import { useParams } from "react-router-dom";
import {Menu} from 'components/Menu';
import {CastType} from "../types/cast";

const Characters = () => {
    const params = useParams();
    const [data, setData] = useState<CastType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async (id: string | undefined) => {
        setLoading(true);
        let response = await axios.get(`${API_URL}/${id}/cast`);
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
    const isImgNull = (img:any) => {
        if(img === null){
            return "https://static.tvmaze.com/images/no-img/no-img-portrait-clean.png";
        }else{
            return img.medium;
        }
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
                        <Card title={item.character.name}
                              hoverable={false}
                              size='small'
                              key='key'
                              style={{ width: 300, margin: 20 }}
                        >
                            <img src={isImgNull(item.character.image)} style={{width: 270}} />
                            <h3>Played by: {item.person.name}</h3>
                        </Card>
                    </List.Item>
                )}
            />
    </>)
}

export default Characters;