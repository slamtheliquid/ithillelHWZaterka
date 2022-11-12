import {ReactNode, useEffect, useState} from 'react'
import axios from 'axios';
import {PEOPLE_URL} from '../constants';
import { useParams } from "react-router-dom";
import {PersonMenu} from "../components/PersonMenu";
import {PersonCard} from "../components/PersonCard";
import {PeopleType} from "../types/people";
import {usePeopleContext} from "../context/PeopleContext";

type PeoplePropsType = {
    children?: ReactNode;
}

const Person = (props: PeoplePropsType) => {
    const params = useParams();
    const [data, setData] = useState<PeopleType | null>(null);
    const { selectedItem } = usePeopleContext();

    const getData = async (id: string | undefined) => {
        if (id) {
            const response = await axios.get(`${PEOPLE_URL}/${id}`);
            if (response.data) {
                setData({
                    ...response.data,
                    episodesCount: response.data?.episode?.length ?? 0,
                });
            }
        }
    }

    useEffect(() => {
        if (selectedItem) {
            setData(selectedItem);
        } else {
            const paramId = params.id ?? '';
            getData(paramId);
        }
    }, [selectedItem, params]);

    if (!data) {
        return null;
    }
    const isImgNull = (img:any) => {
        if(img === null){
            return "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
        }else{
            return img.medium;
        }
    }

    const { image, name, birthday, gender } = data;

    return (
        <>
            { props.children }
            <PersonMenu {...{ params, getData }} />
            <PersonCard {...{ isImgNull, image, name, birthday, gender }} />
        </>
    )
}

export default Person;