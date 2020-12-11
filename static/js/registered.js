var ipt = document.querySelectorAll('.form input')
var hint = document.querySelectorAll('.hint')
var test = document.querySelectorAll('.test')
var tel = document.getElementById('tel')
var user = document.getElementById('user')
var pwd = document.getElementById('pwd')
var confirm = document.getElementById('confirm')
var telRE = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
ipt.forEach((item,index)=>{
    item.onfocus = function(){
        item.style.borderColor = 'skyblue'
        item.style.boxShadow = '0 0 3px skyblue'
        hint[index].style.visibility = 'visible'
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

