window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul = focus.querySelector('ul');
	var focusWidth = focus.offsetWidth;
	var num = 0;
	var ol = focus.querySelector('ol');
	var flag = true;
	var timer = setInterval(function(){
		num ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
	},2000)
	ul.addEventListener('transitionend',function() {
		flag = true;
		if(num == ul.children.length - 2) {
			num = 0;
			ul.style.transition = 'none';
			ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
		}
		if(num < 0) {
			num = 2;
			ul.style.transition = 'none';
			ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
		}
		ol.querySelector('li.current').classList.remove('current');
		ol.children[num].classList.add('current');
	})
	var startX = 0;
	var moveX = 0;
	ul.addEventListener('touchstart',function(e) {
		 startX = e.targetTouches[0].pageX;
		 clearInterval(timer);
		 timer = null;
	})
	ul.addEventListener('touchmove',function(e) {
		if(flag) {
			 moveX = e.targetTouches[0].pageX - startX;
		 e.preventDefault();
		ul.style.transition = 'none';
		ul.style.transform = 'translateX(' + (-num * focusWidth + moveX) +'px)';
		}
	})
	ul.addEventListener('touchend',function() {
		flag = false;
		if(Math.abs(moveX) >= 50) {
			if(moveX > 0) {
				num --;
				ul.style.transition = 'all .3s';
				ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
			}else if(moveX < 0) {
				num ++;
				ul.style.transition = 'all .3s';
				ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
			}
		}
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
		timer = setInterval(function(){
		num ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-num * focusWidth) +'px)';
	},2000)
	})
	var goBack = document.querySelector('.goBack');
	var nav = document.querySelector('nav');
	window.addEventListener('scroll',function() {
		if(window.pageYOffset > nav.offsetTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
	})
	goBack.addEventListener('click',function() {
		window.scroll(0,0);
	})
})