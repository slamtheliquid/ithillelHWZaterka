import axios from "axios";
import {addUsers} from "./reducers";

export const fetchUsers = () => {
    return async(dispatch: any) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(addUsers(response.data));
    }
}