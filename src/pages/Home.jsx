import millify from "millify"
import { Typography, Row, Col, Statistic } from "antd"
import { Link } from "react-router-dom"
const { Title } = Typography


import { useGetCryptosQuery } from "../services/cryptoApi"
import Cryptocurrencies from "./Cryptocurrencies"
import News from "./News"

const Home = () => {

    const { data, isFetching } = useGetCryptosQuery(10)
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
            <div className="w-full flex items-center justify-between">
                <Title level={2}> Top 10 cryptocurrencies in the world</Title>
                <Title level={3}><Link to='/cryptocurrencies'>show more</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div>
                <Title level={2}> Latest Crypto News</Title>
                <Title level={3}><Link to='/news'>show more</Link></Title>
            </div>
            <News displayCount={6}/>
        </>
    </section>
  )
}

export default Home