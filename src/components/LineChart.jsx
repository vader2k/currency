import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from "antd"

const { Title } = Typography

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = []
    const coinTimeStamp = []

    for (let i = 0; i< coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory?.data?.history[i]?.price)
        coinTimeStamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString())
    }

    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#0071db',
                borderColor: '#0071db',
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
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

        <Line data={data} options={options} />
    </>
  )
}

export default LineChart