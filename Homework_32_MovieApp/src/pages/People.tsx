import { ReactNode, useState, useEffect, useCallback, useRef } from 'react'
import { InputRef, List, Card, Button} from 'antd';
import axios from 'axios';
import {PEOPLE_URL} from './../constants';
import styles from './Characters.module.less';
import { useNavigate } from 'react-router-dom';
import {useShowContext} from "../context/ShowContext";
import {PeopleType} from "../types/people";

type ShowsPropsType = {
    children?: ReactNode;
};

function People(props: ShowsPropsType) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [data, setData] = useState<PeopleType[]>([]);
    const inputEl = useRef<InputRef | null>(null);

    const { setSelectedItem } = useShowContext();

    const getData = useCallback(async (pageNumber?: number) => {
        const page = pageNumber ? pageNumber : currentPage;
        setLoading(true);
        let response = await axios.get(`${PEOPLE_URL}`);
        if (response.data) {
            const list = response.data.map((item: any) => {
                return {
                    ...item,
                }
            });
            setTotal(response.data?.info?.count ?? 0);
            setData(list);
        }
        setLoading(false);
    }, [currentPage]);

    function onSelectRow(record: any): void {
        setSelectedItem(record);
        if(record === ''){
            navigate(`/`);
        }else{
            navigate(`/people/${record}`);
        }

    }

    useEffect(() => {
        getData(currentPage);
        if (inputEl.current) {
            inputEl.current.focus();
        }
    }, []);

    const isImgNull = (img:any) => {
        if(img === null){
            return "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
        }else{
            return img.medium;
        }
    }

    return (
        <div className={styles.container}>
            { props.children }
            <Button onClick={() => {onSelectRow('')}}>Shows</Button>
            <Button onClick={() => {onSelectRow('search')}}>Search</Button>
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
                rowKey='id'
                size='large'
                style={{width: 1000}}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.name}
                              hoverable={true}
                              size='small'
                              key='key'
                              style={{ width: 300, margin: 20 }}
                              onClick={() => {return onSelectRow(item.id)}}
                        >
                            <img src={isImgNull(item.image)} style={{width: 270}} />
                        </Card>
                    </List.Item>
                )}
                pagination={{
                    showSizeChanger: true,
                    pageSizeOptions: ["20", "50", "100"],
                    position: 'top'
                }}
            />
        </div>
    )
}

export default People;