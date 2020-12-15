var ipt = document.querySelectorAll('.form input')
var hint = document.querySelectorAll('.hint')
var test = document.querySelectorAll('.test')
var tel = document.getElementById('tel')
var user = document.getElementById('user')
var pwd = document.getElementById('pwd')
var confirm = document.getElementById('confirm')
var level = document.querySelectorAll('.level span')
var b = document.querySelectorAll('.checklist b')
var pwdHidden = document.querySelector('.pwd-hidden')
var telRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
var pwdRE = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/
var pwdRE1 = /[0-9]+|([a-z]+)|([^%&',;=?$\x22]+)/
var pwdRE2 = /^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{6,}$/
ipt.forEach((item,index)=>{
    item.onfocus = function(){
        item.style.borderColor = 'skyblue'
        item.style.boxShadow = '0 0 3px skyblue'
        hint[index].style.visibility = 'visible'
        if(index==2){
            pwdHidden.style.display = 'block'
        }
    }
})
tel.onblur = function(){
    tel.removeAttribute("style");
    tel.nextElementSibling.style.visibility = 'visible'
    axios.get('http://localhost:3000/tel?tel='+tel.value).then(res=>{
        if(res.data[0]){
            tel.nextElementSibling.style.background=""
            tel.nextElementSibling.innerHTML = '手机号已被使用'
        }else if(!tel.value){
            tel.nextElementSibling.style.background=""
            tel.nextElementSibling.innerHTML = '请输入手机号'
        }else if(!telRE.test(tel.value)){
            tel.nextElementSibling.style.background=""
            tel.nextElementSibling.innerHTML = '手机号格式错误'
        }else{
            tel.nextElementSibling.innerHTML=""
            tel.nextElementSibling.style.background = "url('./images/loicon.png') no-repeat -2px -21px";
        }
    }).catch(err=>{
        console.log(err);
    })
}
user.onblur = function(){
    user.removeAttribute("style");
    user.nextElementSibling.style.visibility = 'visible'
    axios.get('http://localhost:3000/user?user='+user.value).then(res=>{
        if(res.data[0]){
            user.nextElementSibling.style.background=""
            user.nextElementSibling.innerHTML = '昵称已存在'
        }else if(!user.value){
            user.nextElementSibling.style.background=""
            user.nextElementSibling.innerHTML = '请输入昵称'
        }else{
            user.nextElementSibling.innerHTML=""
            user.nextElementSibling.style.background = "url('./images/loicon.png') no-repeat -2px -21px";
        }
    }).catch(err=>{
        console.log(err);
    })
}
pwd.onblur = function(){
    pwdHidden.style.display = 'none'
    pwd.removeAttribute("style");
    pwd.nextElementSibling.style.visibility = 'visible'
    if(!pwd.value){
        pwd.nextElementSibling.style.background=""
        pwd.nextElementSibling.innerHTML = '请输入密码'
    }else if(!pwdRE.test(pwd.value)){
        pwd.nextElementSibling.style.background=""
        pwd.nextElementSibling.innerHTML = '密码不符合我们的要求'
    }else{
        pwd.nextElementSibling.innerHTML=""
        pwd.nextElementSibling.style.background = "url('./images/loicon.png') no-repeat -2px -21px";
    }
}
pwd.oninput = function(){
    if(pwd.value.length>20){
        pwd.value=pwd.value.slice(0,20)
    }else{
        if(pwd.value.length>=6){
            var x=1
            b[0].style.background = 'url("./images/1550215311.png") no-repeat 1px'
            b[0].style.backgroundSize = "13px"
        }else{
            var x=0
            b[0].style.background = 'url("./images/1550215325.png") no-repeat 1px'
            b[0].style.backgroundSize = "13px"
        }
        if(pwdRE1.test(pwd.value)){
            var y=1
            b[1].style.background = 'url("./images/1550215311.png") no-repeat 1px'
            b[1].style.backgroundSize = "13px"
        }else{
            var y=0
            b[1].style.background = 'url("./images/1550215325.png") no-repeat 1px'
            b[1].style.backgroundSize = "13px"
        }
        if(pwdRE.test(pwd.value)){
            var z=1
            b[2].style.background = 'url("./images/1550215311.png") no-repeat 1px'
            b[2].style.backgroundSize = "13px"
        }else{
            var z=0
            b[2].style.background = 'url("./images/1550215325.png") no-repeat 1px'
            b[2].style.backgroundSize = "13px"
        }
        if(pwdRE2.test(pwd.value)){
            var v=1
        }else{
            var v=0
        }
    }
    if(x+y+z+v == 1){
        for(var i=0;i<level.length;i++){
            level[i].style = ""
        }
        level[0].style.backgroundColor = 'red'
    }else if(x+y+z+v >= 2 && x+y+z+v <4){
        for(var i=0;i<level.length;i++){
            level[i].style = ""
        }
        level[0].style.backgroundColor = '#FFCB51'
        level[1].style.backgroundColor = '#FFCB51'
    }else if(x+y+z+v == 4){
        for(var i=0;i<level.length;i++){
            level[i].style.backgroundColor = '#7ED35A'
        }      
    }else if(x+y+z+v == 0){
        for(var i=0;i<level.length;i++){
            level[i].style = ""
            b[i].style = ""
        }
    }
}
confirm.onblur = function(){
    confirm.removeAttribute("style");
    confirm.nextElementSibling.style.visibility = 'visible'
    if(confirm.value != pwd.value){
        confirm.nextElementSibling.style.background=""
        confirm.nextElementSibling.innerHTML = '密码输入不一致'
    }else{
        confirm.nextElementSibling.innerHTML=""
        confirm.nextElementSibling.style.background = "url('./images/loicon.png') no-repeat -2px -21px";
    }
}
