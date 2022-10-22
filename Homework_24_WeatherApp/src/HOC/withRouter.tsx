import {useNavigate, useParams} from "react-router-dom";
import {ComponentClass, FC} from "react";

export const withRouter = (WrappedComponent: any) => {
    return (props :any) => {
        const navigate = useNavigate();
        const params = useParams();

        return (<WrappedComponent {...props} navigate={navigate} params={params} />)
    }
}