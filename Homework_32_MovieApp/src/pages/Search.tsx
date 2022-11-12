import { ChangeEvent, useState, useEffect, useCallback, useRef } from 'react'
import {Input, InputRef, List, Card, Button} from 'antd';
import {ShowSearchType} from '../types/show';
import axios from 'axios';
import {SEARCH_URL} from './../constants';
import styles from './Characters.module.less';
import { useNavigate } from 'react-router-dom';
import { debounce } from './../utils/debounce';
import {useShowContext} from "../context/ShowContext";

function Search() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [data, setData] = useState<ShowSearchType[]>([]);
    const inputEl = useRef<InputRef | null>(null);

    const { setSelectedItem } = useShowContext();

    const getData = useCallback(async (pageNumber?: number) => {
        const page = pageNumber ? pageNumber : currentPage;
        setLoading(true);
        let response = await axios.get(`${SEARCH_URL}/shows?q=${inputValue}`);
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
    }, [currentPage, inputValue]);

    const onDebounce = debounce(getData, 500);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
        setCurrentPage(1);
        onDebounce();
    }

    function onSelectRow(record: any): void {
        setSelectedItem(record);
        navigate(`/${record}`);
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
            <Button onClick={() => {onSelectRow('')}}>Go back</Button>
            <Input ref={inputEl} placeholder="Enter name" value={inputValue} onChange={onChange} />
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
                        <Card title={item.show.name}
                              hoverable={true}
                              size='small'
                              key='key'
                              style={{ width: 300, margin: 20 }}
                              onClick={() => {return onSelectRow(item.show.id)}}
                        >
                            <img src={isImgNull(item.show.image)} style={{width: 270}} />
                            <h3>Genres: {item.show.genres + ' '}</h3>
                            <h3>Language: {item.show.language}</h3>
                            <h3>Status: {item.show.status}</h3>
                            <h3>Type: {item.show.type}</h3>
                            <h3>Premiered: {item.show.premiered}</h3>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Search;