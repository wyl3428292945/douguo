var ipt = document.querySelectorAll('.form>div input')
var hint = document.querySelectorAll('.hint')
var test = document.querySelectorAll('.test')
var tel = document.getElementById('tel')
var user = document.getElementById('user')
var pwd = document.getElementById('pwd')
var confirm = document.getElementById('confirm')
var testCode = document.querySelector('.test-code')
var level = document.querySelectorAll('.level span')
var b = document.querySelectorAll('.checklist b')
var pwdHidden = document.querySelector('.pwd-hidden')
var marsk = document.querySelector('.marsk')
var rdCode = document.querySelector('.rd-code')
var mskIpt = document.querySelector('.msk-ipt')
var agIpt = document.querySelector('.ag-ipt')
var telRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
var pwdRE = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/
var pwdRE1 = /[0-9]+|([a-z]+)|([^%&',;=?$\x22]+)/
var pwdRE2 = /^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{6,}$/
ipt.forEach((item,index)=>{
    item.onfocus = function(){
        item.style.borderColor = 'skyblue'
        item.style.boxShadow = '0 0 3px skyblue'
        hint[index=index<4?index:0].style.visibility = 'visible'
        if(index==2){
            pwdHidden.style.display = 'block'
        }
    }
})
tel.onblur = function(){
    tel.removeAttribute("style");
    test[0].style.visibility = 'visible'
    axios.get('http://localhost:3000/tel?tel='+tel.value).then(res=>{
        if(res.data[0]){
            test[0].style.background=""
            test[0].innerHTML = '手机号已被使用'
        }else if(!tel.value){
            test[0].style.background=""
            test[0].innerHTML = '请输入手机号'
        }else if(!telRE.test(tel.value)){
            test[0].style.background=""
            test[0].innerHTML = '手机号格式错误'
        }else{
            test[0].innerHTML=""
            test[0].style.background = "url('./images/loicon.png') no-repeat -2px -21px";
        }
    }).catch(err=>{
        console.log(err);
    })
}
user.onblur = function(){
    user.removeAttribute("style");
    test[1].style.visibility = 'visible'
    axios.get('http://localhost:3000/user?user='+user.value).then(res=>{
        if(res.data[0]){
            test[1].style.background=""
            test[1].innerHTML = '昵称已存在'
        }else if(!user.value){
            test[1].style.background=""
            test[1].innerHTML = '请输入昵称'
        }else{
            test[1].innerHTML=""
            test[1].style.background = "url('./images/loicon.png') no-repeat -2px -21px";
        }
    }).catch(err=>{
        console.log(err);
    })
}
pwd.onblur = function(){
    pwdHidden.style.display = 'none'
    pwd.removeAttribute("style");
    test[2].style.visibility = 'visible'
    if(!pwd.value){
        test[2].style.background=""
        test[2].innerHTML = '请输入密码'
    }else if(!pwdRE.test(pwd.value)){
        test[2].style.background=""
        test[2].innerHTML = '密码不符合我们的要求'
    }else{
        test[2].innerHTML=""
        test[2].style.background = "url('./images/loicon.png') no-repeat -2px -21px";
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
    test[3].style.visibility = 'visible'
    if(confirm.value != pwd.value){
        test[3].style.background=""
        test[3].innerHTML = '密码输入不一致'
    }else{
        test[3].innerHTML=""
        test[3].style.background = "url('./images/loicon.png') no-repeat -2px -21px";
    }
}
function getCode(){
    marsk.style.display = 'block'
    rdCode.innerHTML = random(1000,9999)
}
function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}
function del(){
    if(event.target.className=='marsk'){
        marsk.style.display = 'none'
        testCode.value = ""
    }
    if(event.target.className=='msk-btn'){
        if(rdCode.innerHTML != mskIpt.value){
            alert('验证码输入错误，请重新输入！')
        }else{
            marsk.style.display = 'none'
            testCode.value = mskIpt.value
        }
    }
}
function submit(){
    var num=0;
    test[4].style.visibility = 'visible'
    for(var i=0;i<ipt.length;i++){
        if(ipt[i].value != "" && test[i].innerHTML==""){
            num++
            test[4].innerHTML = ""
        }else{
            if(ipt[i].innerHTML=="" && i==4){
                test[4].innerHTML = "请输入验证码"
            }else{
                test[4].innerHTML = test[i].innerHTML 
            }
            break 
        }
    }
    if(num==5){
        if(!agIpt.checked){
            alert('请阅读并同意相关协议')
        }else{
            var msg = {
                tel: tel.value,
                username: user.value,
                password: pwd.value,
            }
            axios.put('http://localhost:3000/msg/'+JSON.stringify(msg)).then(res => {
                alert(res.data);
                window.location.href = './login.html'
            }).catch(err => {
                console.log(err);
            })
        }
    }
}