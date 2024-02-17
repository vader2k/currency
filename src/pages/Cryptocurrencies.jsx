import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useState , useEffect } from "react"

import { useGetCryptosQuery } from "../services/cryptoApi"

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data:cryptosList, isFetching } = useGetCryptosQuery(count)
  const [ cryptos, setCryptos ] = useState([])
  const [ search, setSeach ] = useState("")

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
    setCryptos(filteredData)
  },[search, cryptosList])

  if (isFetching) {
    return <div>Loading...</div>
  }
  return (
    <section>
      <>
        <div className="max-w-[300px] mx-auto py-5">
          <Input placeholder="search currency" onChange={(e)=> setSeach(e.target.value)}/>
        </div>
        <Row gutter={[32, 32]}>
          {cryptos?.map((currency) => (
            <Col key={currency.rank} xs={24} sm={12} lg={6}>
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