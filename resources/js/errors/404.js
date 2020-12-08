import ReactDOM from 'react-dom';
import ErrNode from "./ErrNode";
import React from "react";
ReactDOM.render(
    <ErrNode
        status="404"
        title="404"
        subTitle="未找到此页面。"
    />,
    document.getElementById('root'),
);
