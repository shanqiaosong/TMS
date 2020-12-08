import reqwest from "reqwest";
import {Alert, Button, DatePicker, Drawer, Form, Input, Radio} from "antd";
import React from 'react';

class EditForm extends React.Component{
    constructor(props) {
        super(props);

    }

    state={
        IDNumHelper:' ',
        hasFeedback:true,
        IDNumStatus:'',
        IDNumValue:' ',
        loading:false,
        components:[],
        initVal:{}
    }
    formRef = React.createRef();

    handleSubmit=()=>{
        this.formRef.current.validateFields().then(()=>{

            console.log(this.state.IDNumStatus)
            if (this.state.IDNumStatus==='success'||this.state.IDNumStatus===''){
                let val=this.formRef.current.getFieldsValue()
                val.fromYear=val.fromYear.year();
                val._method='PUT'
                console.log(val)
                this.setState({
                    loading:true
                })
                reqwest({
                    url:'/api/1.0/teachers/'+this.props.editID,
                    method:'post',
                    data:val,
                    type:'json'
                }).then((msg)=>{
                    console.log(msg);
                    this.setState({
                        components:[<Alert message={'修改成功。'} key={Date.parse(new Date())} type="success" showIcon />],
                        loading:false
                    })
                    this.props.refresh();
                },(err,msg)=>{
                    let components=[];

                    console.log(err,msg);
                    if(err.status===422){
                        let errs=JSON.parse(err.response).errors
                        for(let i in errs){
                            for (let j=0;j<errs[i].length;j++){
                                components.push(<Alert message={errs[i][j]} key={Date.parse(new Date())} type="error" showIcon closable />)
                            }
                        }
                    }else if(err.status===500){
                        components.push(<Alert message={'服务器错误，请重试。'} key={Date.parse(new Date())} type="error" showIcon closable />)
                    }
                    else{
                        components.push(<Alert message={JSON.parse(err.response).message} key={Date.parse(new Date())} type="error" showIcon closable />)
                    }
                    this.setState({
                        components:components,
                        loading:false
                    })
                })

            }
        })
        //this.formRef.dispatchEvent(new Event('submit'))
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    handleRefresh(){
        //console.log('refrsh')
        this.setState({
            loading:false,
            components:[],
            IDNumHelper:' ',
            IDNumStatus:'',
        })
    }


    render(){
        //console.log('reload')
        //.log(this.props.initVal)
        return(
            <>
                <Drawer
                    destroyOnClose
                    title="修改教师信息"
                    width={720}
                    onClose={this.props.onClose}
                    visible={this.props.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={()=>{
                                this.formRef.current.resetFields()
                                this.handleRefresh()
                            }} style={{ marginRight: 16 }}>
                                重置
                            </Button>
                            <Button
                                loading={this.state.loading}
                                onClick={this.handleSubmit} htmlType="submit" type="primary">
                                提交
                            </Button>
                        </div>
                    }
                >
                    <div style={{
                        marginBottom:16
                    }}>{this.state.components}</div>
                    <Form
                        ref={this.formRef}
                        layout="vertical"
                        onFinish={(msg)=>{
                            console.log(msg)
                        }}
                        initialValues={this.props.initVal}
                    >
                        <Form.Item
                            name="name"
                            label="姓名"
                            rules={[
                                { required: true, message: '输入教师姓名' },
                                { min:2,message:'姓名最少两个字符'}
                                ]}
                        >
                            <Input placeholder="输入教师姓名" />
                        </Form.Item>
                        <Form.Item
                            name="IDNum"
                            label="身份证号"
                            rules={[{ required: true, message: '输入18位身份证号' }]}
                            hasFeedback
                            validateStatus={this.state.IDNumStatus}
                            help={this.state.IDNumHelper}
                        >
                            <Input
                                style={{ width: '100%' }}
                                placeholder="输入18位身份证号"
                                rules={[{ required: true, message: '请输入身份证号' }]}
                                onChange={(e)=>{
                                    this.formRef.current.setFieldsValue({
                                        IDNum:e.target.value.toUpperCase()
                                    })
                                }}
                                onBlur={(e)=>{

                                    if (e.target.value==''){
                                        return;
                                    }
                                    this.setState({
                                        IDNumStatus:'validating',
                                        IDNumHelper:'验证中'
                                    })
                                    reqwest({
                                        url:'/api/1.0/helpers',
                                        data:{
                                            IDNum:(e.target.value)
                                        },
                                        method:'get',
                                        type: 'json',
                                    }).then((data)=>{
                                        if(data.result||data.help==='身份证号已存在'){
                                            this.setState({
                                                IDNumStatus:'success',
                                                IDNumHelper:'验证成功'
                                            })
                                        }else{
                                            this.setState({
                                                IDNumStatus:'error',
                                                IDNumHelper:data.help
                                            })
                                        }
                                    })
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="group"
                            label="岗位"
                            rules={[{ required: true, message: '请选择岗位' }]}
                        >
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value={1}>领导</Radio.Button>
                                <Radio.Button value={2}>考试学科任课教师</Radio.Button>
                                <Radio.Button value={3}>非考试学科任课教师</Radio.Button>
                                <Radio.Button value={4}>教辅</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            name="rank"
                            label="职级"
                            rules={[{ required: true, message: '请选择职级' }]}
                        >
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value={1}>初级教师</Radio.Button>
                                <Radio.Button value={2}>二级教师</Radio.Button>
                                <Radio.Button value={3}>一级教师</Radio.Button>
                                <Radio.Button value={4}>高级教师</Radio.Button>
                                <Radio.Button value={5}>正高级教师</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name='fromYear'
                                   label='参加工作、职级评选年份'
                                   rules={[{required:true,message:'请输入评选年份'}]}>
                            <DatePicker picker="year" />
                        </Form.Item>

                    </Form>
                </Drawer>
            </>
        )
    }

}

export default EditForm;
