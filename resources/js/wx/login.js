import {handleErr} from "../helper";

let login;

import reqwest from 'reqwest';
import Echo from 'laravel-echo';
import $ from 'jquery'

window.Pusher = require('pusher-js');


reqwest({
    url:'getCode',
    type:"json"
}).then((data)=>{
    $('#QRCode').attr('src','data:image/png;base64,'+data.img);
    // document.getElementById('QRCode').setAttribute('src','data:image/png;base64,'+data.img)
    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: 'pusher-key',
        wsHost: window.location.hostname,
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
    });

    window.Echo.private('login.'+data.code)
        .listen('DebugEvent', (e) => {
            console.log(e);
            // document.getElementById('QRCode').
            $('#QRCode').hide();
            $('#msg').html('login')
        });
},(err)=>{
    // handleErr(err)
    console.log(err)
})
