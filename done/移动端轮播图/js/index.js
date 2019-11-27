window.addEventListener('load',function() {
var focus = document.querySelector('.focus');
var ul = focus.children[0];
var ol = focus.querySelector('ol');
var index = 0;
var focusWidth = focus.offsetWidth;
//定时滚动
var timer = setInterval(function(){
	index ++;
	ul.style.transition = 'all .3s';
	ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
},2000)

//设置小圆点以及图的切换
ul.addEventListener('transitionend',function() {
	if(index >= ul.children.length-2) {
		index = 0;
		ul.style.transition = 'none';
		ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
	} 
	if(index < 0) {
		index = 2;
		ul.style.transition = 'none';
		ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
	}
	//利用交集选择器删除带有current类名的li
	ol.querySelector('li.current').classList.remove('current');
	ol.children[index].classList.add('current');
})

var mouseX=0;
var moveX =0;
ul.addEventListener('touchstart',function(e) {
	mouseX = e.targetTouches[0].pageX;
	clearInterval(timer);
})
ul.addEventListener('touchmove',function(e) {
	moveX = e.targetTouches[0].pageX - mouseX;
	ul.style.transition = 'none';
	ul.style.transform = 'translateX('+ (-index * focusWidth + moveX) +'px)';
	e.preventDefault();
})
ul.addEventListener('touchend',function(e){
	if (Math.abs(moveX) > 50 ) {
		if(moveX > 0) {
			index--;
			ul.style.transition = 'all .3s';
	ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
		}
		if(moveX < 0) {
			index ++;
			ul.style.transition = 'all .3s';
	ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
		}
	} else {
		ul.style.transition = 'all .3s';
	ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
	}
	clearInterval(timer);
	timer = setInterval(function(){
	index ++;
	ul.style.transition = 'all .3s';
	ul.style.transform = 'translateX('+ -index * focusWidth +'px)';
},2000)
})

//返回顶部显示
var nav =document.querySelector('nav');
var goBack = document.querySelector('.goBack');
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