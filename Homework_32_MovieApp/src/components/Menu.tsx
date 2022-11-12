import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useShowContext} from "../context/ShowContext";

export const Menu = (props: any) => {
    const navigate = useNavigate();
    const { setSelectedItem } = useShowContext();
    function onSelectRow(record: any): void {
        setSelectedItem(record);
        navigate(`/${record}`);
    }
    return (
        <>
            <Button onClick={() => {onSelectRow('')}}>Back to the front page</Button>
            <Button onClick={() => {onSelectRow(props.params.id)}}>Main</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/episodes')} }>Episodes</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/seasons')} }>Seasons</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/cast')} }>Cast</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/crew')} }>Crew</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/characters')} }>Characters</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/gallery')}}>Gallery</Button>
        </>
    );
};