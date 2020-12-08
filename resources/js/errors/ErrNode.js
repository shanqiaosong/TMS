import { Result, Button } from 'antd';
import React from 'react';
class ErrNode extends React.Component{
    render() {
        return(
            <Result
                status={this.props.status}
                title={this.props.title}
                subTitle={this.props.subTitle}
                extra={this.props.extra}
            />
        )
    }
}
export default ErrNode;
