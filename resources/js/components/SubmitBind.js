import reqwest from "reqwest";
import {
    Alert,
    Card,
    Descriptions,
    Divider, Input,
    PageHeader,
    Skeleton,
    Space,
    Tag,
    Tooltip,
    Result,
    Button, message, Form, Steps
} from "antd";
const {Step} = Steps;
import { Typography, } from 'antd';

const { Text, Paragraph} = Typography;
import {
    UserOutlined,
    ApartmentOutlined,
    StockOutlined,
    SolutionOutlined,
    SmileOutlined,
    FrownOutlined,
    CalendarOutlined,
    IdcardOutlined,
    LoadingOutlined,
    AuditOutlined
} from '@ant-design/icons';
import React from 'react';
import {handleErr} from "../helper";
import {Link} from "react-router-dom";

class SubmitBind extends React.Component{
    state={
        teacherData:null,
        infoLoading:true,
        requestIDNum:''
    }
    componentDidMount() {
        reqwest({
            url:'/api/1.0/binding/getInfo/',
            type:'json'
        }).then((value)=>{
            console.log(value)
            this.setState({
                bindingData:value,
                infoLoading:false
            })
        })
    }

    formRef = React.createRef();

    applyForm=()=> (
        <Form
            ref={this.formRef}
            layout="inline"
            key={'applyForm'}
            onFinish={(msg)=>{

                if (msg.IDNum===''){
                    return;
                }
                this.setState({
                    IDNumStatus:'validating',
                    IDNumHelper:'验证中'
                })
                reqwest({
                    url:'/api/1.0/helpers',
                    data:{
                        IDNum:(msg.IDNum)
                    },
                    method:'get',
                    type: 'json',
                }).then((data)=>{
                    if(data.result||data.help==='身份证号已存在'){
                        console.log(this.state.requestIDNum)
                        reqwest({
                            url:'/api/1.0/apply',
                            data:{
                                IDNum:msg.IDNum
                            }
                        }).then(()=>{
                            message.success('申请成功！')
                            this.props.refresh()
                            this.setState({
                                IDNumHelper:' ',
                                IDNumStatus:'',
                            })
                        },(err)=>{
                            handleErr(err);
                        })
                    }else{
                        this.setState({
                            IDNumStatus:'error',
                            IDNumHelper:data.help
                        })
                    }
                })
            }}
            style={{
                width:'fit-content',
                marginLeft:'auto',
                marginRight:'auto',
                textAlign:'center'
            }}
            initialValues={this.props.initVal}
        >
            <Form.Item
                name="IDNum"
                label="身份证号"
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

                    }}
                />
            </Form.Item>

            <Button htmlType="submit" type="primary" key="console">
                申请
            </Button>
        </Form>
    )

    render(){
        console.log(this.props.info)
        if (this.props.info.res===-1){
            return <Skeleton active={true}/>
        }else if(this.props.info.res===-3){
            if (this.props.info.status===1){
                return (
                    <div>
                        <Steps current={1}>
                            <Step title="提交申请" description="提交本人身份证号"  />
                            <Step  title="学校审核" description="学校需要审核匹配"  />
                            <Step title="绑定成功" description="绑定成功即可查看成绩"  />
                        </Steps>
                        <Divider/>
                        <Result
                            title={"审核中，请静候佳音"}
                            subTitle={
                                <>
                                    目前申请的身份证号是：<span style={{
                                    fontFamily:'Consolas'
                                }}>{this.props.info.pendingIDNum}
                                        </span>，您也可以重新申请。
                                </>
                            }
                            icon={<LoadingOutlined />}
                            extra={[
                                this.applyForm()
                            ]
                            }
                        />
                    </div>
                )
            }else if(this.props.info.status===2){
                return (
                    <div>
                        <Steps current={2}>
                            <Step title="提交申请" description="提交本人身份证号"  />
                            <Step  title="学校审核" description="学校需要审核匹配"  />
                            <Step title="绑定成功" description="绑定成功即可查看成绩"  />
                        </Steps>
                        <Divider/>
                        <Result
                            title={'已经批准'}
                            subTitle={'若无法查看成绩，请联系管理员。'}
                            extra={[
                                this.applyForm()
                            ]}
                        />
                    </div>
                )
            }else if(this.props.info.status===3){
                return (
                    <div>
                        <Steps current={1} status={'error'}>
                            <Step title="提交申请" description="提交本人身份证号"  />
                            <Step title="学校审核" description="学校需要审核匹配"  />
                            <Step title="绑定成功" description="绑定成功即可查看成绩"  />
                        </Steps>
                        <Divider/>
                        <Result
                            status={'error'}
                            title={'请求被拒绝'}
                            subTitle={'请检查信息是否有误，并重新申请。'}
                            extra={[
                                this.applyForm()
                            ]
                            }

                        />
                    </div>
                )
            }else{
                return (
                    <div>
                        <Steps current={0}>
                            <Step title="提交申请" description="提交本人身份证号"  />
                            <Step  title="学校审核" description="学校需要审核匹配"  />
                            <Step title="绑定成功" description="绑定成功即可查看成绩"  />
                        </Steps>
                        <Divider/>
                        <Result title="尚未提交绑定申请，请申请要绑定的身份证号。"
                                extra={[
                                    this.applyForm()
                                ]
                                }
                        />
                    </div>
                )
            }
        }else{
            return (
                <div>
                    <Steps current={3}>
                        <Step title="提交申请" description="提交本人身份证号"  />
                        <Step title="学校审核" description="学校需要审核匹配"  />
                        <Step title="绑定成功" description="绑定成功即可查看成绩"  />
                    </Steps>
                    <Divider/>
                    <Result
                        status="success"
                        title="您已成功绑定！"
                        subTitle={
                            <>您现在绑定的身份证号是：{this.props.info.IDNum}<br/>若想换绑，请联系学校或系统管理员。
                            </>
                        }
                        extra={[
                            <Button key={'feedback'} type="primary"><Link to={'/home/feedback'}>反馈</Link></Button>,
                        ]}
                    />
                </div>
            )
        }
    }
}


export default SubmitBind
