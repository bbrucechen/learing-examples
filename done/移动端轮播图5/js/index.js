window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul  =focus.querySelector('ul');
	var ol = focus.querySelector('ol');
	var index = 0;
	var focusWidth = focus.offsetWidth;
	var flag = true;

	var timer = setInterval(function(){
  		index ++;
  		ul.style.transition = 'all .3s';
  		ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
	},2000)

	ul.addEventListener('transitionend',function() {
		if(index >= ul.children.length - 2) {
			index = 0;
			ul.style.transition = 'none';
			ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
		}
		if(index < 0) {
			index = 2;
			ul.style.transition = 'none';
			ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
		}
		ol.querySelector('.current').classList.remove('current');
		ol.children[index].classList.add('current');
		flag = true;
	})

	var startX = 0;
	var moveX = 0;
	ul.addEventListener('touchstart',function(e) {
			startX = e.targetTouches[0].pageX;
			console.log(startX);
			clearInterval(timer);
			timer = null;
	})
	ul.addEventListener('touchmove',function(e) {
			if(flag) {
				moveX = e.targetTouches[0].pageX - startX;
				ul.style.transition = 'none';
				ul.style.transform = 'translateX(' + (-index * focusWidth + moveX) + 'px)';
			}		
	})
	ul.addEventListener('touchend',function(){
		flag = false;
		if(Math.abs(moveX) > 50) {
			if(moveX > 0) {
				index --;
				ul.style.transition = 'all .3s';
				ul.style.transform = 'translateX(' + (-index * focusWidth + moveX) + 'px)';
			} else {
				index ++;
				ul.style.transition = 'all .3s';
				ul.style.transform = 'translateX(' + (-index * focusWidth + moveX) + 'px)';
			}
		}
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' + (-index * focusWidth ) + 'px)';
		timer = setInterval(function(){
  		index ++;
  		ul.style.transition = 'all .3s';
  		ul.style.transform = 'translateX(' + (-index * focusWidth) + 'px)';
	},2000)	
	})
	var navTop = document.querySelector('nav').offsetTop;
	var goBack = document.querySelector('.goBack');
	window.addEventListener('scroll',function() {
		if(window.pageYOffset > navTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';
		}
	})
	goBack.addEventListener('click',function() {
		window.scroll(0,0);
	})
})