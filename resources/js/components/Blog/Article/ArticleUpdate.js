import React, { Component } from 'react';
import { Breadcrumb, Spin, message} from 'antd';
import { Link } from 'react-router-dom';
import { ArticleForm } from './ArticleForm';
import axios from 'axios'

export class ArticleUpdate extends React.Component {
    constructor(props) {
        super();
        this.state = {
            //文章相关
            id:props.match.params.id,
            article:{},
            loading:true,
            //标签
            tagsArr:[],
        };
    }
    componentDidMount(props) {
        //获取文章数据
        axios.get(window.apiURL + 'articles/' + this.state.id)
            .then((response) => {
                this.setState({
                    article:response.data.article,
                    loading:false,
                    tagsArr:response.data.tags_arr,
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    handleSubmit(article) {
        if (article.title == '') {
            message.error('标题不能为空');
        }else {
            //更新文章
            axios.post(window.apiURL + 'articles', article)
                .then((response) => {
                    console.log(response);
                    if (response.status == 200) {
                        message.success(response.data.message)
                        location.replace('/admin/article')
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    render(){

        return (
            <div style={{padding:20}}>
                <Spin spinning={this.state.loading}>
                    <ArticleForm article={this.state.article} tagsArr={this.state.tagsArr} isMarkdown={this.state.article.is_markdown} handleSubmit={this.handleSubmit.bind(this)}/>
                </Spin>
            </div>
        )
    }
}
