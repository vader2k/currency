import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Col, Row, Typography } from "antd"

const { Title } = Typography;

const LineCharts = ({ coinHistory, currentPrice, coinName }) => {
    
    const data = coinHistory?.data?.history
    const items = data?.map(({price, timestamp}) => ({
        timestamp: new Date(timestamp * 1000).toLocaleDateString(),
        price: parseFloat(price).toFixed(4)
    }))


    return (
        <>
            <Row>
                <Title level={2}>
                    {coinName} Price Chart
                </Title>
                <Col className="w-full flex items-center justify-between">
                    <Title level={5}>
                        {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5}>
                        Current {coinName} price: ${currentPrice}
                    </Title>
                </Col>
            </Row>
            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart
                    data={items}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp"/>
                    <YAxis dataKey="price"/>
                    <Tooltip />
                    <Line dot={false} type="monotone" dataKey="price" stroke="#8884d8"/>
                    <Line dot={false} type="monotone" dataKey="timestamp" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default LineCharts;