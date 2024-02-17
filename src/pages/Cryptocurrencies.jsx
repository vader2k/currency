import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useState } from "react"

import { useGetCryptosQuery } from "../services/cryptoApi"

const Cryptocurrencies = () => {

  const { data:cryptosList, isFetching } = useGetCryptosQuery()
  const [ cryptos, setCryptos ] = useState(cryptosList?.data.coins)

  return (
    <section>
      <>
        <Row gutter={[32, 32]}>
          {cryptos.map((currency) => (
            <Col key={currency.id} xs={24} sm={12} lg={6}>
              <Link to={`/crypto/${currency.rank}`}>
                <Card
                  title={ `${currency.rank}. ${currency.name}`}
                  extra= {<img className="w-[30px] h-[30px]" src={currency.iconUrl} />}
                  hoverable
                >
                  <p>price: {millify(currency.price)}</p>
                  <p>Market: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    </section>
  )
}

export default Cryptocurrencies