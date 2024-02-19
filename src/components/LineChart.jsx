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
            <Col>
                <Title level={5}>
                    {coinHistory?.data?.change}
                </Title>
            </Col>
        </Row>
    </>
  )
}

export default LineChart