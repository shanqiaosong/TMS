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
    Tooltip
} from "antd";
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
    IdcardOutlined
} from '@ant-design/icons';
import React from 'react';
import {handleErr} from "../helper";

class Explain extends React.Component{
    state={
        teacherData:null,
        infoLoading:true
    }
    componentDidMount() {
        reqwest({
            url:'/api/1.0/score/detail/'+this.props.resultID,
            type:'json'
        }).then((value)=>{
            console.log(value)
            this.setState({
                teacherData:value,
                infoLoading:false
            })
        },(err)=>{
            handleErr(err)
        })
    }

    render(){
        //return <p></p>
        if(!this.state.teacherData) return (
        <>
            <Skeleton loading={true} active={true}/>
        </>)
        let yearList=this.state.teacherData.detail.map((yearData)=>{
            let year=Object.keys(yearData)[0];
            let info=yearData[year].info;
            let kParam=yearData[year].kParam;
            return(
                <Card type="inner" title={`${year} - ${Number(year)+1} 学年度`} key={year}>
                    <Divider orientation="left"><SolutionOutlined /> 基本分数</Divider>
                    <Descriptions column={2}>
                        <Descriptions.Item label={
                            <>
                                岗位职责加分
                            </>
                        }><Text type="success">{info.detail.positionPoints}</Text></Descriptions.Item>
                        <Descriptions.Item label={
                            <>
                                师德师风加分
                            </>
                        }><Text type="success">{info.detail.moralityPoints}</Text></Descriptions.Item>
                        <Descriptions.Item label={
                            <>
                                考核加分
                            </>
                        }><Text type="success">{info.detail.assessmentPoints}</Text></Descriptions.Item>
                        <Descriptions.Item label={
                            <>
                                工作量加分
                            </>
                        }><Text type="success">{info.detail.workloadPoints}</Text></Descriptions.Item>
                        <Descriptions.Item label={
                            <>
                                工作资历加分
                            </>
                        }><Text type="success">{info.detail.qualificationPoints}</Text></Descriptions.Item>
                    </Descriptions>
                    {info.detail.performances.length ?(
                        <>
                            <Divider orientation="left"><SmileOutlined /> 工作业绩、学术成果</Divider>
                        <Paragraph>
                            <ol>
                                {
                                    info.detail.performances.map((performance)=>{
                                        return <li key={performance.id}>因 <Text strong>{performance.level}</Text> {performance.type===1?'工作业绩':'学术成果'}：“{performance.title}” 获得 <Text type="success">{performance.points}</Text> 分加分。</li>
                                    })
                                }
                            </ol>
                        </Paragraph>
                            </>
                    ):null}
                    {info.detail.punishments.length ?(
                        <>
                    <Divider orientation="left"><FrownOutlined /> 惩罚</Divider>
                    <Paragraph>
                        <ol>
                        {
                            info.detail.punishments.map((punishments)=>{
                                let reason=['','师德师风',
                                '无故漏岗',
                                '学术不端',
                                '病事假超 2 个月',][punishments.type]
                                return (
                                    <li key={punishments.id}>因 <Text strong>{reason}</Text> ：“{punishments.description}” 扣除 <Text type="danger">{punishments.points}</Text> 分。
                                    {punishments.penaltyYears?<>{punishments.penaltyYears} 年内不可晋升。</>:''}
                                    </li>)

                            })
                        }
                        </ol>
                    </Paragraph>
                        </>
                    ):null}
                    <Divider orientation="left"><SolutionOutlined /> 汇总</Divider>
                    <Paragraph>

                        <Text strong>年度汇总：</Text>
                        <Text strong><Tooltip title="权重">{kParam}</Tooltip> × ( </Text>
                        <Text type={'success'}>
                            <Tooltip title="岗位职责加分">{info.detail.positionPoints}</Tooltip>
                            <Text> + </Text>
                            <Tooltip title="师德师风加分">{info.detail.moralityPoints}</Tooltip>
                            <Text> + </Text>
                            <Tooltip title="考核加分">{info.detail.assessmentPoints}</Tooltip>
                            <Text> + </Text>
                            <Tooltip title="工作量加分">{info.detail.workloadPoints}</Tooltip>
                            <Text> + </Text>
                            <Tooltip title="工作资历加分">{info.detail.qualificationPoints}</Tooltip>
                            {info.detail.performances.map((value) => (
                                <Text key={value.id} type={'success'}> + <Tooltip title="工作业绩、学术成果加分">{value.points}</Tooltip></Text>
                            ))}
                        </Text>
                        <Text>
                            {info.detail.punishments.map((value) => (
                                <Text key={value.id} type={'danger'}> - <Tooltip title="惩罚扣分">{value.points}</Tooltip></Text>
                            ))}
                        </Text>
                        <Text strong>
                            <Text> ) = </Text>
                            <Tooltip title="年度总分">{kParam} × {info.totalPoint}</Tooltip>
                        </Text>
                    </Paragraph>
                    {
                        (info.resultInPenalty)?
                            <Alert
                                message="不可晋升"
                                description="由于本学年的惩罚，不可晋升。"
                                type="error"
                                showIcon
                            />:''
                    }
                </Card>
            )
        })
        return(
                <>
                    <PageHeader
                        onBack={this.props.onClose}
                        size='small'
                        title={
                            <>
                                {this.state.teacherData.year} 年分数解释
                            </>
                        }
                        className={'site-page-header'}
                    >
                        <Skeleton
                            active
                            loading={this.state.infoLoading}
                        >
                            <Descriptions column={2} title="教师基本信息">
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

                            </Descriptions>

                        </Skeleton>
                    </PageHeader>
                    <Space direction={'vertical'}>
                        {yearList}
                        <Card type="inner" title={'分数汇总'}>
                            <Paragraph>
                                <Text strong>
                                {
                                    this.state.teacherData.detail.map((yearData,index)=>{
                                        let year=Object.keys(yearData)[0];
                                        let info=yearData[year].info;
                                        let kParam=yearData[year].kParam;
                                        return(
                                            <Text key={year}>
                                                {index ? <Tooltip
                                                        title={`${year} - ${Number(year) + 1} 学年度`}> + ( {kParam} × {info.totalPoint} )</Tooltip> :
                                                    <Tooltip
                                                        title={`${year} - ${Number(year) + 1} 学年度`}>( {kParam} × {info.totalPoint} )</Tooltip>
                                                }
                                            </Text>
                                        )
                                    })
                                }
                                    <Text> = <Tooltip title={`总分`}>{this.state.teacherData.score}</Tooltip></Text>
                                </Text>
                            </Paragraph>
                        </Card>
                    </Space>
                </>
            )
    }
}

export default Explain
