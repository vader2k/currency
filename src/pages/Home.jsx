import millify from "millify"
import { Typography, Row, Col, Statistic } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography


import { useGetCryptosQuery } from "../services/cryptoApi"

const Home = () => {

    const { data, isFetching } = useGetCryptosQuery()
    console.log(data)
    const globalStats = data?.data?.stats;
    if (isFetching) {
        return <div>Loading...</div>
    }
  return (
    <section>
        <>
            <Title level={2}> Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 204h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div>
                <Title level={2}> Top 10 cryptocurrencies in the world</Title>
                <Title level={3}><Link to='/cryptocurrencies'>show more</Link></Title>
            </div>
        </>
    </section>
  )
}

export default Home