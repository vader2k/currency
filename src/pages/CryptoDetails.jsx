import { useState } from "react"
import { useParams } from "react-router-dom"
import millify from "millify"
import { Col, Row, Typography, Select } from "antd"
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery,useGetCryptoHistoryQuery } from "../services/cryptoApi"
import LineCharts from "../components/LineCharts"

const { Title, Text } = Typography
const {Option} = Select


const CryptoDetails = () => {
  const { coinId } = useParams()
  const [ timePeriod, setTimePeriod ] = useState('7d') 
  const { data: coinHistory } = useGetCryptoHistoryQuery({coinId, timePeriod})
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin
 
  if (isFetching) return "loading..."

  const time = [ '3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y' ]

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.['24hVolume'] && millify(cryptoDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];



  return (
    <section>
      <Col>
        <Col>
          <Title className="flex w-full items-center justify-between" level={2}>
            <p>
              {cryptoDetails?.name} price
            </p>
            <img src={cryptoDetails?.iconUrl} className="w-[40px] h-[40px]"/>
          </Title>
          <p className="pb-3">
            {cryptoDetails?.description}
          </p>
          <p>
            {cryptoDetails?.name} live price in US Dollar
            View value statistics, market cap and supply
          </p>
        </Col>
        <Select
          defaultValue='7d'
          placeholder="Select Time Period"
          onChange={(value) => setTimePeriod(value)}
        >
          {time.map((date) => (
            <Option key={date}value={date} >{date}</Option>
          ))}
        </Select>
        {/* times chart */}
        <LineCharts coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>

       <Col>
          <Col>
            <Col>
              <Title level={3}>
                {cryptoDetails?.name} value statistics
              </Title>
              <p>
                An overview showing the stats of {cryptoDetails?.name}
              </p>
            </Col>
            <Col className="flex flex-col gap-4">
              {
                stats.map((stat) => (
                  <Col key={stat.title} xs={24} sm={12} lg={8}>
                    <Col className="p-3 flex items-center gap-3 hover:bg-white text-[1.3rem] border-b">
                      <Text>
                        {stat.icon}
                      </Text>
                      <Text className="text-[1.1rem] ">
                        {stat.title}
                      </Text>
                      <Text className="font-bold">{stat.value}</Text>
                    </Col>
                  </Col>
                ))
              }
            </Col>
          </Col>

          <Col>
            <Col>
              <Title level={3}>
                other statistics
              </Title>
              <p>
                An overview showing the stats of all crypto currencies
              </p>
            </Col>
            <Col className="flex flex-col gap-4">
              {
                genericStats.map((stat) => (
                  <Col key={stat.title} xs={24} sm={12} lg={8}>
                    <Col className="p-3 flex items-center gap-3 hover:bg-white text-[1.3rem] border-b">
                      <Text>
                        {stat.icon}
                      </Text>
                      <Text className="text-[1.1rem] ">
                        {stat.title}
                      </Text>
                      <Text className="font-bold">{stat.value}</Text>
                    </Col>
                  </Col>
                ))
              }
            </Col>
          </Col>
       </Col> 
       <Col>
          <Title level={3}>
              {cryptoDetails?.name} Links
          </Title>
          {
            cryptoDetails?.links.map((link) => (
              <Row key={link.name}>
                <Title level={5}>
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="">{link.name}</a>
              </Row>
            ))
          }
       </Col>
      </Col>
    </section>
  )
}

export default CryptoDetails

