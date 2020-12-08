import {Divider, Modal, Space, Typography} from "antd";
const {Title,Text}=Typography
import React from "react";
import {
EyeOutlined
} from '@ant-design/icons';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
class NoticeView extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Modal
                    visible={this.props.visible} footer={null}
                    onCancel={this.props.onCancel}
                    width={800}
                >
                    <Typography>
                        <Title>{
                            this.props.data.title}
                        </Title>
                        <Space>
                            <Text type={'secondary'}>发布于 {this.props.data.created_at_date}
                                <Divider type={'vertical'}/><IconText icon={EyeOutlined} text={this.props.data.view} key="list-vertical-star-o" />
                            </Text>
                        </Space>
                        <Divider/>
                        <div style={{
                            maxWidth:750,
                            overflow:'hidden'
                        }}
                             className={'notice'}
                             dangerouslySetInnerHTML={{__html:this.props.data.content_html}}/>
                    </Typography>
                </Modal>
            </div>
        );
    }
}

export default NoticeView;
