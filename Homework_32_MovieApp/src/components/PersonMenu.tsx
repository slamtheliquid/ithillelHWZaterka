import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useShowContext} from "../context/ShowContext";

export const PersonMenu = (props: any) => {
    const navigate = useNavigate();
    const { setSelectedItem } = useShowContext();
    function onSelectRow(record: any): void {
        setSelectedItem(record);
        navigate(`/people/${record}`);
    }
    return (
        <>
            <Button onClick={() => {onSelectRow('')}}>Go back</Button>
            <Button onClick={() => {onSelectRow(props.params.id)}}>Main</Button>
            <Button onClick={() => {onSelectRow(props.params.id + '/shows')} }>Shows</Button>
        </>
    );
};