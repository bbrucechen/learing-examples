window.onload = function(){
    var tel = document.querySelector("#tel");
    var telreg = /^1[3|4|5|8]\d{9}$/;
    var qq = document.querySelector("#qq");
    var qqreg = /^[1-9]\d{5,}$/
    var nc = document.querySelector("#nc");
    var ncreg = /^[\u4e00-\u9fa5]{0,}$/;
    var msg = document.querySelector("#msg");
    var msgreg = /^\d{6}$/;
    var pwd = document.querySelector("#pwd");
    var surepwd = document.querySelector("#surepwd");
    check(tel,telreg);
    check(qq,qqreg);
    check(nc,ncreg);
    check(msg,msgreg);

    function check(obj,reg) {
        obj.onblur = function(){
            if(reg.test(this.value)) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>' + '输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>' + '输入正确';
        }
        }       
    }

    function checkpwd() {
        if(this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>' + '输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>' + '输入正确';
        }
    }
    surepwd.onblur = checkpwd;
}