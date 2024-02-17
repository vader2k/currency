import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import Navbar from './components/Navbar'
import { CryptoDetails, Cryptocurrencies, Exchanges, Home, News } from './pages'
const App = () => {
  return (
    <div className='flex items-start  w-full'>
      <nav className='w-full max-w-[300px]'>
        <Navbar />
      </nav>

      <main className='w-full h-full'>
        <Layout className='h-full px-5 py-5'>
          <div className='w-full'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/exchanges' element={<Exchanges/>} />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} />
              <Route path='/crypto/:coinId' element={<CryptoDetails/>} />
              <Route path='/news' element={<News/>} />
            </Routes>
          </div>
        </Layout>


        <footer className='w-full bg-gray-900 text-center'>
            <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
            </Space>
        </footer>
      </main>
    </div>
  )
}

export default App