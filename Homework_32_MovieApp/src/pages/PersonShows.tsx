import { ReactNode, useState, useEffect} from 'react'
import {List, Card} from 'antd';
import {ShowByPersonType} from '../types/show';
import axios from 'axios';
import {PEOPLE_URL} from './../constants';
import styles from './Characters.module.less';
import {useNavigate, useParams} from 'react-router-dom';
import {useShowContext} from "../context/ShowContext";
import {PersonMenu} from "../components/PersonMenu";

type ShowsPropsType = {
    children?: ReactNode;
};

function PersonShows(props: ShowsPropsType) {
    const navigate = useNavigate();
    const { setSelectedItem } = useShowContext();
    const params = useParams();
    const [data, setData] = useState<ShowByPersonType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getData = async (id: string | undefined) => {
        setLoading(true);
        const response = await axios.get(`${PEOPLE_URL}/${id}/castcredits?embed=show`);
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
    function onSelectRow(record: any): void {
        setSelectedItem(record);
        navigate(`/${record}`);
    }
    const isImgNull = (img:any) => {
        if(img === null){
            return "https://static.tvmaze.com/images/no-img/no-img-portrait-clean.png";
        }else{
            return img.medium;
        }
    }

    return (
        <div className={styles.container}>
            { props.children }
            <PersonMenu {...{ params, getData }} />
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
                        <Card title={item._embedded.show.name}
                              hoverable={true}
                              size='small'
                              key='key'
                              style={{ width: 300, margin: 20 }}
                              onClick={() => {return onSelectRow(item._embedded.show.id)}}
                        >
                            <img src={isImgNull(item._embedded.show.image)} style={{width: 270}} />
                            <h3>Genres: {item._embedded.show.genres + ' '}</h3>
                            <h3>Language: {item._embedded.show.language}</h3>
                            <h3>Status: {item._embedded.show.status}</h3>
                            <h3>Type: {item._embedded.show.type}</h3>
                            <h3>Premiered: {item._embedded.show.premiered}</h3>
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default PersonShows;