import {message} from "antd";

function handleErr(err,login=0){

    if(err.status===500){
        message.error('服务器错误，请重试或联系系统管理员。')
    }else if(err.status===503){
        message.error('服务器正在维护，请稍后重试。')
    }else if(err.status===422){
        if (login===1){
            message.error('登陆失败。')
        }else if(login===2){
            let errs=JSON.parse(err.response).errors
            if (errs){
                for (let errTxt in errs){
                    message.error(errs[errTxt])
                }
            }
            if (errs.length===0) message.error('数据不合法。')
        }else{
            message.error('数据不合法。')
        }
    }else if(err.status===429){
        if (login){
            message.error('尝试登陆次数过多，请稍后重试。')
        }else{
            message.error('请求次数过多，请稍后重试。')
        }
    }else if(err.status===401){
        message.error('没有权限，请尝试重新登陆。')
    }else if(err.status===200){
        //window.location.replace(err.responseURL);
        message.warning('请先退出当前账号。')
    }else{
        message.error(JSON.parse(err.response).message)
    }
}

export {handleErr};
