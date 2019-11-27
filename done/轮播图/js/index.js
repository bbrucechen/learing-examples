window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('ol');
	var arrow_r = focus.querySelector('.arrow-r');
	var arrow_l = focus.querySelector('.arrow-l');
	var focusWidth = focus.offsetWidth;
	var num = 0;
	var circle = 0;
	//箭头浮现
	focus.addEventListener('mouseover',function() {
		arrow_r.style.display = 'block';
		arrow_l.style.display = 'block';
		clearInterval(move);
		move = null;
	})
	focus.addEventListener('mouseout',function() {
		arrow_r.style.display = 'none';
		arrow_l.style.display = 'none';
		move = setInterval(function(){
		arrow_r.click();
		},2000)
	})
	//生成小圆点及事件
	for(var i = 0 ;i < ul.children.length;i++) {
		var li = document.createElement('li');
		li.setAttribute('index',i);
		ol.appendChild(li);
		//小圆点击事件
		li.addEventListener('click',function() {
			for(var i = 0;i < ol.children.length;i++){
			ol.children[i].className = '';
		}
			this.className = 'current';
			var index = this.getAttribute('index');
			num = index;
			circle = index;
			animate(ul,- index * focusWidth);
		})
	}
	ol.children[0].className = 'current';
	//剪头功能部分
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);

	arrow_r.addEventListener('click',function() {
		if(num == ul.children.length - 1) {
			num = 0;
			ul.style.left = 0;
		} 
		num ++;	
		animate(ul,- num * focusWidth);

		circle ++;
		for(var i =0;i < ol.children.length;i++){
			ol.children[i].className = '';
		}
		if (circle == ul.children.length-1) {
			ol.children[0].className = 'current';
			circle = 0;
		} else {
			ol.children[circle].className = 'current';
		}				
	})

	arrow_l.addEventListener('click',function() {
		if(num == 0) {
			num = ul.children.length - 1;
			ul.style.left = - (ul.children.length-1) * focusWidth + 'px';
		} 
		num --;	
		animate(ul,- num * focusWidth);

		circle --;
		for(var i =0;i < ol.children.length;i++){
			ol.children[i].className = '';
		}
		if (circle < 0) {
			ol.children[ol.children.length-1].className = 'current';
			circle = ol.children.length-1;
		}
			ol.children[circle].className = 'current';				
	})

	//定时播放功能
	var move = setInterval(function(){
		arrow_r.click();
	},2000)
})