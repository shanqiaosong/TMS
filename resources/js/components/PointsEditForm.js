import React from 'react';
import reqwest from 'reqwest';
import {
    Skeleton,
    Popconfirm,
    Button,
    Row,
    Col,
    Tag,
    Collapse,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Card, Space, message, Alert,
    Spin,
    Descriptions,
    Empty,
    PageHeader,
    Divider,
    AutoComplete,
    Select, Popover, Badge,
} from "antd";
import { MinusCircleOutlined,
    PlusOutlined,
    EditOutlined,
    FormOutlined,
    UserOutlined,
    ApartmentOutlined,
    DeleteOutlined,
    SaveOutlined,
    CloseOutlined,
    CheckOutlined,
    StockOutlined,
    SolutionOutlined,
    SmileOutlined,
    FrownOutlined,
    CalendarOutlined,
    IdcardOutlined
} from '@ant-design/icons';
import moment from "moment";
import '../../css/admin.css'
import {handleErr} from "../helper";
import Hashids from 'hashids'
const hashids = new Hashids('qiaosong',8)

class PointsEditForm extends React.Component{
    constructor(props) {
        super(props);
    }
    state={
        teacherId:hashids.decode(this.props.match.params.teacherId)[0],
        collapses:[],
        data:[],
        submitLoading:false,
        spinning:true,
        infoLoading:true,
        newYear:moment().year(),
        activeKey:[0],
        teacherData:{
            metaData:{}
        },
        configData:{
            prompt:{
                positionPoints:[],
                workloadPoints:[],
                assessmentPoints:[],
                moralityPoints:[],
            },
            promptPoints:{
                positionPoints:[],
                workloadPoints:[],
                assessmentPoints:[],
                moralityPoints:[],
            }
        }
    }

    formRef = React.createRef();

    formRefs=[]
    formRefsPerformance=[]
    formRefsPunishment=[]

    handleRefresh(){

        reqwest({
            url:'/api/1.0/teachers/'+this.state.teacherId,
            type:"json"
        }).then((data)=>{
            this.setState({
                teacherData:data,
                infoLoading:false
            })
        },(err)=>{
            handleErr(err)
        })
        reqwest({
            url:'/api/1.0/points/'+this.state.teacherId,
            type:"json"
        }).then((data2)=>{
            this.setState({
                data:data2,
                spinning:false
            })
        },(err)=>{
            handleErr(err)
        })
    }

    componentDidMount() {

        reqwest({
            url:'/api/1.0/config/'+this.state.teacherId,
            type:"json"
        }).then((data2)=>{

            console.log(data2)
            this.setState({
                configData:data2
            })
        },(err)=>{
            handleErr(err)
        })
        this.handleRefresh()
    }

    render() {
        let data=this.state.data
        let collapses=[]
        let tagStyle={
            marginRight:8,
            marginTop:8,
        }
        let prompt=this.state.configData.prompt;
        let promptPoints=this.state.configData.promptPoints;

        for (let i=0;i<data.length;i++){
            this.formRefs[i]=(React.createRef())
            this.formRefsPerformance[i]=(React.createRef())
            this.formRefsPunishment[i]=(React.createRef())
            let cur=data[i];
            console.log(cur)
            collapses.push(
                <Collapse.Panel header={cur.newOne?<> {cur.year} - {cur.year+1} 学年度 <EditOutlined /></>:`${cur.year} - ${cur.year+1} 学年度`} key={i}>
                    <Divider orientation="left"><SolutionOutlined /> 基本分数</Divider>
                    <Card>
                        <Form
                            ref={this.formRefs[i]}
                            layout="vertical"
                            onFinish={(msg)=>{
                                this.setState({
                                    submitLoading:true
                                })
                                reqwest({
                                    url:`/api/1.0/points/${this.state.teacherId}/in/${cur.year}`,
                                    method:'POST',
                                    data:msg,
                                }).then((resp)=>{
                                    message.success(`已保存 ${cur.year} - ${cur.year+1} 学年度的基本分数。`)
                                    this.setState({
                                        submitLoading:false
                                    })
                                },(err)=>{
                                    this.setState({
                                        submitLoading:false
                                    })
                                    handleErr(err)
                                })
                            }}
                            initialValues={cur}
                        >
                            <Row gutter={24}>
                                <Col span={12}>
                                    <Form.Item
                                        label="岗位职责加分"
                                        required
                                    >
                                        <Form.Item
                                            name="positionPoints"
                                            rules={[{ required: true, message: '输入岗位职责加分' },
                                                {type:'number',message:'加分必须是数字'},{
                                                    min:0,message:'加分不能为负数',type:'number'
                                                }
                                            ]}
                                            noStyle
                                        >
                                            <InputNumber
                                                style={{
                                                    width:200
                                                }}
                                                placeholder="输入岗位职责加分" />
                                        </Form.Item>
                                        <br/>

                                        <>
                                            {prompt.positionPoints.map((val,ind)=>{
                                                return (<Tag key={'promptA'+ind} style={tagStyle}
                                                             onClick={()=>{
                                                                 this.formRefs[i].current.setFieldsValue({
                                                                     positionPoints:promptPoints.positionPoints[ind]
                                                                 })
                                                             }}>
                                                    {val}
                                                </Tag>)
                                            })}
                                        </>
                                    </Form.Item>

                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="师德师风加分"
                                        required
                                    >
                                        <Form.Item
                                            name="moralityPoints"
                                            rules={[{ required: true, message: '输入师德师风加分' },
                                                {type:'number',message:'加分必须是数字'},{
                                                    min:0,message:'加分不能为负数',type:'number'
                                                }]}
                                            noStyle
                                        >
                                            <InputNumber
                                                style={{
                                                    width:200
                                                }}
                                                placeholder="输入师德师风加分" />
                                        </Form.Item>
                                        <br/>
                                        <>
                                            {prompt.moralityPoints.map((val,ind)=>{
                                                return (<Tag key={'promptA'+ind} style={tagStyle}
                                                             onClick={()=>{
                                                                 this.formRefs[i].current.setFieldsValue({
                                                                     moralityPoints:promptPoints.moralityPoints[ind]
                                                                 })
                                                             }}>
                                                    {val}
                                                </Tag>)
                                            })}
                                        </>
                                    </Form.Item>

                                </Col>
                            </Row>

                            <Row gutter={24}>
                                <Col span={12}>
                                    <Form.Item
                                        label="考核加分"
                                        required
                                    >
                                        <Form.Item
                                            noStyle
                                        >
                                            <Input.Group
                                                compact className={'site-input-group-wrapper'}
                                            >
                                                <Form.Item
                                                    name="assessmentPoints1"
                                                    noStyle
                                                >
                                                    <InputNumber
                                                        className="site-input-left"
                                                        style={{
                                                            width:'20%',
                                                            textAlign: 'center'
                                                        }}
                                                        onChange={(value)=>{
                                                            this.formRefs[i].current.setFieldsValue({
                                                                assessmentPoints1:value,
                                                                assessmentPoints:
                                                                    (value+
                                                                    (this.formRefs[i].current.getFieldsValue()['assessmentPoints2']||0)).toFixed(1)
                                                            })
                                                        }}
                                                        placeholder="上学期" />
                                                </Form.Item>
                                                <Input
                                                    className="site-input-split"
                                                    style={{
                                                        width: 40,
                                                        borderLeft: 0,
                                                        borderRight: 0,
                                                        pointerEvents: 'none',
                                                    }}
                                                    placeholder="+"
                                                    disabled
                                                />
                                                <Form.Item
                                                    name="assessmentPoints2"
                                                    noStyle
                                                >
                                                    <InputNumber
                                                        className="site-input-left site-input-right"
                                                        style={{
                                                            width:'20%',textAlign: 'center'
                                                        }}
                                                        onChange={(value)=>{
                                                            this.formRefs[i].current.setFieldsValue({
                                                                assessmentPoints2:value,
                                                                assessmentPoints:
                                                                    (value+
                                                                    (this.formRefs[i].current.getFieldsValue()['assessmentPoints1']||0)).toFixed(1)
                                                            })
                                                        }}
                                                        placeholder="下学期" />
                                                </Form.Item>
                                                <Input
                                                    className="site-input-split"
                                                    style={{
                                                        width: 40,
                                                        borderLeft: 0,
                                                        borderRight: 0,
                                                        pointerEvents: 'none',
                                                    }}
                                                    placeholder="="
                                                    disabled
                                                />
                                                <Form.Item
                                                    name="assessmentPoints"
                                                    rules={[{ required: true, message: '请输入考核加分' },{
                                                        min:0,message:'加分不能为负数',type:'number',transform(value) {
                                                            return Number(value)||0;
                                                        }
                                                    },
                                                        {type:'number',message:'加分必须是数字',transform(value) {
                                                        return Number(value)||0;
                                                    },}]}
                                                    noStyle
                                                >
                                                    <Input
                                                        className="site-input-right"
                                                        style={{
                                                            width: '20%',
                                                        }}
                                                        placeholder="输入考核得分"
                                                    />
                                                </Form.Item>

                                            </Input.Group>

                                        </Form.Item>

                                        <>
                                            <Tag style={tagStyle} color={'blue'}>上学期名次：</Tag>
                                            {prompt.assessmentPoints.map((val,ind)=>{
                                                return (<Tag key={'promptA'+ind} style={tagStyle}
                                                             onClick={()=>{
                                                                 this.formRefs[i].current.setFieldsValue({
                                                                     assessmentPoints1:promptPoints.assessmentPoints[ind],
                                                                     assessmentPoints:
                                                                         (promptPoints.assessmentPoints[ind]+
                                                                         (this.formRefs[i].current.getFieldsValue()['assessmentPoints2']||0)).toFixed(1)
                                                                 })
                                                             }}>
                                                    {val}
                                                </Tag>)
                                            })}
                                        </><>
                                        <Tag style={tagStyle} color={'blue'} >下学期名次：</Tag>
                                        {prompt.assessmentPoints.map((val,ind)=>{
                                            return (<Tag key={'promptA'+ind} style={tagStyle}
                                                         onClick={()=>{
                                                             this.formRefs[i].current.setFieldsValue({
                                                                 assessmentPoints2:promptPoints.assessmentPoints[ind],
                                                                 assessmentPoints:
                                                                     (promptPoints.assessmentPoints[ind]+
                                                                     (this.formRefs[i].current.getFieldsValue()['assessmentPoints1']||0)).toFixed(1)
                                                             })
                                                         }}>
                                                {val}
                                            </Tag>)
                                        })}
                                    </>
                                    </Form.Item>

                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="工作量加分"
                                        required
                                    >
                                        <Form.Item
                                            name="workloadPoints"
                                            rules={[{ required: true, message: '输入工作量加分' },
                                                {type:'number',message:'加分必须是数字'},{
                                                    min:0,message:'加分不能为负数',type:'number'
                                                }]}
                                            noStyle
                                        >
                                            <InputNumber
                                                style={{
                                                    width:200
                                                }}
                                                placeholder="输入工作量加分" />
                                        </Form.Item>
                                        <br/>

                                        <>
                                            {prompt.workloadPoints.map((val,ind)=>{
                                                return (<Tag key={'promptA'+ind} style={tagStyle}
                                                             onClick={()=>{
                                                                 this.formRefs[i].current.setFieldsValue({
                                                                     workloadPoints:promptPoints.workloadPoints[ind]
                                                                 })
                                                             }}>
                                                    {val}
                                                </Tag>)
                                            })}
                                        </>
                                    </Form.Item>

                                </Col>
                            </Row>

                            <Form.Item>
                                <Button type="primary" loading={this.state.submitLoading} htmlType="submit">提交</Button>
                            </Form.Item>
                        </Form>
                    </Card>
                    <Divider orientation="left"><SmileOutlined /> 工作业绩、学术成果</Divider>
                    <Card>
                        <Form
                            ref={this.formRefsPerformance[i]}
                            initialValues={{
                                fake:cur.performances
                            }}
                        >
                            <Form.List
                                name={'fake'}
                            >
                                {(fields, { add, remove }) => {
                                    return (
                                        <div>
                                            {fields.map(field => (
                                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                                    <Form.Item
                                                        name={[field.name, 'title']}
                                                        fieldKey={[field.fieldKey,'title']}
                                                        rules={[{ required: true, message: '请输入标题' }]}
                                                    >
                                                        <Input placeholder="标题" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[field.name, 'type']}
                                                        fieldKey={[field.fieldKey,'type']}
                                                        rules={[{ required: true, message: '请选择类别' }]}
                                                    >
                                                        <Radio.Group buttonStyle="solid">
                                                            <Radio.Button value={1}>工作业绩</Radio.Button>
                                                            <Radio.Button value={2}>学术成果</Radio.Button>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[field.name, 'level']}
                                                        fieldKey={[field.fieldKey,'level']}
                                                        rules={[{ required: true, message: '请输入等级' }]}
                                                    >
                                                        <AutoComplete
                                                            placeholder="等级"
                                                            options={[
                                                                {value:'国家级'},
                                                                {value:'省级'},
                                                                {value:'市级（含省厅）'},
                                                                {value:'区级（含市局）'},
                                                                {value:'区师校'},
                                                                {value:'集团活动荣誉'},
                                                                {value:'校级'},
                                                            ]}
                                                            style={{ width: 150 }}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item
                                                        label={'加分'}
                                                        name={[field.name, 'points']}
                                                        fieldKey={[field.fieldKey,'points']}
                                                        rules={[{ required: true, message: '请输入加分' },
                                                            {type:'number',message:'加分必须是数字'},{
                                                                min:0,message:'加分不能为负数',type:'number'
                                                            }]}
                                                    >
                                                        <InputNumber
                                                            style={{ width: 70 }}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Space>
                                                            <Divider type="vertical" />
                                                            <Button
                                                                onClick={()=>{
                                                                    this.formRefsPerformance[i].current.validateFields([
                                                                        ['fake', field.name, 'title'],
                                                                        ['fake', field.name, 'points'],
                                                                        ['fake', field.name, 'level'],
                                                                        ['fake', field.name, 'type'],
                                                                    ])
                                                                        .then(()=>{
                                                                            let fakeData=(this.formRefsPerformance[i].current.getFieldsValue().fake)
                                                                            let perfData=(fakeData[field.name])
                                                                            let reqwestObj;
                                                                            if (perfData.id){
                                                                                reqwestObj={
                                                                                    url:'/api/1.0/performances/'+perfData.id,
                                                                                    method:'POST',
                                                                                    data:{
                                                                                        _method:'PUT',
                                                                                        ...perfData,
                                                                                        teacher_basic_id:this.state.teacherId,
                                                                                        year:cur.year
                                                                                    },
                                                                                    type:'json'
                                                                                }
                                                                            }else{
                                                                                reqwestObj={
                                                                                    url:'/api/1.0/performances/',
                                                                                    method:'POST',
                                                                                    data:{
                                                                                        ...perfData,
                                                                                        teacher_basic_id:this.state.teacherId,
                                                                                        year:cur.year
                                                                                    },
                                                                                    type:'json'
                                                                                }
                                                                            }
                                                                            let submitLoading=message.loading('提交中...')
                                                                            reqwest(reqwestObj).then((msg)=>{
                                                                                submitLoading()
                                                                                setTimeout(()=>
                                                                                    message.success('更新成功！'),500)
                                                                                //this.handleRefresh()
                                                                                fakeData[field.name].id=msg.newID
                                                                                //console.log(fakeData[field.name])
                                                                                this.formRefsPerformance[i].current.setFieldsValue({
                                                                                    fake:fakeData
                                                                                })
                                                                            },(err)=>{
                                                                                submitLoading()
                                                                                handleErr(err)
                                                                            })

                                                                        })
                                                                }}
                                                                shape="circle"
                                                                icon={<CheckOutlined />}
                                                                type='primary'
                                                                size={'small'}
                                                            />
                                                            <Popconfirm
                                                                title="确定要删除这条记录吗？"
                                                                onConfirm={()=>{
                                                                    let perfData=(this.formRefsPerformance[i].current.getFieldsValue().fake[field.name])
                                                                    let reqwestObj;
                                                                    if (perfData.id){
                                                                        reqwestObj={
                                                                            url:'/api/1.0/performances/'+perfData.id,
                                                                            method:'POST',
                                                                            data:{
                                                                                _method:'DELETE',
                                                                            },
                                                                            type:'json'
                                                                        }
                                                                        let submitLoading=message.loading('删除中...')
                                                                        reqwest(reqwestObj).then((msg)=>{
                                                                            submitLoading()
                                                                            setTimeout(()=>
                                                                                message.success('删除成功！'),500)

                                                                        },(err)=>{
                                                                            submitLoading()
                                                                            handleErr(err)
                                                                        })

                                                                        remove(field.name);
                                                                    }else{

                                                                        remove(field.name);
                                                                    }

                                                                }}
                                                                //okText="确定"
                                                                //cancelText="取消"
                                                            >
                                                                <Button  danger
                                                                         shape="circle"
                                                                         size={'small'}
                                                                         icon={<CloseOutlined />}
                                                                />
                                                            </Popconfirm>
                                                        </Space>
                                                    </Form.Item>

                                                </Space>
                                            ))}

                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => {
                                                        add();
                                                    }}
                                                    block
                                                >
                                                    <PlusOutlined /> 增加一条记录
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    );
                                }}
                            </Form.List>
                        </Form></Card>


                    <Divider orientation="left"><FrownOutlined /> 惩罚</Divider>
                    <Card>
                        <Form
                            ref={this.formRefsPunishment[i]}
                            initialValues={{
                                fakePunishments:cur.punishments
                            }}
                        >
                            <Form.List
                                name={'fakePunishments'}
                            >
                                {(fields, { add, remove }) => {
                                    return (
                                        <>
                                            {fields.map(field => (
                                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                                    <Form.Item
                                                        name={[field.name, 'description']}
                                                        fieldKey={[field.fieldKey,'description']}
                                                        rules={[{ required: true, message: '请输入惩罚描述' }]}
                                                    >
                                                        <Input placeholder="惩罚描述" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={[field.name, 'type']}
                                                        fieldKey={[field.fieldKey,'type']}
                                                        rules={[{ required: true, message: '请选择类别' }]}
                                                    >
                                                        <Select style={{
                                                            width:150
                                                        }}
                                                                placeholder={'惩罚类别'}
                                                        >
                                                            <Select.Option value={1}>师德师风</Select.Option>
                                                            <Select.Option value={2}>无故漏岗</Select.Option>
                                                            <Select.Option value={3}>学术不端</Select.Option>
                                                            <Select.Option value={4}>病事假超 2 个月</Select.Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        label={'惩罚年限'}
                                                        name={[field.name, 'penaltyYears']}
                                                        fieldKey={[field.fieldKey,'penaltyYears']}
                                                        rules={[{ required: true, message: '请输入惩罚年限' },{
                                                            min:0,message:'年限不能为负数',type:'number'
                                                        },{
                                                            type:'number',message:'年限必须是数字'
                                                        }]}
                                                    >
                                                        <InputNumber
                                                            style={{ width: 70 }}
                                                        />
                                                    </Form.Item>

                                                    <Form.Item
                                                        label={'扣分'}
                                                        name={[field.name, 'points']}
                                                        fieldKey={[field.fieldKey,'points']}
                                                        rules={[{ required: true, message: '请输入扣分' },
                                                            {type:'number',message:'扣分必须是数字'},{
                                                            min:0,message:'请直接输入扣除分数的绝对值',type:'number'
                                                            }]}
                                                    >
                                                        <InputNumber
                                                            style={{ width: 70 }}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Space>

                                                            <Divider type="vertical" />
                                                            <Button
                                                                onClick={()=>{
                                                                    this.formRefsPunishment[i].current.validateFields([
                                                                        ['fakePunishments', field.name, 'description'],
                                                                        ['fakePunishments', field.name, 'points'],
                                                                        ['fakePunishments', field.name, 'penaltyYears'],
                                                                        ['fakePunishments', field.name, 'type'],

                                                                    ])
                                                                        .then(()=>{
                                                                            let fakePunishmentsData=(this.formRefsPunishment[i].current.getFieldsValue().fakePunishments)
                                                                            let perfData=(fakePunishmentsData[field.name])
                                                                            let reqwestObj;
                                                                            if (perfData.id){
                                                                                reqwestObj={
                                                                                    url:'/api/1.0/punishments/'+perfData.id,
                                                                                    method:'POST',
                                                                                    data:{
                                                                                        _method:'PUT',
                                                                                        ...perfData,
                                                                                        teacher_basic_id:this.state.teacherId,
                                                                                        year:cur.year
                                                                                    },
                                                                                    type:'json'
                                                                                }
                                                                            }else{
                                                                                reqwestObj={
                                                                                    url:'/api/1.0/punishments/',
                                                                                    method:'POST',
                                                                                    data:{
                                                                                        ...perfData,
                                                                                        teacher_basic_id:this.state.teacherId,
                                                                                        year:cur.year
                                                                                    },
                                                                                    type:'json'
                                                                                }
                                                                            }
                                                                            let submitLoading=message.loading('提交中...')
                                                                            reqwest(reqwestObj).then((msg)=>{
                                                                                submitLoading()
                                                                                setTimeout(()=>
                                                                                    message.success('更新成功！'),500)
                                                                                //this.handleRefresh()
                                                                                fakePunishmentsData[field.name].id=msg.newID
                                                                                console.log(fakePunishmentsData[field.name])
                                                                                this.formRefsPunishment[i].current.setFieldsValue({
                                                                                    fakePunishments:fakePunishmentsData
                                                                                })
                                                                            },(err)=>{
                                                                                submitLoading()
                                                                                handleErr(err)
                                                                            })

                                                                        })

                                                                }}
                                                                shape="circle"
                                                                icon={<CheckOutlined />}
                                                                size={'small'}
                                                                type={'primary'}
                                                            />
                                                            <Popconfirm
                                                                title="确定要删除这条记录吗？"

                                                                onConfirm={()=>{
                                                                    let perfData=(this.formRefsPunishment[i].current.getFieldsValue().fakePunishments[field.name])
                                                                    let reqwestObj;
                                                                    if (perfData.id){
                                                                        reqwestObj={
                                                                            url:'/api/1.0/punishments/'+perfData.id,
                                                                            method:'POST',
                                                                            data:{
                                                                                _method:'DELETE',
                                                                            },
                                                                            type:'json'
                                                                        }
                                                                        let submitLoading=message.loading('删除中...')
                                                                        reqwest(reqwestObj).then((msg)=>{
                                                                            submitLoading()
                                                                            setTimeout(()=>
                                                                                message.success('删除成功！'),500)

                                                                        },(err)=>{
                                                                            submitLoading()
                                                                            handleErr(err)
                                                                        })

                                                                        remove(field.name);
                                                                    }else{

                                                                        remove(field.name);
                                                                    }

                                                                }}
                                                                //okText="确定"
                                                                //cancelText="取消"
                                                            >
                                                                <Button  danger
                                                                         shape="circle"
                                                                         icon={<CloseOutlined />}
                                                                         size={'small'}
                                                                />
                                                            </Popconfirm>
                                                        </Space>
                                                    </Form.Item>


                                                </Space>
                                            ))}

                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => {
                                                        add();
                                                    }}
                                                    block
                                                >
                                                    <PlusOutlined /> 增加一条记录
                                                </Button>
                                            </Form.Item>
                                        </>
                                    );
                                }}
                            </Form.List>
                        </Form></Card>


                </Collapse.Panel>
            )
        }
        let outerCollapse
        if (data.length===0){
            outerCollapse=(<Empty description='暂时没有数据，请点击下方按钮添加'/>)
        }else{

            outerCollapse=(<Collapse
                style={{
                    width:'100%',
                }}
                onChange={(data)=>{
                    this.setState({
                        activeKey:data
                    })
                }}
                activeKey={this.state.activeKey}>
                {collapses}
            </Collapse>)
        }

        return(
            <Space direction="vertical"
                   style={{
                       width:'100%'
                   }}
                   size={'middle'}
            >
                <PageHeader
                    onBack={() => window.history.back()}
                    size='small'
                    title={
                        <>
                            <FormOutlined /> 修改分数
                        </>
                    }
                    className={'site-page-header'}
                >
                    <Skeleton
                        active
                        loading={this.state.infoLoading}
                    >
                        <Descriptions title="教师基本信息">
                            <Descriptions.Item label={
                                <>
                                    <UserOutlined /> 姓名
                                </>
                            }>{this.state.teacherData.name}</Descriptions.Item>
                            <Descriptions.Item label={
                                <>
                                    <ApartmentOutlined /> 岗位
                                </>
                            }>{['','领导','考试学科任课教师','非考试学科任课教师','教辅'][this.state.teacherData.group]}</Descriptions.Item>
                            <Descriptions.Item label={
                                <>
                                    <StockOutlined /> 职级
                                </>
                            }>{
                                <Tag color={['','green','orange','red','purple','geekblue'][this.state.teacherData.rank]}>{
                                    ['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][this.state.teacherData.rank]}
                                </Tag>}
                            </Descriptions.Item>
                            <Descriptions.Item label={
                                <>
                                    <CalendarOutlined /> 参加工作、职级评选年份
                                </>
                            }>{this.state.teacherData.fromYear} 年</Descriptions.Item>
                            <Descriptions.Item label={
                                <>
                                    <IdcardOutlined /> 身份证号
                                </>
                            }>{this.state.teacherData.IDNum}</Descriptions.Item>
                            <Descriptions.Item label={
                                <>
                                    <IdcardOutlined /> 数据状态
                                </>
                            }>
                                {(()=>{
                                    let value=this.state.teacherData.metaData;
                                    console.log(this.state)
                                    return value.err?
                                        <Popover key={value.id} content={
                                            (()=>{
                                                let val=value.errYears.map((year)=><p key={value.id+''+year}>{year} - {year+1} 学年度</p>)
                                                let len=val.length
                                                if (!len){
                                                    return '教师参加工作、职级评选年份设置有误。'
                                                }
                                                if (len>=4){
                                                    val=val.slice(0,3)
                                                    val.push(<p key={value.id+'...'}>等 {len} 条数据</p>)
                                                }
                                                return val
                                            })()
                                        } title="缺失的数据：">
                                            <Badge status="error" text="数据不全，需要补充" />
                                        </Popover>
                                        :
                                        <Badge status="success" text="数据完整" />

                                })()}
                            </Descriptions.Item>
                        </Descriptions>

                    </Skeleton>
                </PageHeader>
                <Spin
                    spinning={this.state.spinning}
                >
                    {outerCollapse}
                </Spin>

                <Space direction='horizontal'>
                    创建新学年数据：
                    <DatePicker
                        onChange={(value)=>{
                            this.setState({
                                newYear:value.year()
                            })

                        }} defaultValue={
                        moment()
                    }
                        picker="year"
                        style={{width:80}}
                        allowClear={false}
                    />
                    {` - ${this.state.newYear+1} 学年度 `}
                    <Button
                        type="dashed"
                        onClick={() => {
                            for(let i in this.state.data){
                                if(this.state.data[i].year===this.state.newYear){
                                    message.warning(`已经存在 ${this.state.newYear} 年的得分数据，直接修改即可。`)
                                    return
                                }
                            }
                            let newData=this.state.data;
                            newData.push({
                                year:this.state.newYear,
                                newOne:true
                            })
                            this.setState({
                                data:newData,
                                activeKey:[...this.state.activeKey,newData.length-1]
                            })
                        }}
                    ><PlusOutlined />创建</Button>
                </Space>
            </Space>
        )
    }

}

export default PointsEditForm;
