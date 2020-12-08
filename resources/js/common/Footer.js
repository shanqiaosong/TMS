
import React from 'react';
import {Layout} from 'antd'
const {Footer} = Layout
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

function MyFooter(){
    return (
        <Footer style={{ opacity:0.5, textAlign: 'center' }}>
            <div>TMSys. ©2020 Created by Qiaosong with <HeartTwoTone twoToneColor="#db5860" /></div>
            <div class="credit" style={{
                color:'rgba(0, 0, 0, 0.85)'
            }}>
                <a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802030947" style={{
                    color:'rgba(0, 0, 0, 0.85)'
                }} >
                    <img style={{
                        display:'inline-block',
                        position:'relative',
                    }} width="20px" height="20px" src="/img/beian.png"/> 京公网安备 11010802030947号</a>
                <a href="http://www.beian.miit.gov.cn" style={{
                    color:'rgba(0, 0, 0, 0.85)'
                }}> | 网站备案号: 辽ICP备20001609号-1 </a>
            </div>
        </Footer>
    )
}

export default MyFooter;
