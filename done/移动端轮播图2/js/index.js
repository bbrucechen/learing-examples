window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul = focus.children[0];
	var ol = focus.children[1];
	var focusWidth = focus.offsetWidth;
	var index = 0;
	var timer = setInterval(function() {
		index ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
	},2000)
	ul.addEventListener('transitionend',function() {
		if(index >= ul.children.length - 2) {
			index = 0;
			ul.style.transition = 'none';
			ul.style.transform=  'translateX(' + (-index * focusWidth) + 'px)';
		}
		if(index < 0) {
			index = ul.children.length - 2;
			ul.style.transition = 'none';
			ul.style.transform =  'translateX(' + (-index * focusWidth) + 'px)';
		}
		ol.querySelector('li.current').classList.remove('current');
		ol.children[index].classList.add('current');
	})
	var startX = 0;
	var moveX = 0;
	ul.addEventListener('touchstart',function(e) {
		startX = e.targetTouches[0].pageX;
		clearInterval(timer);
		timer = null;
	})
	ul.addEventListener('touchmove',function(e) {
		moveX = e.targetTouches[0].pageX - startX;
		ul.style.transition = 'none';
		ul.style.transform =  'translateX(' + (-index * focusWidth + moveX) + 'px)';
		e.preventDefault();
	})
	ul.addEventListener('touchend',function(e) {
		if(Math.abs(moveX) > 50) {
			if(moveX > 0) {
				index --;
				ul.style.transition = 'all .3s';
				ul.style.transform =  'translateX(' + (-index * focusWidth) + 'px)';
			} else {
				index ++;
				ul.style.transition = 'all .3s';
				ul.style.transform =  'translateX(' + (-index * focusWidth) + 'px)';
			}
		}
		ul.style.transition = 'all .3s';
		ul.style.transform =  'translateX(' + (-index * focusWidth) + 'px)';
		timer = setInterval(function() {
		index ++;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
	},2000)
	})
	var goBack = document.querySelector('.goBack');
	var nav = document.querySelector('nav');
	window.addEventListener('scroll',function() {
		if(window.pageYOffset >= nav.offsetTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
	})
	goBack.addEventListener('click',function() {
		window.scroll(0,0);
	})	
})