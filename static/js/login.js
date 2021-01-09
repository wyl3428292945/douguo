var h2 = document.querySelectorAll('.right-top h2')
var log = document.querySelectorAll('.log')
var marsk = document.querySelector('.marsk')
var testCode = document.querySelector('.test-code')
var rdCode = document.querySelector('.rd-code')
var mskIpt = document.querySelector('.msk-ipt')
var marP = document.querySelector('.mar-con p')
var prompt = document.getElementById("prompt")
var tel = document.querySelector('.tel')
var agIpt = document.querySelector('.ag-ipt')
var tel2 = document.querySelector('.tel2')
var prompt2 = document.getElementById("prompt2")
var pwd = document.getElementById('pwd')
var agIpt2 = document.querySelector('.ag-ipt2')
var hide = document.getElementById('hide')
var open = document.getElementById('open')
var telRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
h2.forEach((item,index)=>{
    item.onclick = function(){
        for(var i=0;i<h2.length;i++){
            h2[i].classList.remove('active')
            log[i].classList.remove('log-active')
        }
        item.classList.add('active')
        log[index].classList.add('log-active')   
    }
})
function getCode(){
    if(telRE.test(tel.value)){
        marsk.style.display = 'block'
        rdCode.innerHTML = random(1000,9999)
    }else{
        prompt.innerHTML="请输入正确的手机号码"
    }
}
function random(a,b){
    return Math.floor(Math.random()*(b-a+1)+a)
}
function del(){
    if(event.target.className=='marsk'){
        marsk.style.display = 'none'
        testCode.value = ""
        mskIpt.value = ""
        marP.innerHTML = "请输入验证码"
    }
    if(event.target.className=='msk-btn'){
        if(rdCode.innerHTML != mskIpt.value){
            marP.innerHTML = "输入验证码错误"
        }else{
            marsk.style.display = 'none'
            testCode.value = mskIpt.value
        }
    }
}
function submit(){
    if(tel.value==""){
        tel.placeholder="请输入手机号"
        tel.classList.add("ph-style")
    }else if(testCode.value==""){
        testCode.placeholder="请输入验证码"
        testCode.classList.add("ph-style")
    }else if(testCode.value!=rdCode.innerHTML){
        prompt.innerHTML="验证码填写错误"
    }else if(!agIpt.checked){
        prompt.innerHTML="请先同意豆果美食使用协议"
    }else{
        prompt.innerHTML=""
    }
    if(testCode.value==rdCode.innerHTML && tel.value && agIpt.checked){
        axios.get("http://localhost:3000/tel?tel="+tel.value).then(res=>{
            if(res.data[0]){
                // var d = new Date()
                // d.setTime(d.getTime() + 15 * 60 * 1000)
                // document.cookie = `username=${res.data[0].username};expires=${d}`
                localStorage.username = res.data[0].username
                window.location.href = "./index.html"
            }else{
                alert("当前手机号尚未注册")
                window.location.href = "./registered.html"
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
function submit2(){
    if(tel2.value==""){
        tel2.placeholder="请输入手机号"
        tel2.classList.add("ph-style")
    }else if(!telRE.test(tel2.value)){
        prompt2.innerHTML="请输入正确的手机号"
    }else if(pwd.value==""){
        pwd.placeholder="请输入密码"
        pwd.classList.add("ph-style")
    }else if(!agIpt2.checked){
        prompt2.innerHTML="请先同意豆果美食使用协议"
    }else{
        axios.post("http://localhost:3000/login",{
            tel: tel2.value,
            pwd: pwd.value
        }).then(res=>{
            if(!res.data.length){
                prompt2.innerHTML = "账号不正确"
            }else{
                // var d = new Date()
                // d.setTime(d.getTime() + 15 * 60 * 1000)
                // document.cookie = `username=${res.data[0].username};expires=${d}`//谷歌浏览器不能在本地情况下添加cookie
                localStorage.username = res.data[0].username
                window.location.href = './index.html'
            }
        }).catch(err=>{
            console.log(err);
        })
    }
}
hide.onclick = function(e){
    e.target.style.display = "none"
    e.target.nextElementSibling.style.display = "block"
    pwd.type = "text"
}
open.onclick = function(e){
    e.target.style.display = "none"
    e.target.previousElementSibling.style.display = "block"
    pwd.type = "password"
}