import {Link} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import {Card, Col, Row, Space, Typography} from "antd";

const { Title, Text } = Typography;
export const FilmCard = (props: any) => {
    return (
        <Card title={<Title level={4}>{props.name}</Title>} className='card' extra={<Link to='/'><LeftOutlined /></Link>}>
            <Row justify='center' gutter={[16, 16]}>
                <Col flex='300px'>
                    <img alt={props.name} src={props.isImgNull(props.image)} />
                </Col>
                <Col flex='auto' className="gutter-row">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Row gutter={8} className='indent'>
                            <Col>
                                <Text strong>Status:</Text>
                            </Col>
                            <Col>
                                <Text code>{props.status}</Text>
                            </Col>
                        </Row>
                        <Row gutter={8} className='indent'>
                            <Col>
                                <Text strong>Summary:</Text>
                            </Col>
                            <Col>
                                {props.summary}
                            </Col>
                        </Row>
                        <Row gutter={8} className='indent'>
                            <Col>
                                <Text strong>Type:</Text>
                            </Col>
                            <Col>
                                <Text code>{props.type}</Text>
                            </Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}