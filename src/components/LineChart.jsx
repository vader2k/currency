import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from "antd"

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  return (
    <>
        <Row>
            <Title level={2}>
                {coinName} Price Chart
            </Title>
            <Col className="w-full flex items-center justify-between">
                <Title level={5}>
                    {coinHistory?.data?.change}
                </Title>
                <Title level={5}>
                    Current {coinName} price: ${currentPrice} 
                </Title>
            </Col>
        </Row>
    </>
  )
}

export default LineChart