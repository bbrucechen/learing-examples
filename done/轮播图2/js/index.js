window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('ol');
	var arrow_r = document.querySelector('.arrow-r');
	var arrow_l = document.querySelector('.arrow-l');
	var focusWidth = focus.offsetWidth;
	var num = 0;
	var circle = 0;
	var flag = true;
	//箭头显现
	focus.addEventListener('mouseover',function() {
		arrow_r.style.display = 'block';
		arrow_l.style.display = 'block';
		clearInterval(timer);
		timer = null;
	})
	focus.addEventListener('mouseout',function() {
		arrow_r.style.display = 'none';
		arrow_l.style.display = 'none';
		timer = setInterval(function() {
		arrow_r.click();
	},2000)
	})
	//小圆点及事件
	for(var i = 0;i < ul.children.length;i ++) {
		li = document.createElement('li');
		li.setAttribute('index',i);
		ol.appendChild(li);
		ol.children[i].addEventListener('click',function() {
			for(var i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
			this.className = 'current';
			var index = this.getAttribute('index');
			num = index;
			circle = index;
			animate(ul,-index * focusWidt);
		})
	}
	ol.children[0].className = 'current';

	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	//剪头点击事件
	arrow_r.addEventListener('click',function() {
		if(flag) {
			flag = false;
			if(num >= ul.children.length - 1) {
			num = 0;
			ul.style.left = 0;
		}
		num ++;
		animate(ul,-num * focusWidth,function() {
			flag = true;
		});
		if (circle >= ol.children.length-1) {
			circle = 0;
		} else {
			circle ++;
		}
		for(var i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
		ol.children[circle].className = 'current';
		}
	})

	arrow_l.addEventListener('click',function() {
		if(flag) {
			flag = false;
			if(num == 0) {
			num = ul.children.length-1;
			ul.style.left = -num * focusWidth +'px';
		}
		num --;
		animate(ul,-num * focusWidth,function() {
			flag = true;
		});
		if (circle <= 0) {
			circle = ol.children.length-1;
		} else {
			circle --;
		}
		for(var i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
		ol.children[circle].className = 'current';
		}
	})
	var timer = setInterval(function() {
		arrow_r.click();
	},2000)
})