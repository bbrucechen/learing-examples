window.addEventListener('load',function() {
	var show = document.querySelector('.show');
	var expand = document.querySelector('.expand')
	var img = document.querySelector('.bigpic').querySelector('img');
	show.addEventListener('mouseover',function() {
		expand.style.display = 'block';
		show.addEventListener('mousemove',function(e) {
		var expandLeft = e.pageX - this.offsetLeft - (expand.offsetWidth / 2);
		var expandTop = e.pageY - this.offsetTop - (expand.offsetHeight / 2);
		if(expandLeft >= 100) {
			expandLeft = 100;
		} else if (expandLeft <= 0) {
			expandLeft = 0;
		}
		if(expandTop >= 100) {
			expandTop = 100;
		} else if (expandTop <= 0) {
			expandTop = 0;
		}
		expand.style.left = expandLeft +'px';
		expand.style.top = expandTop +'px';
		var moveX = (expandLeft / 100) * 250 ;
		var moveY = (expandTop / 100) * 250;
		img.style.left = -moveX +'px';
		img.style.top = -moveY +'px';

	})
	})
	show.addEventListener('mouseout',function() {
		expand.style.display = 'none';
	})
})