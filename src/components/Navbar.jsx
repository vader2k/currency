import { Button, Menu, Typography, Avatar } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons"

const Navbar = () => {
  return (
    <nav>
        <div>
            <Avatar />
            <Typography.Title level={2} className=""><Link to='/'>Cryptoverse</Link></Typography.Title>
            {/* <button></button> */}
        </div>
    </nav>
  )
}

export default Navbar