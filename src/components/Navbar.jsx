import { Button, Menu, Typography, Avatar } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"

import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav>
        <Menu theme="dark">
            <div>
                <Avatar src={logo} size="large"/>
                <Typography.Title level={2} className=""><Link to='/'>Cryptoverse</Link></Typography.Title>
                {/* <button></button> */}
            </div>
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to='/exchanges'>Exchanegs</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </nav>
  )
}

export default Navbar