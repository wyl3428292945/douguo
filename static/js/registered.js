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
window.onload = function(){
    axios.get()
}
tel.onblur = function(){
    this.removeAttribute("style");
    this.nextElementSibling.style.visibility = 'visible'
    if(!this.value){
        this.nextElementSibling.style.background=""
        this.nextElementSibling.innerHTML = '请输入手机号'
    }else if(!telRE.test(this.value)){
        this.nextElementSibling.style.background=""
        this.nextElementSibling.innerHTML = '手机号格式错误'
    }else{
        this.nextElementSibling.innerHTML=""
        this.nextElementSibling.style.background = "url('./images/loicon.png') no-repeat -2px -21px";
    }
}
// user.onblur = function(){
//     this.removeAttribute("style");
//     this.nextElementSibling.style.visibility = 'visible'
//     if(!this.value){
//         this.nextElementSibling.innerHTML = ''
//     }
// }

