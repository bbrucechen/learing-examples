window.onload = function() {
    var tel = document.querySelector('#tel');
    var telreg = /^1[3485]\d{9}$/;
    var qq = document.querySelector('#qq');
    var qqreg = /^[1-9]\d{4,}$/;
    var nc = document.querySelector('#nc');
    var ncreg = /^[\u4e00-\u9fa5]{2,}$/;
    var msg = document.querySelector('#msg');
    var msgreg = /^\d{6}$/;
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var pwdreg = /^[\w-]{6,16}$/;

    check(tel,telreg);
    check(qq,qqreg);
    check(nc,ncreg);
    check(msg,msgreg);
    check(pwd,pwdreg);
    function check(input,reg) {
        input.onblur = function() {
            if(reg.test(input.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入格式错误';
            }
        }
    }
   function pwdequal(newtype,retype) {
    retype.onblur = function() {
        if(retype.value == newtype.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入错误';
        }
    }
   }
   pwdequal(pwd,surepwd);
}