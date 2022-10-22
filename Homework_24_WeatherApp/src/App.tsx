import './App.css';
import {Badge, Button, Col, Input, Layout, Row, Space} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {Route, Routes} from "react-router-dom";
import Cities from './pages/Cities';
import City from './pages/City';
import NotFound from './pages/NotFound';
import {ProvideCharacter} from "./context/WeatherContext";
import ErrorBoundary from "./components/ErrorBoundary";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const App = () => {
    const { Header, Content } = Layout;
    const [value, setValue] = useState('');
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();

    const onAddValue = () => {
        const number = Number(value);
        dispatch({type: 'ADD_COUNT', payload: number})
    }

    return (
        <Layout>
            <Header></Header>
            <Content>
                <ProvideCharacter>
                    <ErrorBoundary>
                        <Routes>
                            <Route path='/' element={<Cities>
                                <h1>Cities Page</h1>
                            </Cities>}/>
                            <Route path='/:id' element={<City />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </ErrorBoundary>
                </ProvideCharacter>
            </Content>
        </Layout>
    );
}

export default App;