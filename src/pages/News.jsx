import { Select, Typography, Row, Col, Card } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select; // Correct the import statement for Option

const News = ({ displayCount }) => {
  const { data: cryptoNews, isFetching } = useGetNewsQuery();
  const displayedNews = cryptoNews?.data.slice(0, displayCount);

  console.log(cryptoNews);

  return (
    <section>
      <Row gutter={[24, 24]}>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          displayedNews?.map((news, i) => (
            <Col key={i} xs={24} sm={12} lg={8}>
              <Card hoverable>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <div className="w-full flex items-start justify-between pb-3">
                    <Title level={4}>{news.title}</Title>
                    <img src={news.thumbnail} className="w-[80px] h-[80px] object-cover" />
                  </div>
                  <p>
                    {news.description.length > 100 
                      ? `${news?.description.substring(0,100)}...` 
                      : news?.description
                    }
                  </p>
                  <Text className="pt-5 text-[0.7rem] font-bold text-gray-600">{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                </a>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
};

export default News;