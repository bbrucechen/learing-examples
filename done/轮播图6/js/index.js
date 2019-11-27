window.onload = () => {
	const focus = document.querySelector('.focus');
	const arrowL = document.querySelector('.arrow-l');
	const arrowR = document.querySelector('.arrow-r');
	const ul = focus.querySelector('ul');
	const focusWidth = focus.offsetWidth;
	const ol = focus.querySelector('ol');
	const lis = ul.querySelectorAll('li');
	let num = 0;
	let circle = 0;
	let flag = true;

	focus.addEventListener('mouseover',function() {
		arrowL.style.display = 'block';
		arrowR.style.display = 'block';
		clearInterval(timer);
		timer = null;
	})

	focus.addEventListener('mouseout',function() {
		arrowL.style.display = 'none';
		arrowR.style.display = 'none';
		timer = setInterval(() => {
		arrowR.click();
	},2000)
	})

	for(let i = 0;i < lis.length;i++) {
		const li = document.createElement('li');
		ol.appendChild(li);
		li.setAttribute('index',i);
		li.addEventListener('click',function() {
			for(let i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
			num = i;
			circle = i;
			this.className = 'current';
			animate(ul,-i * focusWidth);
		})
	}

	ol.children[0].className = 'current';
	const lastone = ul.children[0].cloneNode(true);
	ul.appendChild(lastone);

	arrowR.addEventListener('click',function() {
		if(flag) {
			flag = false;
			if(num === ul.children.length - 1) {
			num = 0;		
			ul.style.left = 0;
		}
		num ++;
		animate(ul,-num * focusWidth,function() {
			flag = true;
		});
		if(circle === ul.children.length - 2) {
			circle = 0;
		} else {
			circle ++;
		}
		for(let i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
		ol.children[circle].className = 'current';
		}
		
	})

	arrowL.addEventListener('click',function() {
		if(flag) {
			flag = false;
			if(num <= 0) {
			num = ul.children.length - 1;		
			ul.style.left = (-num * focusWidth) + 'px';
		}
		num --;
		animate(ul,-num * focusWidth,function() {
			flag = true;
		});
		if(circle <= 0) {
			circle = ol.children.length;
		}
		circle --;
		for(let i = 0;i < ol.children.length;i ++) {
				ol.children[i].className = '';
			}
		ol.children[circle].className = 'current';
		}
		
	})

	let timer = setInterval(() => {
		arrowR.click();
	},2000)
}