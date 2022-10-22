import {Input} from "antd";

export const Search = (props: any) => {
    return (
        <Input
            onChange={({ target: { value } }) => props.search(value)}
            type="text"
            placeholder="Search city..."
        />
    );
};