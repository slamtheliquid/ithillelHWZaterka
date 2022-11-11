import {ReactNode, useEffect, useState} from 'react'
import axios from 'axios';
import { API_URL } from '../constants';
import {ShowType} from '../types/show';
import { useParams } from "react-router-dom";
import {useShowContext} from "../context/ShowContext";
import {Menu} from 'components/Menu';
import {FilmCard} from "../components/FilmCard";

type ShowPropsType = {
  children?: ReactNode;
}

const Show = (props: ShowPropsType) => {
  const params = useParams();
  const [data, setData] = useState<ShowType | null>(null);
  const { selectedItem } = useShowContext();

  const getData = async (id: string | undefined) => {
      if (id) {
        const response = await axios.get(`${API_URL}/${id}`);
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

  const { image, name, status, network, summary, type, id,  } = data;

  return (
      <>
        { props.children }
        <Menu {...{ params, getData }} />
        <FilmCard {...{ image, name, status, network, summary, type }} />
      </>
        )
}

export default Show;