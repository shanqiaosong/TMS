import reqwest from "reqwest";
import {
    Alert,
    Card,
    Descriptions,
    Divider,
    PageHeader,
    Skeleton,
    Space,
    Tag,
    Tooltip,
    Modal
} from "antd";
import { Typography, } from 'antd';
import NoticeView from "./Article/NoticeView";
const { Text, Paragraph, Title} = Typography;
import {
    UserOutlined,
    ApartmentOutlined,
    StockOutlined,
    SolutionOutlined,
    SmileOutlined,
    FrownOutlined,
    CalendarOutlined,
    IdcardOutlined,StarOutlined,
    LikeOutlined,
    MessageOutlined,
    EyeOutlined
} from '@ant-design/icons';
import { List, Avatar } from 'antd';
import React from 'react';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const colorMap=(name)=>{
    switch (name){
        case '重要':
            return 'red';
        case '紧急':
            return 'geekblue';
        case '通知':
            return 'orange';
    }
}
class NoticeList extends React.Component{

    state={
        data:[],
        showDetail:true,
        detailID:0,
    }
    componentDidMount() {
        reqwest({
            url:'/articles/list',
            type:'json'
        }).then((resp)=>{
            this.setState({
                data:resp.articles.data,
                total:resp.articles.total
            })
        })
    }

    render() {
        return(
            <>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 8,
                }}
                dataSource={this.state.data}
                renderItem={(item,ord) => (
                    <List.Item
                        key={item.title}

                        actions={[
                            <Space>
                                {item.tags.map((tag, cnt) =>
                                    <Tag key={cnt} color={colorMap(tag.name) ?? 'default'}>{tag.name}</Tag>
                                )}
                            </Space>
                        ]
                        }
                        // actions={
                        //     [<Tag>123</Tag>,<Tag>456</Tag>]}
                        // extra={
                        //     <img
                        //         width={272}
                        //         alt="logo"
                        //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        //     />
                        // }
                    >
                        <List.Item.Meta
                            //title={<a href={'/articles/'+item.id}>{item.title}</a>}
                            title={<a onClick={()=>{
                                reqwest({
                                    url:'/articles/'+item.id
                                })
                                this.setState({
                                    showDetail:true,
                                    detailID:ord,

                                })
                            }}>{item.title}</a>}
                            description={<Space>

                                <>{item.created_at_date}</>
                                <IconText icon={EyeOutlined} text={item.view} key="list-vertical-star-o" /></Space>}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
                {this.state.data.length ?
                    <NoticeView data={this.state.data[this.state.detailID]} visible={this.state.showDetail}
                                onCancel={()=>{
                                    this.setState({
                                        showDetail:false
                                    })
                                }
                    }/>
                    : ''}
            </>
        )
    }
}

export default NoticeList
