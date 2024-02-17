import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import Navbar from './components/Navbar'
import { CryptoDetails, Cryptocurrencies, Exchanges, Home, News } from './pages'
const App = () => {
  return (
    <div className='flex'>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Layout>
          <div>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/exchanges' element={<Exchanges/>} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
              <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
              <Route path='/news' element={<News/>} />
            </Routes>
          </div>
        </Layout>
      </main>

      <footer></footer>
    </div>
  )
}

export default App