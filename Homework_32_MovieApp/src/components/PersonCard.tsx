import {Link} from "react-router-dom";
import {LeftOutlined} from "@ant-design/icons";
import {Card, Col, Row, Space, Typography} from "antd";

const { Title, Text } = Typography;
export const PersonCard = (props: any) => {
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
                                <Text strong>Birthday:</Text>
                            </Col>
                            <Col>
                                <Text code>{props.birthday}</Text>
                            </Col>
                        </Row>
                        <Row gutter={8} className='indent'>
                            <Col>
                                <Text strong>Gender:</Text>
                            </Col>
                            <Col>
                                <Text code>{props.gender}</Text>
                            </Col>
                        </Row>
                    </Space>
                </Col>
            </Row>
        </Card>
    )
}